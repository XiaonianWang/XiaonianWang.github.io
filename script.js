// 1. 导航栏自动隐藏与显示
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // 向下滑动
    if (scrollTop > lastScrollTop && scrollTop > 100) {
        navbar.classList.add('navbar-hidden');
    } 
        
    // 向上滑动
    else {
        navbar.classList.remove('navbar-hidden');
    }
    
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; 
}, false);

// 2. 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
