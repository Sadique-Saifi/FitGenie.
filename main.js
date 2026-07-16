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