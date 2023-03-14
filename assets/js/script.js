/* jshint esversion: 11 */

const showMoreBtn = document.getElementById("show-more");
const showLessBtn = document.getElementById("show-less");
const secondRowProjects = document.getElementsByClassName("second-row-projects");


showMoreBtn.addEventListener("click", function (event) {
    event.preventDefault();
    showMoreBtn.style.display = "none";
    for (let i = 0; i < secondRowProjects.length; i++) {
        secondRowProjects[i].style.display = "unset";
    }
showLessBtn.style.display = "unset";
});

showLessBtn.addEventListener("click", function (event) {
    event.preventDefault();
    showLessBtn.style.display = "none";
    for (let i = 0; i < secondRowProjects.length; i++) {
        secondRowProjects[i].style.display = "none";
    }
    showMoreBtn.style.display = "unset";

});

// scroll to top btn
// Get the button:
let goToTopBTN = document.getElementById("top-btn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    goToTopBTN.style.display = "unset";
  } else {
    goToTopBTN.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}