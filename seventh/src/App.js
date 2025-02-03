import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import PortalComponent from './PortalComponent';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="App">
              <h1>React Portal Example</h1>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>

      {isOpen && (
        <PortalComponent>
          <div className="modal">
            <h2>Modal Title</h2>
            <p>This is a modal rendered using a portal.</p>
            <button onClick={() => setIsOpen(false)}>Close Modal</button>
          </div>
        </PortalComponent>
      )}

    </div>
  );
}

export default App;
