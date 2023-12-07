var num=0

function presionarBtn(id){
    var temp=getRandomInt(100)
    num+=temp
    document.getElementById("resultado").innerText=num
    document.getElementById(id).innerText=temp
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function focusBtn(id){
    if(document.getElementById(id).innerText===""){
        document.getElementById(id).innerText="x"
    }
    
}

function focusBtnoff(id){
    if(document.getElementById(id).innerText==="x"){
        document.getElementById(id).innerText=""
    }
}