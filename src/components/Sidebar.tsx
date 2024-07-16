import { FunctionComponent } from 'preact';
import { useState } from 'preact/hooks';

export const Sidebar: FunctionComponent = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div
      className={`bg-gray-800 text-white w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition duration-200 ease-in-out`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="absolute right-0 top-0 mt-4 -mr-8 bg-gray-800 rounded-r-lg px-2 py-1"
      >
        {isOpen ? '←' : '→'}
      </button>
      <nav>
        <a
          href="#"
          className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white"
        >
          Home
        </a>
        <a
          href="#"
          className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white"
        >
          Analytics
        </a>
        <a
          href="#"
          className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white"
        >
          Settings
        </a>
      </nav>
    </div>
  );
};
