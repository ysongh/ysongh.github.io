const content = document.querySelector('.main-content');
const loading = document.querySelector('.loading');

function init(){
    setTimeout(() => {
        loading.style.opacity = 0;
        loading.style.display = "none";

        content.style.opacity = 1;
        content.style.display = "block";
    }, 1000);
}

init();