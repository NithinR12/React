import React from 'react';
import ReactDOM from 'react-dom/client';
import './Header.css';

const Header = () => {
  return (
    <header>
      <nav>
        <img src="./icon.png" alt="Logo" className="img-logo" />
        <input type="text" className="input" placeholder="Type something..." />
        <img src="./profile.png" alt="" className="img-profile" />
      </nav>
    </header>
  );
};


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Header />);

const root2 = ReactDOM.createRoot(document.getElementById('root2'));

root2.render(<Header />);