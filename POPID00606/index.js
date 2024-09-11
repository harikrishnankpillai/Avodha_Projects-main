const box =document.getElementById("changebgcolor")
box.addEventListener("click",(event)=>{
  let  color = event.target.value;
  if(color === 'red'){
    box.style.backgroundColor = 'red';
  }
  else{
    box.style.backgroundColor='green';
  }

})