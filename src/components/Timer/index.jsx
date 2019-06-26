import React, { useState, useEffect } from 'react';
import { formatTimeWithMode } from '../../utils';
import './timer.css';

let timer;

const Timer = props => {
  const [timerMode, setTimerMode] = useState();
  const toggleTimerMode = event => {
    event.stopPropagation();
    setTimerMode(!timerMode);
  };

  useEffect(() => {
    if (props.active)
      timer = setTimeout(() => props.setTime(props.time + 1), 1000);
    else clearInterval(timer);
  }, [props.time, props.active]);

  return (
    <div className="timer-container" onClick={toggleTimerMode}>
      {formatTimeWithMode(props.time, 900, timerMode)}
    </div>
  );
};

export default Timer;
