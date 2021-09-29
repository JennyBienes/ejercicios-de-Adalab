import { useState } from "react";
import Overview from "./Overview";
import "../styles/App.css";

function App() {
 

  return (
    <div>
    <nav>
      <ul>
        <li><a href='/overview'>Overview</a></li>
        <li><a href='/repositories'>Repositories</a></li>
        <li><a href='/Packages'>Packages</a></li>
        <li><a href='/people'>People</a></li>
        <li><a href='/teams'>Teams</a></li>
        <li><a href='/projects'>Projects</a></li>
        <li><a href='/settings'>Settings</a></li>
      </ul>
    </nav>
    </div>
  );
};

export default App;
