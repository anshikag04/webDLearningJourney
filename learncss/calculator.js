function add() {  
    let input1 = Number(document.getElementById("input1").value)
    let input2 = Number(document.getElementById("input2").value)
    if(input1!=NaN && input2!=NaN) {
        document.getElementById("answer").innerHTML = (input1+input2)
    }
    else {
        document.getElementById("answer").innerHTML = ("Invalid Input")
    }
}

function sub() {
    let input1 = Number(document.getElementById("input1").value)
    let input2 = Number(document.getElementById("input2").value)
    document.getElementById("answer").innerHTML = (input1-input2)
}

function mul() {
    let input1 = Number(document.getElementById("input1").value)
    let input2 = Number(document.getElementById("input2").value)
    document.getElementById("answer").innerHTML = (input1*input2)
}

document.getElementById('/').addEventListener('click',()=>{
    let input1 = Number(document.getElementById("input1").value)
    let input2 = Number(document.getElementById("input2").value)
    document.getElementById("answer").innerHTML = (input1/input2)
})