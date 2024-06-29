import './App.css';
import React, { useState } from 'react'
import Second from './new_folder/second'


const tema = {
  dark: {
    color: "white",
    backgroundColor: "black"
  },
  light: {
    color: "black",
    backgroundColor: "white"
  }
};

export const temaVeri = React.createContext()

function App() {

  const [deyer, setDeyer] = useState(tema.dark)

  function Dəyişdir() {
    if (tema.dark === deyer) {
      setDeyer(tema.light)
    }
    else {
      setDeyer(tema.dark)
    }
  }

  return (
    <div className="App">
      <button onClick={Dəyişdir}>
        {tema.dark === deyer ? "Light" : "Dark"}
      </button>

      <temaVeri.Provider value={deyer}>
        <Second />
      </temaVeri.Provider>

    </div>
  );
}

export default App;