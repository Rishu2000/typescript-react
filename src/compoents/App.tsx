import React from 'react';
import '../styles/App.css';
import TextField from './TextField';

function App() {

// const funVoid: string {
//   return 'rgergergr';
// }

  return (
    <div className="App">
      <TextField text="Rishav kumar" obj={{firstName:"Rishav", lastName:"kumar"}}
        handleChange={(event) => {
          console.log(event.target.value);
        }}
        />
    </div>
  );
}

export default App;
