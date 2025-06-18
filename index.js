const TECHCARDS = document.querySelectorAll(".cardholder");

TECHCARDS.forEach((element) => {
    element.addEventListener("mouseover", (e) => toggleCard(e))
    element.addEventListener("mouseout", (e) => toggleCard(e))
})

function toggleCard(e){
    const CARDID = e.target.id
   
    if(CARDID!=""){
        const CARD = document.getElementById(CARDID)
        const CARDHEADING = document.querySelector("#" + CARDID + " h4");
        const CARDP = document.querySelector("#" + CARDID + " p");
        CARDHEADING.classList.toggle("hide")
        CARDP.classList.toggle("hide")
        CARD.classList.toggle("small")
    }
}