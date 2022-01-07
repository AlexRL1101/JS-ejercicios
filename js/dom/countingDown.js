const d = document;

export default function countingDown(dateLimit, obj, message) {
    const da = new Date(dateLimit).getTime();
    let temp,
        rightNow = new Date().getTime(),
        difference,
        days,
        hours,
        minutes,
        seconds;

    if (rightNow < da) {
        temp = setInterval(() => {
            difference = da - rightNow
            days = Math.floor(difference / (1000 * 60 * 60 * 24))
            hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
            minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
            seconds = Math.floor((difference % (1000 * 60)) / 1000)

            d.querySelector(obj).innerHTML = `${days} días ${hours} horas ${minutes} minutos ${seconds} segundos`;
            rightNow = new Date().getTime()
        }, 1000);
    } else {
        clearTimeout(temp);
        d.querySelector(obj).innerHTML = null;
        alert(message);
    }
}