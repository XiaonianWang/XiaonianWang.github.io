<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>我的个人网站</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <!-- 导航栏（修正结构，确保flex对齐） -->
    <nav class="navbar">
        <div class="container">
            <h1 class="logo">个人网站</h1>
            <ul class="nav-links">
                <li><a href="#home">首页</a></li>
                <li><a href="#about">关于我</a></li>
                <li><a href="#skills">技能</a></li>
                <li><a href="#projects">项目</a></li>
                <li><a href="#contact">联系我</a></li>
            </ul>
        </div>
    </nav>

    <!-- 首页横幅 -->
    <header id="home" class="hero">
        <div class="hero-content">
            <h2>你好，我是 <span class="highlight">王小年</span></h2>
            <p>一名热爱编程的开发者 | 持续学习 | 持续进步</p>
            <a href="#projects" class="btn">查看我的项目</a>
        </div>
    </header>

    <!-- 关于我 -->
    <section id="about" class="about section">
        <div class="container">
            <h2 class="section-title">关于我</h2>
            <p class="about-text">
                我是南开大学自动化专业的一名学生，喜欢探索新技术，擅长构建美观实用的网站和应用。<br>
                热爱开源，乐于分享，持续在编程的道路上前行。
            </p>
        </div>
    </section>

    <!-- 技能栈 -->
    <section id="skills" class="skills section">
        <div class="container">
            <h2 class="section-title">我的技能</h2>
            <div class="skills-grid">
                <div class="skill-card">HTML</div>
                <div class="skill-card">CSS</div>
                <div class="skill-card">JavaScript</div>
                <div class="skill-card">Git</div>
                <div class="skill-card">Python</div>
                <div class="skill-card">Matlab</div>
            </div>
        </div>
    </section>

    <!-- 项目展示 -->
    <section id="projects" class="projects section">
        <div class="container">
            <h2 class="section-title">我的项目</h2>
            <div class="projects-grid">
                <div class="project-card">
                    <h3>微型磁控机器人</h3>
                    <p>基于磁场控制的微型机器人设计与实现</p>
                </div>
                <div class="project-card">
                    <h3>防水假手设计</h3>
                    <p>适用于水下环境的仿生假手原型开发</p>
                </div>
                <div class="project-card">
                    <h3>GitHub数据统计工具</h3>
                    <p>自动化生成个人GitHub数据可视化报告</p>
                </div>
            </div>
        </div>
    </section>

    <!-- 联系方式 -->
    <section id="contact" class="contact section">
        <div class="container">
            <h2 class="section-title">联系我</h2>
            <p>邮箱：wangxiaonian@example.com</p>
            <p>GitHub：github.com/xiaonianwang</p>
        </div>
    </section>

    <!-- 页脚 -->
    <footer class="footer">
        <div class="container">
            <p>&copy; 2026 王小年的个人网站 | 版权所有</p>
        </div>
    </footer>

    <script src="script.js"></script>
</body>
</html>
