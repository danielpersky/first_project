import { useState } from 'preact/hooks';

export default function Greeting({messages}) {

  const randomMessage = () => messages[(Math.floor(Math.random() * messages.length))];

  const [greeting, setGreeting] = useState(messages[0]);

  return (
    <div>
      <h3>Just an advice for you today</h3>
      <p>{greeting}</p>
      <button className="greeting-button" onClick={() => setGreeting(randomMessage())}>
        New advice
      </button>
    </div>
  );
}