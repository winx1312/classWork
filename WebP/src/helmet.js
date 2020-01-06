const hel = document.querySelector(".const")
window.addEventListener('scroll', function(event) {
        if (pageYOffset > 1000) {
            hel.classList.add("visable")
        }
    })
    // document.querySelectorAll(".style__opt-wrapper").forEach(i => {
    // i.classList.add("hide")
    // i.addEventListener("click", function()){

// }
// })