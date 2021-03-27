const d = document,
    w = window;

export default function responsiveMedia(id, mq, mobileContend, desktopContend) {
    let breakpoint = w.matchMedia(mq);

    const responsive = (e) => {
        if (e.matches) {
            d.getElementById(id).innerHTML = desktopContend;
        } else {
            d.getElementById(id).innerHTML = mobileContend;
        }
        // console.log("MQ", breakpoint, e.matches);
    }

    breakpoint.addListener(responsive);
    responsive(breakpoint);
}