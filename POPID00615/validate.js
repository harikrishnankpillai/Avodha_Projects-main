
function isContainNumeric(data) {
    console.log(data);
    var matches = data.match(/\d+/g);
    if (matches != null) {
        return true;
    }
    return false;
}


function createspan(datastring) {
    var dateSpan = document.createElement('p')
    dateSpan.innerHTML = datastring;
    dateSpan.className='text-danger fs-6'
    return dateSpan
}

const inputs = document.getElementsByTagName('input');
const formerror = document.getElementsByClassName('forminput');



const formdata = document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(inputs[0].value);
    const check = isContainNumeric(inputs[2].value)
    if (!check) {
       const spanelement = createspan("must include numeric") ; 
       formerror[2].appendChild(spanelement) 
    }
    console.log(check);


})






// function formValidation(event){
//  event.preventDefault();
//    console.log('working...');
// }