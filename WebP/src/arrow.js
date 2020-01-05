const arrow = document.createElement("div")
arrow.classList.add("arrow")
arrow.addEventListener("click", function() {
    window.scrollTo(pageYOffset, 0);
});
// window.addEventListener('scroll', function(event) {

//     if (pageYOffset > 300) {
//         console.log(pageYOffset)
//         arrow.style.display = "none"
//     }
// });
document.body.append(arrow)