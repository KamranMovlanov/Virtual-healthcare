(function burgerMenuAll(){
    const burger = document.querySelector(".burger");
    const headerClose = document.querySelector(".header__nav-close");
    const headerNav = document.querySelector(".header__nav");

    
    burger.addEventListener('click', () => { //Add    
        headerNav.classList.add("header__nav-active");
    });

    headerClose.addEventListener('click', () => {  //Remove
        headerNav.classList.remove("header__nav-active");
    });

}());


