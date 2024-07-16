import { FunctionComponent } from 'preact';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';

// Main App component
export const App: FunctionComponent = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <Dashboard />
      </div>
    </div>
  );
};
