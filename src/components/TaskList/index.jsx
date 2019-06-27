import React from 'react';
import Button from '../Button';
import './TaskList.css';

const TaskList = props => (
  <div className="task-list-container">
    <div className="options">
      <Button className="btn-default" onClick={props.toggleTimer}>
        {props.timerOn ? '||' : '►'}
      </Button>
      <Button className="btn default" onClick={props.toggleTimer}>
        +🍅
      </Button>
      <Button className="btn default" onClick={props.toggleTimer}>
        Shuffle
      </Button>
      <Button className="btn default" onClick={props.toggleTimer}>
        Options
      </Button>
      <Button className="btn default" onClick={props.toggleTimer}>
        💾
      </Button>
    </div>
    <div className="tasks-container">Tasks here</div>
  </div>
);

export default TaskList;
