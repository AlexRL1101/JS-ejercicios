const d = document;

export function watchDigital(clock, start, stop) {

    let clockTempo;

    d.addEventListener("click", (e) => {
        if (e.target.matches(start)) {
            clockTempo = setInterval(() => {
                let clockHour = new Date().toLocaleTimeString();
                d.querySelector(clock).innerHTML = `${clockHour}`;
            }, 1000);
            e.target.disabled = true;
        }

        if (e.target.matches(stop)) {
            d.querySelector(clock).innerHTML = null;
            clearInterval(clockTempo);
            d.querySelector(start).disabled = false;
        }
    });
}

export function alarm(sound, play, stop) {

    let alarmTempo;
    const $alarm = d.createElement("audio");
    $alarm.src = sound;

    d.addEventListener("click", (e) => {
        if (e.target.matches(play)) {
            alarmTempo = setTimeout(() => {
                $alarm.play();
            }, 1000);
            e.target.disabled = true;
        }

        if (e.target.matches(stop)) {
            clearTimeout(alarmTempo);
            $alarm.pause();
            $alarm.currentTime = 0;
            d.querySelector(play).disabled = false;
        }
    });
}