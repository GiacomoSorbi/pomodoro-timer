import React, { useState } from 'react';
import './app.css';
import { Button, Timer } from './components';

function App() {
  const [timerOn, setTimerOn] = useState();
  const useTimer = () => setTimerOn(!timerOn);

  return (
    <div className="app">
      <Timer active={timerOn} />
      <Button onClick={useTimer}>{timerOn ? 'Stop' : 'Start'}</Button>
    </div>
  );
}

export default App;
