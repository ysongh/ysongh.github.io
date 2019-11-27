const nextImage = document.getElementById("nextProject");
const prevImage = document.getElementById("prevProject");
const modal = document.querySelector('.modal');
const showModalP1Btn = document.getElementById('showModalP1Btn');
const showModalP2Btn = document.getElementById('showModalP2Btn');
const closeModalBtn = document.getElementById('closeModalBtn');

const image1List = [
    "./img/project-B1.png",
    "./img/project-B2.png",
    "./img/project-B3.png",
    "./img/project-B4.png"
];

const image2List = [
    "./img/project-A1.png",
    "./img/project-A2.png",
    "./img/project-A3.png",
    "./img/project-A4.png",
    "./img/project-A5.png"
];

const image1ListLen = image1List.length - 1;
const image2ListLen = image2List.length - 1;

let currentImage1 = 0;
let currentImage2 = 0;

let projectNumber = 1;

if(nextImage){
    nextImage.addEventListener('click', changeNextImage);
    prevImage.addEventListener('click', changePrevImage);
    
    closeModalBtn.addEventListener('click', closeModal);
}

showModalP1Btn.addEventListener('click', showModal);
showModalP1Btn.myParam = "p1";
showModalP2Btn.addEventListener('click', showModal);

function changeNextImage(){
    if(projectNumber === 1){
        if(currentImage1 === image1ListLen){
            currentImage1 = 0;
        }
        else{
            currentImage1++;
        }
        document.getElementById("projects").src = image1List[currentImage1];
    }
    else{
        if(currentImage2 === image2ListLen){
            currentImage2 = 0;
        }
        else{
            currentImage2++;
        }
        document.getElementById("projects").src = image2List[currentImage2];
    }
}

function changePrevImage(){
    if(projectNumber === 1){
        if(currentImage1 === 0){
            currentImage1 = image1ListLen;
        }
        else{
            currentImage1--;
        }
        document.getElementById("projects").src = image1List[currentImage1];
    }
    else{
        if(currentImage2 === 0){
            currentImage2 = image2ListLen;
        }
        else{
            currentImage2--;
        }
        document.getElementById("projects").src = image2List[currentImage2];
    }
}

function showModal(pNumber){
    modal.style.display = 'block';

    if(pNumber.currentTarget.myParam === "p1"){
        projectNumber = 1;
        document.getElementById("projects").src = image1List[currentImage1];
    }
    else{
        projectNumber = 2;
        document.getElementById("projects").src = image2List[currentImage2];
    }
}

function closeModal(){
    modal.style.display = 'none';
}