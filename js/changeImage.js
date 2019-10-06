const image1 = document.getElementById("project1");

const image1List = [
    "./img/project-B1.png",
    "./img/project-B2.png",
    "./img/project-B3.png",
    "./img/project-B4.png"
];

let currentImage1 = 0;

image1.addEventListener('click', changeImage1);

function changeImage1() {
    if(currentImage1 === image1List.length - 1){
        currentImage1 = 0;
    }
    else{
        currentImage1++;
    }
    
    document.getElementById("project1").src = image1List[currentImage1];
}