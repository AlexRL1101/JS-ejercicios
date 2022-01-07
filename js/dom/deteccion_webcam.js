const d = document,
    n = navigator;

export default function webCam(id) {
    const $video = d.getElementById(id);

    if (n.mediaDevices.getUserMedia) {
        n.mediaDevices
            .getUserMedia({ video: true, audio: false })
            .then((stream) => {
                $video.srcObject = stream;
                $video.play();
            })
            .catch((err) => {
                $video.insertAdjacentHTML("beforebegin", `<p>Sucedió el sigueinte error: <b>${err}</b></p>`)
                console.log(`Sucedió el sigueinte error: ${err}`)
            });
    }
}
