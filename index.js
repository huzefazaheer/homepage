const TECHCARDS = document.querySelectorAll(".techcard");
const c = document.querySelector(".cardholder")

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
        const IMG = document.querySelector("#" + CARDID + " img");
        IMG.classList.toggle("aaa")
        CARDHEADING.classList.toggle("hide")
        CARDP.classList.toggle("hide")
        CARD.classList.toggle("small")
        CARD.classList.toggle("large")
    }
}


const shape1 = document.querySelector(".c1")
const shape2 = document.querySelector(".c2")

let c1posX = 102
let c1posY = 0
let c2posX = 402
let c2posY = 80
let c1reset = false
let c2reset = false
let i = 0
function animate(){
    
    if(i > 100) {
        c1posX -= 4
        c1posY -= 4
        c2posX += 4
        c2posY += 4
    }else{
        c1posX += 4
        c1posY += 4
        c2posX -= 4
        c2posY -= 4
    }
    if(i==200) i=0
    i++

    shape1.style.left = c1posX +"px"
    shape1.style.top = c1posY +"px"
    shape2.style.left = c2posX +"px"
    shape2.style.top = c2posY +"px"
    i++
}

// if(i!=20){
    setInterval(animate, 100)
// }
