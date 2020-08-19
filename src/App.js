import React from 'react';
import './App.css';

// import Dat from './Components/CPieChart' 


import { Barplot } from "./Components/Barplot";

function App() {

  return (

    <div className="App">
{/* 
      <Dat/> */}
  
  <Barplot
        data={[
          { group: "A", value: 4 },
          { group: "B", value: 16 },
          { group: "C", value: 8 }
        ]}
      />

    </div>

  );
}

export default App;

