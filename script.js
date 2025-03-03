const getCountTime = (time, mode = 'countdown') => {
    // Adjust the time for timezone differences
    const offset = (new Date(time)).getTimezoneOffset() * 60000;
    const adjustedTime = new Date(time).getTime() - offset;
    
    // Calculate the total time difference based on mode:
    // For countdown, we subtract now from the adjusted time.
    // For timer, we subtract the adjusted time from now.
    let total = mode === 'timer' 
        ? Date.now() - adjustedTime 
        : adjustedTime - Date.now();

    const milliYear = 31556952000;
    const milliWeek = 604800000;
    const milliDay = 86400000;
    const milliHour = 3600000;
    
    let years = Math.floor(total / milliYear);
    let weeks = Math.floor((total - (years * milliYear)) / milliWeek);
    let days = Math.floor((total - (years * milliYear) - (weeks * milliWeek)) / milliDay);
    let hours = Math.floor((total - (years * milliYear) - (weeks * milliWeek) - (days * milliDay)) / milliHour);
    let minutes = Math.floor((total % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((total % (1000 * 60)) / 1000);
    let totalDays = Math.floor(total / (1000 * 60 * 60 * 24));

    // Padding values for display consistency
    weeks = weeks < 10 ? '0' + weeks : weeks;
    days = days < 10 ? '0' + days : days;
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;

    return {
        total,
        years,
        weeks,
        totalDays,
        days,
        hours,
        minutes,
        seconds
    };
}

let gary_countdown = 'December 31 2060 23:59:59'

document.querySelectorAll('.timer').forEach(timer => {
    const deadline = timer.dataset.deadline;
    const mode = timer.dataset.mode;
    
    // Update timer every second.
    setInterval(() => {
      const timeData = getCountTime(deadline, mode);
      
      // Update only the relevant parts. Adjust keys if needed.
      timer.querySelector('.years').textContent = timeData.years;
      timer.querySelector('.weeks').textContent = timeData.weeks;
      timer.querySelector('.days').textContent = timeData.days;
      timer.querySelector('.hours').textContent = timeData.hours;
    }, 1000);
  });
  

  const setTimerNumber = (getCountTime, gary_countdown) => {
    let times = getCountTime(gary_countdown, 'countdown')
    document.getElementById("progress-bar").value = times.seconds
}
let resetTimer = setInterval(setTimerNumber, 1000, getCountTime, gary_countdown);