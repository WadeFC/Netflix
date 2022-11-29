// const faqs = document.querySelectorAll(".faq");

//  faqs.forEach((faq) => {
//     faq.addEventListenter("click", () => {
//         faq.classList.toggle("active");
//     });
//  });

// const Accrd = document.querySelectorAll(".bar");
// Accrd.addEventListener("click" function(){
//     if ()
// }

// )

// const rip = doocument.querySector("answer").innerHTML = "FUCK UP";


var acc = document.getElementsByClassName("bar");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}