// get all values here
const button = document.querySelector(".eleetcontroller-nav-toggle");
const headerNav = document.querySelector(".eleetcontroller-header-nav");
const disclosureBtn = document.querySelector(".sel-disclosure");
const itemsContainer = document.querySelector(".sel-itemsContainer");
const searchBtn = document.getElementById("searchbtn");
const search = document.getElementById("search");
const classSearch = document.querySelector(".eleetcontroller-search");
const searchClose = document.querySelector("button.eleetcontroller-search-close");

// const showNav = document.getElementById("eleetcontroller-nav-show");
const hideNav = document.getElementById("eleetcontroller-nav-hide");
const headerNavSupport = document.getElementById("eleetcontroller-header-nav-support");


// navbar toggle
button.addEventListener("click", () => {

    if(headerNav.classList.contains("eleetcontroller-show-nav")){
        headerNav.classList.remove("eleetcontroller-show-nav");
    }else{
        headerNav.classList.add("eleetcontroller-show-nav");
        headerNavSupport.classList.add("eleetcontroller-header-nav-support-show");
    }

    // headerNav.classList.toggle("eleetcontroller-show-nav");
});

hideNav.addEventListener( "click" , () =>{
    // alert("Hello");
    headerNav.classList.remove("eleetcontroller-show-nav");
    headerNavSupport.classList.remove("eleetcontroller-header-nav-support-show");
});
headerNavSupport.addEventListener(  "click" , () => {
    headerNav.classList.remove("eleetcontroller-show-nav");
    headerNavSupport.classList.remove("eleetcontroller-header-nav-support-show");
});

// // selbtn button toggle 
// disclosureBtn.addEventListener("click", function(){

//     itemsContainer.classList.toggle("showSet");
// });


// search toggle here now

searchBtn.addEventListener("click", () => {
    search.classList.toggle("eleetcontroller-showSearch");
});


// search bar close here 
searchClose.addEventListener("click", () => {
   if(classSearch.classList.contains("eleetcontroller-showSearch")){
        classSearch.classList.remove("eleetcontroller-showSearch");
   }
});


$(document).ready(function() {
    $(window).scroll(function() {
        var scrollPos = $(window).scrollTop();
        var targetElement = $('.eleetcontroller-main-header');

        // Adjust the value (300 in this case) based on when you want the class to be added
        if (scrollPos > 40 ) {
        targetElement.addClass('eleetcontroller-scrolled');
        } else {
        targetElement.removeClass('eleetcontroller-scrolled');
        }
    });
});

// eleetcontroller-main-header