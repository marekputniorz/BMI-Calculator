let btn = document.getElementById('btn');

btn.addEventListener('click', function(){
    let weight = document.getElementById('wnumber').value;
    let height = document.getElementById('hnumber').value;
    let resultBMI = (weight / (height * height) * 10000);

    if(resultBMI < 18.5){
        alert(`Your BMI is ${Math.round(resultBMI)} (underweight)`);
    }else if(resultBMI >= 18.5 && resultBMI <= 25){
        alert(`Your BMI is ${Math.round(resultBMI)} (normal weight)`);
    }else if(resultBMI > 25){
        alert(`Your BMI is ${Math.round(resultBMI)} (overweight)`);
    }


});
