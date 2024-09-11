const heightin = document.getElementById('Height');
const weightin = document.getElementById('weight');
const heightip = document.getElementById('Heightip');
const weightip = document.getElementById('weightip');
const result = document.getElementById('result');
const statuschange = document.getElementById('status');

let height = null;
let weight;
let heightunit;
let weightunit;

document.getElementById('bmiform').addEventListener('submit', (e) => {
    e.preventDefault();
    height = heightip.value;
    weight = weightip.value;
    weightunit = weightin.value;
    heightunit = heightin.value;
    console.log(height, weight, weightunit, heightunit);
    if (heightunit === 'cm') {
        height = height / 100;

    }
    const bmi = (weight / Math.pow(height, 2)).toFixed(2);
    console.log(
        bmi
    );
    result.innerHTML = bmi + 'kg/m&#178;';
    if (bmi <= 18.4) {
        document.getElementById('innercontainer').style.borderColor = '#80830f';
        statuschange.innerHTML='Under weight';
        statuschange.style.color = '#80830f';
    }
     if(bmi > 39.9)
    {
        document.getElementById('innercontainer').style.borderColor = "red";
        statuschange.innerHTML='Obese weight';
        statuschange.style.color = 'red';
    }
     if( bmi >= 24.9 && bmi <= 39.9)
    {
        document.getElementById('innercontainer').style.borderColor = "yellow";
         statuschange.innerHTML='Over weight';
         statuschange.style.color = 'yellow';
    }
     if( bmi>=18.5 && bmi <= 24.9)
    {
        document.getElementById('innercontainer').style.borderColor = "green";
        statuschange.innerHTML='Normal weight';
        statuschange.style.color = 'green';
    }




});



