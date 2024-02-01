import React, { useState, useEffect } from 'react';

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [isPaused, setPaused] = useState(false);

  useEffect(() => {
    let interval;

    if (!isPaused) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <div style={{ position: 'absolute', top: 10, left: 10, color: 'black' }}>
      <p>Time: {time}s</p>
      <button onClick={() => setPaused((prevPaused) => !prevPaused)}>
        {isPaused ? 'Resume' : 'Pause'}
      </button>
    </div>
  );
};

export default Stopwatch;
