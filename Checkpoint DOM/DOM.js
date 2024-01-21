let qte1 = document.getElementById("qte1")
let prix1 = document.getElementById("prix1")
let qte2 = document.getElementById("qte2")
let prix2 = document.getElementById("prix2")
let qte3 = document.getElementById("qte3")
let prix3 = document.getElementById("prix3")
let total = document.getElementById("total")


function add1() {
    let val = parseInt(qte1.textContent);
    let mytotal = parseInt(total.textContent)+parseInt(prix1.textContent);
    val++
    // console.log(val,qte1.textContent)
    qte1.textContent = val
    total.innerHTML = "<h2>"+mytotal+"</h2>"
}
function add2() {
    let val = parseInt(qte2.textContent);
    val++
    // console.log(val,qte1.textContent)
    qte2.textContent = val
   
}
function add3() {
    let val = parseInt(qte3.textContent);
    val++
    // console.log(val,qte1.textContent)
    qte3.textContent = val
}
function moins1() {
    let val = parseInt(qte1.textContent);
    let mytotal = parseInt(total.textContent)-parseInt(prix1.textContent);
    val--
    // console.log(val,qte1.textContent)
    qte1.textContent = val
    total.innerHTML = "<h2>"+mytotal+"</h2>"
}
function moins2() {
    let val = parseInt(qte2.textContent);
    val--
    // console.log(val,qte1.textContent)
    qte2.textContent = val
}
function moins3() {
    let val = parseInt(qte3.textContent);
    val--
    // console.log(val,qte1.textContent)
    qte3.textContent = val
}
function remove1() {
    let val = parseInt(qte1.textContent);
    
}
    