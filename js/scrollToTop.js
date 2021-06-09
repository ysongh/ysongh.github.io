const scrollBtn = document.getElementById("scrollToTopBtn");

window.onscroll = function(){scrollFunction()};

function scrollFunction() {
  if(document.body.scrollTop > 500 || document.documentElement.scrollTop > 500){
    scrollBtn.style.display = "block";
  }
  else{
    scrollBtn.style.display = "none";
  }
}

function scrollToTopOnClick() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}