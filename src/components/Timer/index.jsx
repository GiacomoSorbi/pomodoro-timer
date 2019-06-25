import React, { useState, useEffect } from 'react';

let timer;
const Timer = props => {
  const [time, setTime] = useState(0);
  useEffect(() => {
    if (props.active) timer = setTimeout(() => setTime(time + 1), 1000);
    else clearInterval(timer);
  }, [time, props.active]);
  return <div>{time}</div>;
};

export default Timer;
