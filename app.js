function myFunction() {
   var x = document.getElementById("Antwotrt");
   if (x.style.display === "none") {
     x.style.display = "block";
     document.getElementsByTagName("button")[0].innerHTML = "Скрыть ответ";
   } else {
     x.style.display = "none";
     document.getElementsByTagName("button")[0].innerHTML = "Показать ответ";
   }
 }