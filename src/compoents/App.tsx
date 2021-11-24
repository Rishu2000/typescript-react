import React from 'react';
import '../styles/App.css';
import TextField from './TextField';

function App() {
  return (
    <div className="App">
      <TextField text="Rishav kumar" ok={true} num={23}/>
    </div>
  );
}

export default App;
