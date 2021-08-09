import React, { useState, useEffect } from 'react';

export interface CounterProps {
  description: string;
  defaultCount: number;
}

export function Counter({ description, defaultCount }: CounterProps) {
  const [count, setCount] = useState(defaultCount);
  const [incrementor, setIncrementor] = useState(1);
  const [isBig, setIsBig] = useState(defaultCount >= 15);

  useEffect(() => {
    let id: NodeJS.Timeout;
    if (count >= 15) {
      id = setTimeout(() => {
        setIsBig(true);
      }, 300);
    }

    return () => {
      clearTimeout(id);
    };
  }, [count]);
  return (
    <div>
      <h2>
        DESC: {description} - DC: {defaultCount}
      </h2>
      <label>
        Incrementor:
        <input
          value={incrementor}
          onChange={(evt) => {
            setIncrementor(parseInt(evt.target.value) || 1);
          }}
          type="number"
        />
      </label>
      <button
        aria-label="Decrement Counter"
        onClick={() => setCount(count - incrementor)}
      >
        -
      </button>
      Current Count: {count}
      <button
        aria-label="Increment Counter"
        onClick={() => setTimeout(() => setCount(count + incrementor), 300)}
      >
        +
      </button>

      {!isBig && <div>I am too small</div>}
    </div>
  );
}