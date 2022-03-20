const timerTime = document.querySelector('.timer__time');

const fValue = value => value < 10 ? `0${value}` : value;

const deadline = '31 march 2022';
let interval;

const updateTimer = () => {
  const date = new Date().getTime(),
        dateDeadline = new Date(deadline).getTime(),
        timeRemaning = (dateDeadline > date) ? (dateDeadline - date) / 1000 : 0,
        seconds = Math.floor(timeRemaning) % 60,
        hours = Math.floor(timeRemaning / 60 / 60),
        minutes = Math.floor(timeRemaning / 60) % 60;

  if (dateDeadline < date) clearInterval(interval);
  timerTime.textContent = `${fValue(hours)}:${fValue(minutes)}:${fValue(seconds)}`;
};

updateTimer();
interval = setInterval(updateTimer, 500);
