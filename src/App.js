import React from "react";
import './App.css'
import DropDown from './components/DropDown/DropDown';

const listvalues = ["Blog", "Academy", "youtube"];
export default function App() {
  return (
    <div className='App'>
      <DropDown listvalues={listvalues}/>
    </div>
  );
}