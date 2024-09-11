function dis(val) {
    document.getElementById("result").value += val
}
function clr() {
    document.getElementById("result").value = '';
}
function solve() {
    const data = document.getElementById("result").value;
    document.getElementById("result").value = eval(data);
    console.log(eval(data));
}
