const timer = '1 Jan 2022';

function countdown() {
  const newYearDate = new Date(timer);
  const currentDate = new Date();

  const seconds = (timer - currentDate) * 1000;
  const days = Math.floor(seconds / 3600 / 24);

  console.log(days);
}

countdown();

setInterval(countdown, 1000);
