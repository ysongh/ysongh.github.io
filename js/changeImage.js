const image1 = document.getElementById("project1");

image1.addEventListener('click', changeImage1);

function changeImage1() {
    document.getElementById("project1").src = "./img/project-B2.png";
}