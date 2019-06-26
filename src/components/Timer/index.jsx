import React, { useState, useEffect } from 'react';
import { formatTime } from '../../utils';

let timer;

const Timer = props => {
  const [timerMode, setTimerMode] = useState();
  const toggleTimerMode = () => setTimerMode(!timerMode);

  useEffect(() => {
    if (props.active)
      timer = setTimeout(() => props.setTime(props.time + 1), 1000);
    else clearInterval(timer);
  }, [props.time, props.active]);
  return (
    <div onClick={toggleTimerMode}>{formatTime(props.time, timerMode)}</div>
  );
};

export default Timer;
