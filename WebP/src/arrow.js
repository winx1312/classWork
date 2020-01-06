const arrow = document.createElement("div")
arrow.classList.add("arrow")
arrow.addEventListener("click", function() {
    window.scrollTo(pageYOffset, 0);
});
window.addEventListener('scroll', function(event) {
    if (pageYOffset > document.documentElement.clientHeight) {
        arrow.classList.add('arrow-r')
    }
});
document.body.append(arrow)