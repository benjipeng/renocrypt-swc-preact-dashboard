import { render } from 'preact';
import { App } from './App';
import './styles/index.css';

// Render the main App component to the DOM
render(<App />, document.getElementById('app')!);