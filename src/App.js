import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import { useState } from 'react';


function App() {

  const [name, setName] = useState('Wall');
  const [name1, setName1] = useState('');

  const handleEventClick = () => {
    setName(name1);
  };

  const handleOnchangeInput = (event) => {
    setName1(event.target.value)
  }


  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello world with {name}</p>
        <input type='text' value={name1} onChange={(event) => handleOnchangeInput(event)} />
        <button type='button' onClick={handleEventClick}>Click me</button>
      </header>
    </div>
  );
}

export default App;
