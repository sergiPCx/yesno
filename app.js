const b = document.querySelector('button.button--yes')
const c = document.querySelector('button.button--no')
const t = document.querySelector('h1.text-1')
b.addEventListener("mouseover", moveHover)
c.addEventListener("mouseover", moveHoverYes)

function moveHover(){
    const i= Math.floor(Math.random()*300)+1;
    const j= Math.floor(Math.random()*500)+1;

    b.style.left= i+"px"
    b.style.top= j+"px"

}

function moveHoverYes(){
    t.innerHTML = "Lastima :'( yo queria regalarte"
}