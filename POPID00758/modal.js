console.log("hi");
const modal = document.getElementById('modal')
const close = document.getElementById('close')
var btn = document.getElementById("bt1");
btn.onclick = function () {
    modal.style.display='block';
   
}
close.onclick = function () {
    modal.style.display='none';
   
}