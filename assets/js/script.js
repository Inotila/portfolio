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