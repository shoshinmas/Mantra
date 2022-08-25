'use strict';

import getCurrentTime from './clock';
import getDay from './day';
import getTask from './task';
import './app.css';


(function() {
  function setTime() {
    const time = getCurrentTime();

    document.getElementById('clock').innerHTML = time;
  }

  function setDay() {
    const day = getDay();

    document.getElementById('day').innerHTML = day;
  }

  function setTask(value) {
    let taskValue = value;
    let taskText = getTask() + taskValue;

    document.getElementById('task').innerHTML = taskText;
  }

  function setupDashboard() {
    setDay();
    setTime();
    setTask();
    setInterval(setTime, 1000);
  }

  setupDashboard(taskInput);

  // Communicate with background file by sending a message
  chrome.runtime.sendMessage(
    {
      type: 'GREETINGS',
      payload: {
        message: 'Hello, Im Marcin. This is Mantra app.',
      },
    },
    response => {
      console.log(response.message);
    }
  );
})();
