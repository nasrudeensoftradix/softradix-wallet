import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Test from './Test'
import Web3 from 'web3';

declare global {
  interface Window {
    ethereum?: any
  }
}
interface DummyProps {
  number: Number,
  setNumber: Number

}
const App: React.FC<DummyProps> = ({ number, setNumber }) => {
  return (
    <div className="App">
      <Test />
    </div>
  );
}

export default App;
