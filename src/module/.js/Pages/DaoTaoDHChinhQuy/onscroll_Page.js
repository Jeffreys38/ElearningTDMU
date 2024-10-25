export default function onscroll_Page() {
    window.onscroll = function () {
        if (document.documentElement.scrollTop > 300) {
            document.getElementById("scroll-up").style.display = "flex";
        } else {
            document.getElementById("scroll-up").style.display = "none";
        }

        document.getElementById('scroll-up').addEventListener("click", function () {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        });
    };
}

