window.addEventListener('DOMContentLoaded', () =>{
    const burger = document.querySelector('.burger'),
        burger_menu = document.querySelector('.burger-menu');
    let check= true;
    
    burger.addEventListener('click', () =>{
        if(check){
            burger_menu.classList.add('burger-menu-active');
            burger.classList.add('burger-active');
            check = !check
        }else{
            burger_menu.classList.remove('burger-menu-active');
            burger.classList.remove('burger-active');
            check = !check
            

        }
    })

    const anchors = document.querySelectorAll('a[href*="#"]');

    for (let anchor of anchors) {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const blockID = anchor.getAttribute('href').substr(1);

            document.getElementById(blockID).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    }
})