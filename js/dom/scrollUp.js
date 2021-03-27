const d = document,
        w = window;

export default function scrollUp(btnScroll) {
    const $scrollBtn = d.querySelector(btnScroll);

    w.addEventListener("scroll", (e) => {
        let scrollTop = w.pageYOffset || d.documentElement.scrollTop;

        if (scrollTop > 1200) {
            $scrollBtn.classList.remove("hidden");
        } else {
            $scrollBtn.classList.add("hidden");
        }
        // console.log(w.pageYOffset, d.documentElement.scrollTop);
    });
    d.addEventListener("click", (e) => {
        if (e.target.matches(btnScroll)) {
            w.scrollTo({
                behavior: "smooth",
                top: 0,
            })
        }
    });
}