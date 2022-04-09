console.log('hello')

let deadline = 'December 31 2060 23:59:59'
// let deadline = 'December 31 2022 23:59:59'
// let deadline = 'September 30 2060 23:59:59'

const getCountDownTime = (deadline) => {
    const offset = ((new Date(deadline)).getTimezoneOffset() * 60000)
    const total = ((new Date(deadline).getTime()) - offset) - (Date.now() - offset)

    const milliYear = 31556952000
    const milliWeek = 604800000
    const milliDay = 86400000
    const milliHour = 3600000
    let years = Math.floor(total / milliYear)

    let weeks = Math.floor((total - (milliYear * years)) / milliWeek)    
    let days = Math.floor((total - (years * milliYear) - (weeks * milliWeek)) / milliDay)    
    let hours = Math.floor((total - (years * milliYear) - (weeks * milliWeek) - (days * milliDay)) / milliHour)    
    let minutes = Math.floor((total % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((total % (1000 * 60)) / 1000);
    let totalDays = Math.floor(total / (1000 * 60 * 60 * 24));

    if(weeks < 10){ weeks = '0' + weeks}
    if(days < 10){ days = '0' + days}
    if(hours < 10){ hours = '0' + hours}
    if(minutes < 10){ minutes = '0' + minutes}

    return {
        'total': total,
        'years': years,
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

    document.getElementById("weeks-timer").innerHTML = times.years
    document.getElementById("day-timer").innerHTML = times.weeks
    document.getElementById("hours-timer").innerHTML = times.days
    document.getElementById("minutes-timer").innerHTML = times.hours
    document.getElementById("progress-bar").value = times.seconds
}

let resetTimer = setInterval(setTimerNumber, 1000, getCountDownTime, deadline);