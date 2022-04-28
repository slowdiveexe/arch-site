class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
      this.mobileMenu = document.querySelector(mobileMenu);
      this.navList = document.querySelector(navList);
      this.navLinks = document.querySelectorAll(navLinks);
      this.activeClass = "active";
  
      this.handleClick = this.handleClick.bind(this);
    }
    animateLinks() {
        this.navLinks.forEach((link, index) => {
          link.style.animation
            ? (link.style.animation = "")
            : (link.style.animation = `navLinkFade 0.8s ease forwards ${
                index / 7 + 0.3
              }s`);
        });
      }
      handleClick() {
        this.navList.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
        this.animateLinks();
      }
      addClickEvent() {
        this.mobileMenu.addEventListener("click", this.handleClick);
      }

      init() {
        if (this.mobileMenu) {
          this.addClickEvent();
        }
        return this;
      }
    }
    const mobileNavbar = new MobileNavbar(
        ".mobile-menu",
        ".nav-list",
        ".nav-list li",
      );
      mobileNavbar.init();
    

     const slides = document.querySelectorAll('.slide');
     const next = document.querySelector('#next');
     const prev = document.querySelector('#prev');
     const auto = true;
     const intervalTime = 6000;
     let slideInterval;

     const nextSlide = () => {
       const current = document.querySelector('.current');
       // remove current class
       current.classList.remove('current');
       // check for next slide 
       if(current.nextElementSibling) {
         //add current to next sibling
         current.nextElementSibling.classList.add('current');
       } else {
         // Add current to start
         slides[0].classList.add('current');

       }
       setTimeout(()=> current.classList.remove('current'));
     }

     const prevSlide = () => {
      const current = document.querySelector('.current');
      // remove current class
      current.classList.remove('current');
      // check for prev slide 
      if(current.previousElementSibling) {
        //add current to prev sibling
        current.previousElementSibling.classList.add('current');
      } else {
        // Add current to last
        slides[slides.length - 1].classList.add('current');

      }
      setTimeout(()=> current.classList.remove('current'));
    };

    // button event
    next.addEventListener('click', e => {
      nextSlide();
    });
    prev.addEventListener('click', e => {
      prevSlide();
    });


    if(auto) {
      slideInterval = setInterval(nextSlide, intervalTime)
    }
