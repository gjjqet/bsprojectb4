//Get UI

const sitesettings = document.getElementById("sitesettings");

sitesettings.addEventListener("click",function(){
   document.body.classList.toggle("show-nav");
})

$(document).ready(function(){
   $(".sidebarlinks").click(function(){
      $(".sidebarlinks").removeClass("active");
      $(this).addClass("active");
   })
})

function dropbtn(e){
   e.target.parentElement.nextElementSibling.classList.toggle("show")
}