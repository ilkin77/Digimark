
$('.carousel').carousel({
    interval: 2000
})

$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();   
});



// chart
$(function() {
    $('.chart').easyPieChart({
        size: 180,
        barColor: '#e80566',
        scaleLength: 0,
        lineWidth: 15,
        trackColor: '#ffffff',
        lineCap: 'round',
        animate: 2000,
    });
});


let href_url = window.location.href.toString().split(window.location.host)[1]

window.onscroll = () => myFunction()

function myFunction(){
    if ( document.body.scrollTop > 40 || document.documentElement.scrollTop > 40 ) {
        if(href_url === '/index.html'){
            myFunction_index();
        }else{
            myFunction_nav();
        }
      } else {
        if(href_url === '/index.html'){
            myFunction_index();
        }else{
            myFunction_nav();
        }

      }
}


function myFunction_index(){
    let el_index = document.getElementById("nav_index");
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 2) {
        
        el_index.classList.remove("bg-transparent","menu-top");
        el_index.classList.add("navbar", "navbar-expand-lg", "navbar-light","fixed-top","bg-white");
      } else {
        el_index.classList.remove("bg-white");
        el_index.classList.add("navbar", "navbar-expand-lg", "navbar-light","fixed-top","bg-white","menu-top");
      }
}

function myFunction_nav(){
    let el = document.getElementById("nav");
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
        
        el.classList.remove("bg-transparent");
        el.classList.add("navbar", "navbar-expand-lg", "navbar-light","fixed-top","affix","bg-transparent");
      } else {
        el.classList.remove("affix");
        el.classList.add("navbar", "navbar-expand-lg", "navbar-light","fixed-top","bg-transparent");
      }
}
