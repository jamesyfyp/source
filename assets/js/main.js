/* Mobile menu burger toggle */

// (function () {
//     const navigation = document.querySelector('.gh-navigation');
//     const burger = navigation.querySelector('.gh-burger');
//     if (!burger) return;



//     burger.addEventListener('click', function () {
//         if (!navigation.classList.contains('is-open')) {
//             navigation.classList.add('is-open');
//             document.documentElement.style.overflowY = 'hidden';
//         } else {
//             navigation.classList.remove('is-open');
//             document.documentElement.style.overflowY = null;
//         }
//     });
// })();

/* Responsive video in post content */
(function () {
    const sources = [
        '.gh-content iframe[src*="youtube.com"]',
        '.gh-content iframe[src*="youtube-nocookie.com"]',
        '.gh-content iframe[src*="player.vimeo.com"]',
        '.gh-content iframe[src*="kickstarter.com"][src*="video.html"]',
        '.gh-content object',
        '.gh-content embed',
    ];
    reframe(document.querySelectorAll(sources.join(',')));
})();

/* Turn the main nav into dropdown menu when there are more than 5 menu items */
// (function () {
//     dropdown();
// })();

/* Infinite scroll pagination */
(function () {
    if (!document.body.classList.contains('home-template') && !document.body.classList.contains('post-template')) {
        pagination();
    }
})();

/* Responsive HTML table */
(function () {
  const tables = document.querySelectorAll('.gh-content > table:not(.gist table)');
  
  tables.forEach(function (table) {
      const wrapper = document.createElement('div');
      wrapper.className = 'gh-table';
      table.parentNode.insertBefore(wrapper, table);
      wrapper.appendChild(table);
  });
})();

/* GSAP needs to wait for cdn scripts to load, GSAP code in this block*/
document.addEventListener('DOMContentLoaded', function () {
  // register gspa plugins here
  gsap.registerPlugin(SplitText);
  gsap.registerPlugin(ScrollTrigger);
  
  /* 
    text split animations: naming convention is type-<chars|words|lines>-<staggerDurration> for id's
    if more nuance is needed, add the object key / value pair to the string ID for reusablity
  */
  let split5 = SplitText.create('#chars-5', {
    type: 'chars',
  })

  gsap.from(split5.chars, { 
    y: 100,
    opacity: 0,
    autoAlpha: 0,
    stagger: .5,
  })

  let split0125 = SplitText.create('#chars-0125', {
    type: 'chars',
  })

  gsap.from(split0125.chars, { 
    y: 100,
    opacity: 0,
    autoAlpha: 0,
    stagger: .0125,
  })

  //animations for lp hero sections
  gsap.set("#hero-1", { 
    opacity: 0, 
    y: 100
  });

  gsap.to("#hero-1", { 
    scrollTrigger: {
      trigger: "#hero-1",
      toggleActions: "restart pause reverse pause",
      marker: true,
    },
    duration: 2,
    opacity: 1,
    y: -100,
    ease: "power2.inOut" 
  });

  gsap.set("#hero-2", { opacity: 0 });

  gsap.to("#hero-2", { 
    scrollTrigger: {
      trigger: "#hero-2",
      toggleActions: "restart pause reverse pause",
      start: "center ",
      marker: true,
    },
    duration: 2,
    opacity: 1,
    ease: "power2.inOut" 
  });

  gsap.set("#hero-3", { opacity: 0 });

  gsap.to("#hero-3", { 
    scrollTrigger: {
      trigger: "#hero-container",
      toggleActions: "restart pause reverse pause",
      start: "bottom bottom",
      marker: true,
    },
    duration: 2,
    opacity: 1,
    ease: "power2.inOut" 
  });

  ScrollTrigger.create({
    trigger: "#hero-container",
    start: "top top",
  })
});