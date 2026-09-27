const countdown = document.getElementById('countdown')
const daysElement = document.getElementById('days')
const hoursElement = document.getElementById('hours')
const minutesElement = document.getElementById('minutes')
const secondsElement = document.getElementById('seconds')

const inputHours = document.getElementById('inputHours')
const inputMinutes = document.getElementById('inputMinutes')
const inputSeconds = document.getElementById('inputSeconds')
const startButton = document.getElementById('startButton')

let countdownInterval;

function startTimer() {
    let hours = parseInt(inputHours.value) || 0
    let minutes = parseInt(inputMinutes.value) || 0
    let seconds = parseInt(inputSeconds.value) || 0

    let totalTimeInSecond = hours * 3600 + minutes * 60 + seconds

    if (totalTimeInSecond <= 0) {
        alert("Please enter a valid time")
        return
    }

    inputHours.value = ''
    inputMinutes.value = ''
    inputSeconds.value = ''

    countdownInterval = setInterval(()=> {
        const daysText = Math.floor(totalTimeInSecond /86400)
        const hoursText = Math.floor((totalTimeInSecond %86400) /3600)
        const minutesText = Math.floor((totalTimeInSecond %3600) /60)
        const secondsText = Math.floor((totalTimeInSecond %60))

        daysElement.textContent = daysText.toString().padStart(2,'0')
        hoursElement.textContent = hoursText.toString().padStart(2,'0')
        minutesElement.textContent = minutesText.toString().padStart(2,'0')
        secondsElement.textContent = secondsText.toString().padStart(2,'0')

        totalTimeInSecond--

        if (totalTimeInSecond < 0){
            clearInterval(countdownInterval)
            alert("Time's up!")
        }
    },1000

)
}

startButton.addEventListener('click', ()=>{
    clearInterval(countdownInterval)
    startTimer()
})