import { useState } from 'react';

export function Counter() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount((count) => count + 1);
  }

  return (
    <>
      <p>Du har trykket {count} gange (Det kunne dog være et større tal)</p>
      <button onClick={handleClick}>Number go up</button>
    </>
  );
}
