import React from 'react';
import '../styles/App.css';
import TextField from './TextField';

function App() {

// const funVoid: string {
//   return 'rgergergr';
// }

  return (
    <div className="App">
      <TextField text="Rishav kumar" obj={{firstName:"Rishav", lastName:"kumar"}}/>
    </div>
  );
}

export default App;
