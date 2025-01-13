let homeScore = 0
let guestScore = 0

document.getElementById("homeScore-el").textContent = homeScore
document.getElementById("guestScore-el").textContent = guestScore

                        /* --Home Score-- */
function addOneHome() {
    homeScore += 1
    document.getElementById("homeScore-el").textContent = homeScore
}
function addTwoHome() {
    homeScore += 2
    document.getElementById("homeScore-el").textContent = homeScore
}
function addThreeHome() {
    homeScore += 3
    document.getElementById("homeScore-el").textContent = homeScore
}

                            /* --Guest Score-- */
function addOneGuest() {
    guestScore += 1
    document.getElementById("guestScore-el").textContent = guestScore
}
function addTwoGuest() {
    guestScore += 2
    document.getElementById("guestScore-el").textContent = guestScore
}
function addThreeGuest() {
    guestScore += 3
    document.getElementById("guestScore-el").textContent = guestScore
}