const arrow = document.createElement("div")
arrow.classList.add("arrow")
document.body.append(arrow)
arrow.addEventListener("click", function() {
    if (pageYOffset < 300 + 'px') {
        window.scrollTo(pageYOffset, 0);
    } else {
        arrow.classList.add("hide")
    }
});