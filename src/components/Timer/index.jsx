import React, { useState, useEffect } from 'react';
import { formatTimeWithMode } from '../../utils';
import './timer.css';
import Overlay from '../Overlay';

let timer;

const Timer = ({ active, onClick, setTime, time }) => {
  const [timerMode, setTimerMode] = useState();
  const toggleTimerMode = event => {
    event.stopPropagation();
    setTimerMode(!timerMode);
  };

  useEffect(() => {
    if (active) timer = setTimeout(() => setTime(time + 1), 1000);
    else clearInterval(timer);
  }, [time, active, setTime]);

  return (
    <Overlay open={active} onClick={onClick}>
      <div className="timer-container" onClick={toggleTimerMode}>
        {formatTimeWithMode(time, 900, timerMode)}
      </div>
    </Overlay>
  );
};

export default Timer;
