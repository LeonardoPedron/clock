console.log('SCRIPT COLLEGATO');

document.addEventListener('DOMContentLoaded', (event) => {
    setInterval(() => {
        const date = new Date();
        let time = getClock(date);
        
        document.querySelector('.clock').textContent = time;
    }, 1000);
});

const getClock = (date) => {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    hours < 10? hours = `0${hours}`: hours = hours;
    minutes < 10? minutes = `0${minutes}`: minutes = minutes;
    seconds < 10? seconds = `0${seconds}`: seconds = seconds;

    let str = `${hours}:${minutes}:${seconds}`;

    return str;
}