const nextImage = document.getElementById("nextProject");
const prevImage = document.getElementById("prevProject");
const numProject = document.getElementById("numProject");
const modal = document.querySelector('.modal');
const showModalP1Btn = document.getElementById('showModalP1Btn');
const showModalP2Btn = document.getElementById('showModalP2Btn');
const showModalP3Btn = document.getElementById('showModalP3Btn');
const closeModalBtn = document.getElementById('closeModalBtn');

const image1List = [
    "./img/project-A1.png",
    "./img/project-A2.png",
    "./img/project-A3.png",
    "./img/project-A4.png"
];

const image2List = [
    "./img/project-B1.png",
    "./img/project-B2.png",
    "./img/project-B3.png"
];

const image3List = [
    "./img/project-C1.png",
    "./img/project-C2.png",
    "./img/project-C3.png"
];

const image1ListLen = image1List.length - 1;
const image2ListLen = image2List.length - 1;
const image3ListLen = image3List.length - 1;

let currentImage1 = 0;
let currentImage2 = 0;
let currentImage3 = 0;

let projectNumber = 1;

if(nextImage){
    nextImage.addEventListener('click', changeNextImage);
    prevImage.addEventListener('click', changePrevImage);
    
    closeModalBtn.addEventListener('click', closeModalByButton);
}

showModalP1Btn.addEventListener('click', showModal);
showModalP1Btn.myParam = "p1";
showModalP2Btn.addEventListener('click', showModal);
showModalP2Btn.myParam = "p2";
showModalP3Btn.addEventListener('click', showModal);
window.addEventListener('click', closeModal);

function changeNextImage(){
    if(projectNumber === 1){
        if(currentImage1 === image1ListLen){
            currentImage1 = 0;
        }
        else{
            currentImage1++;
        }
        document.getElementById("projects").src = image1List[currentImage1];
        numProject.innerHTML = `${currentImage1 + 1}/${image1ListLen + 1} `;
    }
    else if(projectNumber === 2){
        if(currentImage2 === image2ListLen){
            currentImage2 = 0;
        }
        else{
            currentImage2++;
        }
        document.getElementById("projects").src = image2List[currentImage2];
        numProject.innerHTML = `${currentImage2 + 1}/${image2ListLen + 1} `;
    }
    else{
        if(currentImage3 === image3ListLen){
            currentImage3 = 0;
        }
        else{
            currentImage3++;
        }
        document.getElementById("projects").src = image3List[currentImage3];
        numProject.innerHTML = `${currentImage3 + 1}/${image3ListLen + 1} `;
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
        numProject.innerHTML = `${currentImage1 + 1}/${image1ListLen + 1} `;
    }
    else if(projectNumber === 2){
        if(currentImage2 === 0){
            currentImage2 = image2ListLen;
        }
        else{
            currentImage2--;
        }
        document.getElementById("projects").src = image2List[currentImage2];
        numProject.innerHTML = `${currentImage2 + 1}/${image2ListLen + 1} `;
    }
    else{
        if(currentImage3 === 0){
            currentImage3 = image3ListLen;
        }
        else{
            currentImage3--;
        }
        document.getElementById("projects").src = image3List[currentImage3];
        numProject.innerHTML = `${currentImage3 + 1}/${image3ListLen + 1} `;
    }
}

function showModal(pNumber){
    modal.style.display = 'block';

    if(pNumber.currentTarget.myParam === "p1"){
        projectNumber = 1;
        document.getElementById("projects").src = image1List[currentImage1];
        numProject.innerHTML = `${currentImage1 + 1}/${image1ListLen + 1} `;
    }
    else if(pNumber.currentTarget.myParam === "p2"){
        projectNumber = 2;
        document.getElementById("projects").src = image2List[currentImage1];
        numProject.innerHTML = `${currentImage2 + 1}/${image2ListLen + 1} `;
    }
    else{
        projectNumber = 3;
        document.getElementById("projects").src = image3List[currentImage3];
        numProject.innerHTML = `${currentImage3 + 1}/${image3ListLen + 1} `;
    }
}

function closeModalByButton(){
    modal.style.display = 'none';
}

function closeModal(e){
    if(e.target === modal){
        modal.style.display = 'none';
    }
}