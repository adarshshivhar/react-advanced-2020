import React from 'react';
import { useState } from 'react';

const TaskScheduler = () => {
  const [server, setServer] = useState(0);
  const [task, setTask] = useState(0);
  const [dis, setDis] = useState(false);
  const [taser, setTaser] = useState(0);
  const [progress, setProgress] = useState(0);

  const checkServer = (ser) => {
    if (ser > 12) {
      alert(`You can't add more server`);
      setServer(12);
    }
    if (ser < 0) {
      alert(`Server can't be negative`);
      setServer(0);
    }
    return ser;
  };

  const checkTask = (tas) => {
    if (tas < 0) {
      alert(`Task can't be negative`);
      setTask(0);
    }
    return tas;
  };
  const addServer = () => {
    setServer((prev) => {
      let newServer = prev + 1;
      return checkServer(newServer);
    });
  };

  const removeServer = () => {
    setServer((prev) => {
      let newServer = prev - 1;
      return checkServer(newServer);
    });
  };

  const addTask = () => {
    setTask((prev) => {
      let newTask = prev + 1;
      return checkTask(newTask);
    });
  };

  const removeTask = () => {
    setTask((prev) => {
      let newTask = prev - 1;
      return checkTask(newTask);
    });
  };

  const showResults = () => {
    setDis(true);
    setTaser(task - server);
    move();
  };

  const move = () => {
    let id = setInterval(frame, 25);
    function frame() {
      if (progress >= 100) {
        clearInterval(id);
        setProgress(1);
      } else {
        setProgress((prev) => {
          return prev + 1;
        });
      }
    }
    progressBar();
  };

  const progressBar = () => {
    if (progress <= 100 && taser >= 1 && task !== 0 && server !== 0) {
      return [...Array(taser)].map((e, i) => {
        return (
          <div key={i}>
            <div className='w3-light-grey'>
              <div
                className='w3-blue'
                style={{ height: '24px', width: `${progress}%` }}
              ></div>
            </div>
            <br />
            <br />
          </div>
        );
      });
    }
    return <div></div>;
  };
  return (
    <>
      <div>
        <input
          type='number'
          disabled
          value={server}
          style={{ textAlign: 'center' }}
        />
        <button className='btn' onClick={addServer}>
          Add Server
        </button>
        <button className='btn' onClick={removeServer}>
          Remove Server
        </button>
      </div>
      <div>
        <input
          type='number'
          disabled
          value={task}
          style={{ textAlign: 'center' }}
        />
        <button className='btn' onClick={addTask} disabled={dis}>
          Add Task
        </button>
        <button className='btn' onClick={removeTask} disabled={dis}>
          Remove Task
        </button>
      </div>
      <div>
        <button className='btn' onClick={showResults}>
          Show Results
        </button>
      </div>
      <div>{dis && progressBar()}</div>
    </>
  );
};

export default TaskScheduler;
