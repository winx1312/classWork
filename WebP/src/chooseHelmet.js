const textHelmet = document.getElementById("color-1")
const textVisor = document.getElementById("color-2")
const textHolder = document.getElementById("color-3")
const texthel1 = document.getElementById("hel-text-1")
const texthel2 = document.getElementById("hel-text-2")
const texthel3 = document.getElementById("hel-text-3")
const textv1 = document.getElementById("v-text-1")
const textv2 = document.getElementById("v-text-2")
const textv3 = document.getElementById("v-text-3")
const textv4 = document.getElementById("v-text-4")
const textv5 = document.getElementById("v-text-5")
const textv6 = document.getElementById("v-text-6")
const texth1 = document.getElementById("h-text-1")
const texth2 = document.getElementById("h-text-2")
const texth3 = document.getElementById("h-text-3")
const texth4 = document.getElementById("h-text-4")
const texth5 = document.getElementById("h-text-5")
const texth6 = document.getElementById("h-text-6")
const texth7 = document.getElementById("h-text-7")
const hel1 = document.getElementById("hel-g")
const hel2 = document.getElementById("hel-m")
const hel3 = document.getElementById("hel-w")
const visors = Array.from(document.querySelectorAll(".const__visors"));
const targetVis = Array.from(document.querySelectorAll(".style__opt-img-v"));
const targetHol = Array.from(document.querySelectorAll(".style__opt-img-h"));
const holders = Array.from(document.querySelectorAll(".const__holder"));
const tarHel1 = document.getElementById("t-hel-g")
tarHel1.addEventListener('click', chooseHelmet(hel1, texthel1))
const tarHel2 = document.getElementById("t-hel-m")
tarHel2.addEventListener('click', chooseHelmet(hel2, texthel2))
const tarHel3 = document.getElementById("t-hel-w")
tarHel3.addEventListener('click', chooseHelmet(hel3, texthel3))
const helmets = Array.from(document.querySelectorAll(".const__helmet"));
targetVis[0].addEventListener('click', chooseVisor(visors[0], textv1));
targetVis[1].addEventListener('click', chooseVisor(visors[1], textv2));
targetVis[2].addEventListener('click', chooseVisor(visors[2], textv3));
targetVis[3].addEventListener('click', chooseVisor(visors[3], textv4));
targetVis[4].addEventListener('click', chooseVisor(visors[4], textv5));
targetVis[5].addEventListener('click', chooseVisor(visors[5], textv6));
targetHol[0].addEventListener('click', chooseHolders(holders[0], texth1));
targetHol[1].addEventListener('click', chooseHolders(holders[1], texth2));
targetHol[2].addEventListener('click', chooseHolders(holders[2], texth3));
targetHol[3].addEventListener('click', chooseHolders(holders[3], texth4));
targetHol[4].addEventListener('click', chooseHolders(holders[4], texth5));
targetHol[5].addEventListener('click', chooseHolders(holders[5], texth6));
targetHol[6].addEventListener('click', chooseHolders(holders[6], texth7));

function chooseHelmet(helmet, text) {
    hideall()
    showHelmet(helmet)
    showVisor(visor)
    chooseTextHelmet(text)
}

function hideall() {
    helmets.forEach(i => i.classList.add("hide"));
    hideHolders()
    hideVisors()
}

function showHelmet(helmet = hel1) {
    helmet.classList.add('helmet-chosen')
}

function showVisor(visor = visors[0]) {
    visor.classList.add("visor-chosen")
}

function showholder(holder = holders[0]) {
    holder.classList.add("holder-chosen")
}

function chooseTextHelmet(text) {
    textHelmet.textContent = text.textContent;
}

function chooseTextVisor(text) {
    textVisor.textContent = text.textContent;
}

function chooseTextHolders(text) {
    textHolder.textContent = text.textContent;
}

function chooseVisor(visor, text) {
    hideVisors()
    showVisor(visor)
    showHelmet(helmet)
    chooseTextVisor(text)
}

function hideVisors() {
    visors.forEach(i => i.classList.add("hide"))
}

function chooseHolders(visor, text) {
    hideHolders()
    showVisor(visor)
    showHelmet(helmet)
    showholder(holder)
    chooseTextHolders(text)
}

function hideHolders() {
    holders.forEach(i => i.classList.add("hide"))
}