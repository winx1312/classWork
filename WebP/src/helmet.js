const hel = document.querySelector(".const")
window.addEventListener('scroll', function(event) {
    if (pageYOffset > 1200) {
        hel.classList.add("visable")
    }
})
document.querySelectorAll(".style__opt-wrapper").forEach(i => {
    i.addEventListener("click", function(event) {
        hel.classList.add("opac")
        document.querySelector(" .hel-1").classList.add("helmetA");
        document.getElementById("v-1").style.opacity = 1;
    })
})

document.querySelectorAll("")