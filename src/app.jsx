import React, { useState } from 'react';
import './app.css';
import { TaskList, Timer } from './components';

function App() {
  const [timerOn, setTimerOn] = useState();
  const [time, setTime] = useState(0);
  const toggleTimer = () => setTimerOn(!timerOn);

  return (
    <div className="app">
      <Timer
        onClick={toggleTimer}
        active={timerOn}
        time={time}
        setTime={setTime}
      />
      <TaskList timerOn={timerOn} toggleTimer={toggleTimer} />
    </div>
  );
}

export default App;
