
function headerInIt() {

    let lastScrollY = window.scrollY;
    const header = document.querySelector('.header');
    const heroSection = document.querySelector('.lo_first');

    let ticking = false;
    let isHeaderHidden = false;

    function handleScroll() {
        const currentScrollY = window.scrollY;
        const heroBottom = heroSection.getBoundingClientRect().bottom;

        if (heroBottom > 0) {
            if (isHeaderHidden) {
                gsap.to(header, { y: 0, duration: 0.5 });
                isHeaderHidden = false;
            }
        } else {
            if (currentScrollY > lastScrollY && !isHeaderHidden) {
                gsap.to(header, { y: -100, duration: 0.5 });
                isHeaderHidden = true;
            } else if (currentScrollY < lastScrollY && isHeaderHidden) {
                gsap.to(header, { y: 0, duration: 0.5 });
                isHeaderHidden = false;
            }
        }

        lastScrollY = currentScrollY;
        ticking = false;
    }

    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(handleScroll);
            ticking = true;
        }
    });
}


function subheaderInIt() {
    const headerNav = document.querySelector('.header_nav--list');
    const headerNavItem = document.querySelectorAll('.header_nav--list .header_nav--item');
    const headerSubNav = document.querySelectorAll('.header_subnav--block');

    headerNavItem.forEach((item, index) => {
        item.addEventListener('mouseenter', () => {
            headerSubNav.forEach((sub, subIndex) => {
                if (subIndex === index) {
                    sub.classList.add('active');
                } else {
                    sub.classList.remove('active');
                }
            });
        });

        item.addEventListener('mouseleave', () => {
            headerSubNav[index].classList.remove('active');
        });
    });

    headerNavItem.forEach((item, index) => {
        item.addEventListener('mouseenter', () => {
            headerNavItem.forEach((nav, i) => {
                if (i !== index) {
                    nav.classList.add('dimmed');
                } else {
                    nav.classList.remove('dimmed');
                }
            });
        });
    });
    headerNav.addEventListener('mouseleave', () => {
        headerNavItem.forEach(nav => nav.classList.remove('dimmed'));
    });






}

function sideMenuInIt() {
    const toggleBtn = document.querySelector('.header_sidebar--btn');
    const sideMenu = document.querySelector('#sideMenu');
    const closeBtn = document.querySelector('.close--btn');
    const sideOverlay = document.querySelector('.side_menu_overlay');

    // 다른곳 눌렀을때 사이드메뉴 해제
    sideOverlay.addEventListener('click', function () {
        sideMenu.classList.remove("active");
        sideOverlay.classList.remove('active');
    });

    // 열기
    toggleBtn.addEventListener('click', function () {
        sideMenu.classList.toggle('active');
        sideOverlay.classList.toggle('active');
    });

    // 닫기
    closeBtn.addEventListener("click", function () {
        sideMenu.classList.remove("active");
        sideOverlay.classList.remove('active');
    });
}




function initGoToTop() {
    const btn = document.getElementById('GoToTop');
    if (!btn) return;

    btn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // 부드러운 스크롤
        });
    });
}



document.addEventListener('DOMContentLoaded', () => {
    
    // 프리티포토
    const links = document.querySelectorAll('.lightbox-link');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const caption = document.getElementById('lightbox-caption');
    const closeBtn = document.getElementById('lightbox-close');

    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            lightboxImg.src = this.getAttribute('href');
            caption.textContent = this.getAttribute('data-title') || '';
            lightbox.classList.add('show');
        });
    });

    closeBtn.addEventListener('click', () => {
        lightbox.classList.remove('show');
    });

    lightbox.addEventListener('click', e => {
        if (e.target === lightbox) {
            lightbox.classList.remove('show');
        }
    });

    // ESC 키로 닫기
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            lightbox.classList.remove('show');
        }
    });
});
document.querySelectorAll('a[href="#"]').forEach(link => {
    link.addEventListener('click', e => e.preventDefault());
});

// // loading -- common
// window.addEventListener('load', () => {
//     const overlay = document.getElementById('loading-overlay');
//     overlay.classList.add('hidden');

//     setTimeout(() => {
//         overlay.style.display = 'none';
//     }, 500);
// });


// // to top button -- common
// document.querySelector("#GoToTop").addEventListener("click", function () {
//     gsap.to(window, {
//         scrollTo: 0,
//         duration: 1,
//         ease: "power2.out"
//     });
// });
