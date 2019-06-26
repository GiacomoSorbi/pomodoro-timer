import React, { useState } from 'react';
import './app.css';
import { Button, Timer } from './components';

function App() {
  const [timerOn, setTimerOn] = useState();
  const [time, setTime] = useState(0);
  const toggleTimer = () => setTimerOn(!timerOn);

  return (
    <div className="app">
      <Timer active={timerOn} time={time} setTime={setTime} />
      <Button onClick={toggleTimer}>{timerOn ? 'Stop' : 'Start'}</Button>
    </div>
  );
}

export default App;
