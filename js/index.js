document.getElementById("currentYear").textContent = new Date().getFullYear();

document.addEventListener("DOMContentLoaded", function() {
  var faqTitles = document.querySelectorAll(".faq-title");

  faqTitles.forEach(function(title) {
    title.addEventListener("click", function() {
      var content = this.nextElementSibling;
      content.classList.toggle("active");
    });
  });
});

document.addEventListener("DOMContentLoaded", function() {
  var faqQuestions = document.querySelectorAll(".faq-ask");

  faqQuestions.forEach(function(question) {
    question.addEventListener("click", function() {
      var answer = this.nextElementSibling;
      var icon = this.querySelector("i");
      icon.classList.toggle("fa-plus");
      icon.classList.toggle("fa-minus");
      answer.style.display = (answer.style.display === "block") ? "none" : "block";
    });
  });
});
