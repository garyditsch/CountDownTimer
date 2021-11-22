console.log('hello')

let deadline = 'December 31 2022 023:59:59'

const getCountDownTime = (deadline) => {
    const total = (new Date(deadline).getTime()) - Date.now()
    let days = Math.floor(total / (1000 * 60 * 60 * 24));
    let hours = Math.floor((total % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((total % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((total % (1000 * 60)) / 1000);
    
    
    return {
        'total': total,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    }
}

const setTimerNumber = (getCountDownTime, deadline) => {
    const times = getCountDownTime(deadline)

    document.getElementById("day-timer").innerHTML = times.days
    document.getElementById("hours-timer").innerHTML = times.hours
    document.getElementById("minutes-timer").innerHTML = times.minutes
    document.getElementById("seconds-timer").innerHTML = times.seconds
}

let resetTimer = setInterval(setTimerNumber, 1000, getCountDownTime, deadline);
// let resettingTimer = setInterval(setTimerNumber(times), 1000)
// setInterval(function(){ alert("Hello"); }, 3000);