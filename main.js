  const menuBtn = document.getElementById("menuBtn");
        const navLinks = document.getElementById("navLinks");

        menuBtn.addEventListener("click",function(){

         navLinks.classList.toggle("active");

         if(navLinks.classList.contains("active")){
          menuBtn.innerHTML="✕";
          }

         else{
         menuBtn.innerHTML="☰";
         }

        });


//-----------wellness form

 function showTextbox(){
    const injury = document.getElementById("injury");
    const injuryBox = document.getElementById("injuryBox");
    if(injury.value === "None"){
        injuryBox.style.display = "none";
    }
    else{
        injuryBox.style.display = "block";
    }

}


// -----------BMI

function openBMI(){

    document.getElementById("bmiModal").style.display = "flex";

}

function closeBMI(){

    document.getElementById("bmiModal").style.display = "none";

}

function calculateBMI(){

    const height =
        Number(document.getElementById("height").value);

    const weight =
        Number(document.getElementById("weight").value);

    if(height <= 0 || weight <= 0){

        alert("Please enter valid values.");

        return;

    }

    const bmi =
        weight / ((height/100) * (height/100));

    let category = "";

    if(bmi < 18.5){

        category = "Underweight";

    }

    else if(bmi < 25){

        category = "Normal";

    }

    else if(bmi < 30){

        category = "Overweight";

    }

    else{

        category = "Obese";

    }

    document.getElementById("result").innerHTML =

        "BMI : " + bmi.toFixed(1) +

        "<br>" +

        category;

}



