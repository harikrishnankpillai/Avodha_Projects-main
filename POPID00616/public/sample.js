const inputs = document.getElementsByTagName('input');
const pTagForerror = document.getElementsByClassName('errorclass');
const formdata = document.getElementById('loginForm')

function isContainNumeric(data) {
    console.log(data);
    var matches = data.match(/\d+/g);
    if (matches != null) {
        createError("", 2);
        return true;
    }
    return false;
}


function createError(message, possition) {
    pTagForerror[possition].innerHTML = message;
}
// function islength(data){
//     return data.length < 8
// }



const getFormData = async (username) => {


    try {
        const response = await fetch('/', {
            method: "POST",
            body: JSON.stringify({
                userId: 1,
                title: "Fix my bugs",

                username: username
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const responseData = await response.json();
        console.log(responseData);
        // Handle the response data here
        return responseData;

    } catch (error) {
        console.error('Form submission error:', error);
        // Handle errors
    }

}




formdata.addEventListener('submit', async (e) => {
    e.preventDefault();
    console.log(inputs[0].value);
    // const dat = islength(inputs[2].value);
    const check = isContainNumeric(inputs[2].value) //chaecking password contain number

    if (!check) {

        createError("must include numeric", 2);  //error messoge  and which possition

    } else {

     //   const data = await getFormData(inputs[0].value) //make api call
       
    //     if (data.error) {
    //         createError(data.error, data.possition);
    //     } else {
    //         createError("",0);
    //     }

    formdata.submit();
    }
    console.log(check);


})







// function formValidation(event){
//  event.preventDefault();
//    console.log('working...');
// }