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
const isSmallScreen = window.matchMedia("(max-width: 1200px)").matches;
let c1posX
let c1posY
let c2posX
let c2posY
if(!isSmallScreen){
c1posX = 6.375
c1posY = 0
c2posX = 25.125
c2posY = 5
}else{
c1posX = 0.625
c1posY = 6.25
c2posX = 2.5
c2posY = 37.5
}
let i = 0
function animate(){
    
    if(!isSmallScreen){
        if(i > 50) {
        c1posX -= 0.2
        c1posY -= 0.3
        c2posX += 0.2
        c2posY += 0.3
    }else{
        c1posX += 0.2
        c1posY += 0.3
        c2posX -= 0.2
        c2posY -= 0.3
    }
    if(i==100) i=0
    }else{
        if(i > 50) {
        c1posX -= 0.063
        c1posY -= 0.5
        c2posX += 0.063
        c2posY += 0.5
    }else{
        c1posX += 0.063
        c1posY += 0.5
        c2posX -= 0.063
        c2posY -= 0.5
    }
    if(i==100) i=0
    }
    
    i++
    

    shape1.style.left = c1posX +"rem"
    shape1.style.top = c1posY +"rem"
    shape2.style.left = c2posX +"rem"
    shape2.style.top = c2posY +"rem"
}

setInterval(animate, 100)
