import React, { useState } from 'react';
import './AuthenticatedView.css';

const AuthenticatedView = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSendClick = () => {
    // Placeholder function for sending data
    console.log('Input value sent:', inputValue);
  };

  return (
    <div className="authenticated-view-container">
      <h1>Welcome back!</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacinia, lorem id suscipit tincidunt, purus orci accumsan nisl, vel accumsan risus lorem ut metus.
      </p>
      <div className="input-container fixed-bottom">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter your query"
          className="multi-line-input"
        />
        <button onClick={handleSendClick} className="btn btn-success send-button">
          Send
        </button>
      </div>
    </div>
  );
};

export default AuthenticatedView;