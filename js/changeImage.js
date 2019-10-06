const nextImage1 = document.getElementById("nextProject1");
const prevImage1 = document.getElementById("prevProject1");

const image1List = [
    "./img/project-B1.png",
    "./img/project-B2.png",
    "./img/project-B3.png",
    "./img/project-B4.png"
];

const image1ListLen = image1List.length - 1;

let currentImage1 = 0;

nextImage1.addEventListener('click', changeNextImage1);
prevImage1.addEventListener('click', changePrevImage1);

function changeNextImage1() {
    if(currentImage1 === image1ListLen){
        currentImage1 = 0;
    }
    else{
        currentImage1++;
    }
    
    document.getElementById("project1").src = image1List[currentImage1];
}

function changePrevImage1() {
    if(currentImage1 === 0){
        currentImage1 = image1ListLen;
    }
    else{
        currentImage1--;
    }
    
    document.getElementById("project1").src = image1List[currentImage1];
}