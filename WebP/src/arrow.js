const arrow = document.createElement("div")
arrow.classList.add("arrow")
document.body.append(arrow)
arrow.addEventListener("click", function() {
    window.scrollTo(pageYOffset, 0);
});
// window.addEventListener('scroll', function() {
//     pageYOffset >
//     arrow.classList.add("hide")
// });