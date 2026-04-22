// 1. 语言包配置
const langData = {
    'zh': {
        'nav-logo': '个人网站',
        'nav-home': '首页',
        'nav-about': '关于我',
        'nav-exp': '经历',
        'nav-projects': '项目',
        'nav-contact': '联系我',
        'hero-hi': '你好，我是',
        'hero-sub': '欢迎来到我的个人主页🤓👆',
        'hero-btn': '了解更多！',
        'about-content': '就读于南开大学人工智能学院，“深耕”于控制理论、微纳机器人等方向🤓<br>对人工智能技术、大模型有很高兴趣<br>业余诗人，对乒乓球、足球、排球、游泳也略知一二😋<br>梦想是上完学回去种地<br>欢迎和我探讨一切有趣的知识！',
        'exp-edu-title': '教育经历',
        'exp-edu-list': '<li>南开大学，人工智能学院 2024.9-至今</li><li>南开大学，商学院 2023.9-2024.9</li><li>河北省香河一中 2020.9-2023.6</li><li>河北省香河二中 2017.9-2020.7</li>',
        'exp-honors-title': '所获荣誉',
        'exp-honors-list': '<li>中国人工智能应用场景创新挑战赛二等奖</li><li>阿里巴巴大模型冬季训练营结营二等奖</li><li>南开大学学业优秀奖学金</li><li>南开大学创新奖学金</li>',
        'exp-work-title': '工作经历',
        'exp-work-list': '<li>南开大学党委学工部干事</li><li>南开大学党委宣传部视频小组成员</li><li>第三十一届南开大学学生代表大会校代表</li><li>中国文旅博览会南开旅游大会2024新闻撰稿</li>',
        'proj-1-t': '微型磁控机器人（在研）',
        'proj-1-d': '磁场控制的微型机器人设计与实现',
        'proj-2-t': '肌电假手的设计与控制（在研）',
        'proj-2-d': '肌电信号的处理与控制系统的设计',
        'proj-3-t': '基于知识增强的优化智能体',
        'proj-3-d': '融合模糊控制与启发函数的垂类模型',
        'con-wechat': '微信',
        'con-email': '邮箱',
        'con-addr': '通信地址',
        'footer-text': '王小年更新于2026.4.21',
        'footer-pv': '访问量',
        'footer-unit': '次'
    },
    'en': {
        'nav-logo': 'Portfolio',
        'nav-home': 'Home',
        'nav-about': 'About',
        'nav-exp': 'Experience',
        'nav-projects': 'Projects',
        'nav-contact': 'Contact',
        'hero-hi': "Hello, I'm",
        'hero-sub': 'Welcome to my personal homepage 🤓👆',
        'hero-btn': 'Learn More',
        'about-content': 'Student at the College of Artificial Intelligence, Nankai University. Focusing on Control Theory and Microrobotics. 🤓<br>Passionate about AI and Large Language Models.<br>Amateur poet, also enjoy table tennis, football, volleyball, and swimming. 😋<br>Dream is to return to the countryside after finishing studies.<br>Welcome to discuss any interesting topics with me!',
        'exp-edu-title': 'Education',
        'exp-edu-list': '<li>Nankai Univ, AI College, 2024.9-Present</li><li>Nankai Univ, Business School, 2023.9-2024.9</li><li>Xianghe No.1 High School, 2020.9-2023.6</li><li>Xianghe No.2 High School, 2017.9-2020.7</li>',
        'exp-honors-title': 'Honors',
        'exp-honors-list': '<li>2nd Prize, China AI Application Scenario Innovation Challenge</li><li>2nd Prize, Alibaba LLM Winter Camp</li><li>Nankai University Academic Excellence Scholarship</li><li>Nankai University Innovation Scholarship</li>',
        'exp-work-title': 'Activities',
        'exp-work-list': '<li>Staff, Student Affairs Dept, NKU</li><li>Member, Video Group, Publicity Dept, NKU</li><li>Delegate, 31st NKU Student Congress</li><li>News Writer, NKU Tourism Conference 2024</li>',
        'proj-1-t': 'Microrobots (Researching)',
        'proj-1-d': 'Design and implementation of magnetic-controlled microrobots',
        'proj-2-t': 'EMG Prosthetic Hand (Researching)',
        'proj-2-d': 'Processing of EMG signals and control system design',
        'proj-3-t': 'Knowledge-Enhanced Agent',
        'proj-3-d': 'A vertical model fusing fuzzy control and heuristic functions',
        'con-wechat': 'WeChat',
        'con-email': 'Email',
        'con-addr': 'Address',
        'footer-text': 'Updated by Xiaonian Wang on 2026.4.21',
        'footer-pv': 'Views',
        'footer-unit': 'times'
    }
};

// 2. 切换逻辑
let currentLang = 'zh';
const langBtn = document.getElementById('lang-switch');

langBtn.addEventListener('click', () => {
    currentLang = currentLang === 'zh' ? 'en' : 'zh';
    langBtn.textContent = currentLang === 'zh' ? 'EN' : '中文';
    
    document.querySelectorAll('[data-key]').forEach(elem => {
        const key = elem.getAttribute('data-key');
        if (langData[currentLang][key]) {
            // 检查内容是否包含 HTML 标签（如 <li> 或 <br>）
            if (langData[currentLang][key].includes('<')) {
                elem.innerHTML = langData[currentLang][key];
            } else {
                elem.textContent = langData[currentLang][key];
            }
        }
    });
});

// 3. 导航栏显隐
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop && scrollTop > 100) {
        navbar.classList.add('navbar-hidden');
    } else {
        navbar.classList.remove('navbar-hidden');
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
}, false);

// 4. 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        if(this.getAttribute('href') === "#") return;
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
