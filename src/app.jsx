import React, { useState } from 'react';
import './app.css';
import { Button, Timer } from './components';
import Overlay from './components/Overlay';

function App() {
  const [timerOn, setTimerOn] = useState();
  const [time, setTime] = useState(0);
  const toggleTimer = () => setTimerOn(!timerOn);

  return (
    <div className="app">
      <Overlay onClick={toggleTimer} open={timerOn}>
        <Timer active={timerOn} time={time} setTime={setTime} />
      </Overlay>
      <Button className="btn-default" onClick={toggleTimer}>
        {timerOn ? 'Stop' : 'Start'} Timer
      </Button>
    </div>
  );
}

export default App;
