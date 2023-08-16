let inputlEl = document.getElementById("inputl-el")
let inputrEl = document.getElementById("inputr-el")
let outputlEL = document.getElementById("outputl-el")
let outputrEl = document.getElementById("outputr-el")
let lArray = []
let rArray = [] 
let linArray = []
let rinArray = []
outputlEL.value = 0
outputrEl.value = 0
let listr = document.getElementById("UnListr")
let listl = document.getElementById("UnListl")
let modalEl = document.getElementById("modal")
let yesEl = document.getElementById("yes-btn")
let noEl = document.getElementById("no-btn")
let wldModalEl = document.getElementById("wld-modal")
let wldArray = []
let wldInputEl = document.getElementById("wld-input")
let wldList = document.getElementById("wld-ul")
let wdlActionModal = document.getElementById("wld-action")
let t1El = document.getElementById("t1")
let r1El = document.getElementById("r1")
let l1El = document.getElementById("l1")
let b1El = document.getElementById("b1")
let t2El = document.getElementById("t2")
let r2El = document.getElementById("r2")
let l2El = document.getElementById("l2")
let b2El = document.getElementById("b2")
let wldDisArray = [t1El , b1El , r1El , l1El , t2El , b2El ,r2El , l2El]
let wldNgEl = document.getElementById("wld-ng")


function a(){

    lArray.push(Number(outputlEL.value))
    rArray.push(Number(outputrEl.value))

    linArray.push(Number(inputlEl.value))
    rinArray.push(Number(inputrEl.value))

    outputlEL.value = Number(inputlEl.value) + Number(outputlEL.value)
    outputrEl.value = Number(inputrEl.value) + Number(outputrEl.value)

    inputlEl.value = ""
    inputrEl.value = ""
    
    renderl()
    renderr()

    if(Number(outputlEL.value) >= 152 && Number(outputlEL.value) != Number(outputrEl.value)){
        openModal()
    }
    if(Number(outputrEl.value) >= 152 && Number(outputlEL.value) != Number(outputrEl.value)){
        openModal()
    }
}

function reset(){
    
    outputlEL.value = 0
    outputrEl.value = 0

    linArray = []
    rinArray = []
    renderl()
    renderr()
}

function undo(){
    let undol = lArray.pop()
    let undor = rArray.pop()
    
    outputlEL.value = undol
    outputrEl.value = undor

    linArray.pop()
    rinArray.pop()
    renderl()
    renderr()
 
}

function renderl(){

    listl.innerHTML = ""

    for (i = 0; i < linArray.length; i++) {
        listl.innerHTML += "<li>" + linArray[i] + "</li>"  
    }
}

function renderr(){

    listr.innerHTML = ""

    for (i = 0; i < rinArray.length; i++) {
        listr.innerHTML += "<li>" + rinArray[i] + "</li>"  
    }

}
function openModal(){
    modalEl.showModal()

}
function closeModal(){
    modalEl.close()
}
function resetModal(){
    modalEl.close()
    reset()
}
function wld(){
    wldModalEl.showModal()

}
function wldInputBtn(){
    wldArray.push(wldInputEl.value)

    wldInputEl.value = ""

    wldRender()


}
function wldRender(){
    wldList.innerHTML = ""

    for(i = 0; i < wldArray.length; i++){
        wldList.innerHTML += "<li>" + wldArray[i] + "<li>"
    }
}
function closeWld(){
    wldModalEl.close()
    wldList.innerHTML = ""
    wldArray = []
}
function openWldAction(){
    wdlActionModal.showModal()

    let jArray = []

    for(let i = 0; i < wldArray.length; i++){   
        jArray.push(i);
    }

    function shuffle(array) {
        let currentIndex = array.length,  randomIndex;
      
        while (currentIndex != 0) {
      
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
      
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
      
        return array;
      }

    shuffle(jArray)

    for(let i = 0; i < wldArray.length; i++){
        wldDisArray[i].value = wldArray[jArray[i]]
    }
}
function closeWldAction(){
    wdlActionModal.close()
    t1El.value = ""
    r1El.value = ""
    l1El.value = ""
    b1El.value = ""
    t2El.value = ""
    r2El.value = ""
    l2El.value = ""
    b2El.value = ""
}
function wldNg(){
    closeWldAction()
    closeWld()
    reset()
}