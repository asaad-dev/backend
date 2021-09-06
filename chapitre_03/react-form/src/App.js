import './App.css';
import React from 'react';

function App() {
  return (
    <div className="App">
      <h1>Simple form</h1>
      <form className="form">
        <label htmlFor="user">
          User:
          <input type="text" name="name"/>
        </label>
        
        <label htmlFor="image">
          Photo:
          <input type="file" name="photo"/>
          <button type="submit">Send</button>
        </label>
      </form>
    </div>
  );
}

export default App;
