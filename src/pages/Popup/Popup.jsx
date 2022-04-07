import React from 'react';
import './Popup.css';
import logo from '../../assets/img/logo.png';

const Popup = () => {
  return (
    <div className="App">
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <img
          src={logo}
          alt="Bevel DM logo"
          height="50"
          width="50"
          style={{ marginRight: 10 }}
        />
        <span style={{ fontSize: 15, fontWeight: 'bold' }}>
          Bevel Download Manager
        </span>
      </div>
    </div>
  );
};

export default Popup;
