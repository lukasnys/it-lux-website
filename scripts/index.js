$(() => {
    $(".burger").click((e) => {
        $(".nav-links").toggleClass("nav-active");

        $(".nav-links li").each((index, link) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.4s ease forwards ${index / 7 + 0.35}s`;
            }
        })

        $(".burger").toggleClass("toggle");
    })
})