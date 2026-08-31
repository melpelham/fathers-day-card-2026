const envelope = document.getElementById("envelope");
const card = document.getElementById("card");
const cardWrapper = document.getElementById("cardWrapper");
const instructions = document.getElementById("instructions");

let envelopeOpened = false;


/* =========================
    OPEN ENVELOPE
========================= */

envelope.addEventListener("click", function () {

    if (envelopeOpened) {
        return;
    }
    envelopeOpened = true;
    envelope.classList.add("open");
    instructions.textContent =
        "Watch the card come out 💌";
    /*
        The card starts BEHIND
        the front of the envelope.
        After it has travelled upward,
        bring it to the front before
        it comes back down.
    */
    setTimeout(function () {
        cardWrapper.style.zIndex = "6";
        instructions.textContent =
            "Tap the card to open 💌";
    }, 1750);
});


/* =========================
    OPEN CARD
========================= */

card.addEventListener("click", function (event) {
    event.stopPropagation();
    if (!envelopeOpened) {
        return;
    }
    card.classList.toggle("open");
    if (card.classList.contains("open")) {
        instructions.textContent =
            "Tap the card to close 💙";
    } else {
        instructions.textContent =
            "Tap the card to open 💌";
    }
});