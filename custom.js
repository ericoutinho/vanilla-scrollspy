var sections = document.querySelectorAll('section');
window.addEventListener("scroll", function (event) {
    sections.forEach(function (element, index) {
        if (element.getBoundingClientRect().top < (window.innerHeight - (window.innerHeight * .9))) {
            var active = document.querySelector(".active");
            if (active) {
                active.classList.remove('active');
            }
            document.querySelector("a[href='#" + element.id + "']").classList.add("active");
        }
    })
})