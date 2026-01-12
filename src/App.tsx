import './App.scss';
import { Greeting } from './components/Greeting';
import { Counter } from './components/Counter';
import { useState } from 'react';
import { Modal } from './components/Modal';

function App() {
  const [isOpen, toggleOpen] = useState(false);

  function handleClick() {
    toggleOpen(!isOpen);
  }

  return (
    <>
      <Greeting />
      <Counter />
      <button onClick={handleClick}>ÅBEN EN DIALOG</button>
      {isOpen && (
        <Modal>
          <h2>hej hej kom og se min tissemand</h2>
          <button onClick={handleClick}>Skjul min tissemand</button>
        </Modal>
      )}
    </>
  );
}

export default App;
