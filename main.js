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