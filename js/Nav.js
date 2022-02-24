const navSlide = () => {
    const burger = document.querySelector('.burger'); // for the burger menu
    const nav = document.querySelector('.Nav-Links'); // for the main navigation bar
    const navLinks = document.querySelectorAll('.Nav-Links li'); // for the actual links.


    //toggles the navigation links
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        //makes the links animated.
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 5 + 0.5}s`
            }


        });

        // makes the burget animate into a cross.

        burger.classList.toggle('toggle');




    });


}


navSlide();