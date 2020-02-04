const content = document.querySelector('.main-content');

function init(){
    setTimeout(() => {
        content.style.opacity = 1;
        content.style.display = "block";
    }, 1000);
}

init();