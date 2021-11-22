console.log('hello')

let deadline = 'December 31 2021 023:59:59'

const getCountDownTime = (deadline) => {
    const total = (new Date(deadline).getTime()) - Date.now()
    let weeks = Math.floor(total / (1000 * 60 * 60 * 24 * 7));
    if(weeks < 10){ weeks = '0' + weeks}
    let days = Math.floor(total % (1000 * 60 * 60 * 24 * 7) / (1000 * 60 * 60 * 24));
    if(days < 10){ days = '0' + days}
    let hours = Math.floor((total % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    if(hours < 10){ hours = '0' + hours}
    let minutes = Math.floor((total % (1000 * 60 * 60)) / (1000 * 60));
    if(minutes < 10){ minutes = '0' + minutes}

    let seconds = Math.floor((total % (1000 * 60)) / 1000);
    let totalDays = Math.floor(total / (1000 * 60 * 60 * 24));
    
    
    return {
        'total': total,
        'weeks': weeks,
        'totalDays': totalDays,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    }
}

const setTimerNumber = (getCountDownTime, deadline) => {
    let times = getCountDownTime(deadline)
    // console.log(times)

    document.getElementById("weeks-timer").innerHTML = times.weeks
    document.getElementById("day-timer").innerHTML = times.days
    document.getElementById("hours-timer").innerHTML = times.hours
    document.getElementById("minutes-timer").innerHTML = times.minutes
    document.getElementById("progress-bar").value = times.seconds
    // document.getElementById("seconds-timer").innerHTML = times.seconds
}

let resetTimer = setInterval(setTimerNumber, 1000, getCountDownTime, deadline);