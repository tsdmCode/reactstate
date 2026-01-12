import { useState } from 'react';

export function Greeting() {
  const [greeting, setGreeting] = useState('Mogens');

  return (
    <>
      <input onChange={(e: React.ChangeEvent<HTMLInputElement>) => setGreeting(e.target.value)} type="text"></input>
      <h2>Send en hilsen til: {greeting}</h2>
    </>
  );
}
