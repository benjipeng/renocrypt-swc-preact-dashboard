const express = require('express');
const path = require('path');
const chokidar = require('chokidar');
const esbuild = require('esbuild');
const { WebSocketServer } = require('ws');
const postcss = require('postcss');
const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');
const fs = require('fs').promises;

const app = express();
const port = 3000;

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Serve index.html for all routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
const server = app.listen(port, () => {
  console.log(`Dev server running at http://localhost:${port}`);
});

// WebSocket server for live reload
const wss = new WebSocketServer({ server });

// Build function
async function build() {
  try {
    console.log('Starting build process...');

    // Build JS
    console.log('Building JavaScript...');
    await esbuild.build({
      entryPoints: ['src/index.tsx'],
      bundle: true,
      outfile: 'public/bundle.js',
      define: { 'process.env.NODE_ENV': '"development"' },
      loader: { '.tsx': 'tsx', '.ts': 'ts' },
      jsx: 'automatic',
      jsxImportSource: 'preact',
    });
    console.log('JavaScript build completed.');

    // Build CSS
    console.log('Building CSS...');
    const css = await fs.readFile('src/styles/index.css', 'utf8');
    const result = await postcss([tailwindcss, autoprefixer]).process(css, {
      from: 'src/styles/index.css',
      to: 'public/styles.css',
    });
    await fs.writeFile('public/styles.css', result.css);
    console.log('CSS build completed.');

    console.log('Build process completed successfully.');
    wss.clients.forEach((client) => client.send('reload'));
  } catch (error) {
    console.error('Build failed:', error);
  }
}

// Initial build
build();

// Watch for file changes
chokidar
  .watch(['src/**/*', 'public/index.html'])
  .on('change', (event, path) => {
    console.log(`File ${path} has been changed`);
    build();
  });

// Serve bundle.js with error handling
app.get('/bundle.js', (req, res) => {
  fs.readFile(path.join(__dirname, 'public', 'bundle.js'), 'utf8')
    .then((content) => {
      res.type('application/javascript');
      res.send(`
        // Live reload script
        (function() {
          const socket = new WebSocket('ws://' + location.host);
          socket.onmessage = function(msg) {
            if (msg.data === 'reload') window.location.reload();
          };
        })();

        ${content}
      `);
    })
    .catch((err) => {
      console.error('Error serving bundle.js:', err);
      res.status(500).send('Error loading bundle.js');
    });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});
