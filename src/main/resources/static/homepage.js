// 等待DOM加载完成
document.addEventListener('DOMContentLoaded', function() {
    // 设置当前年份
    document.getElementById('current-year').textContent = new Date().getFullYear();
    
    // 加载新闻数据
    loadNewsArticles();
    
    // 为所有按钮添加点击效果
    addButtonEffects();
});

// 更新倒计时天数
function updateCountdown() {
    // 模拟数据 - 实际应用中可以从服务器获取
    const daysUntilNextTest = 7; // 7天后可以再次测试
    document.getElementById('days').textContent = daysUntilNextTest;
}

// 加载新闻文章
function loadNewsArticles() {
    const newsContainer = document.getElementById('news-container');
    
    // 模拟新闻数据 - 实际应用中可以从API获取
    const newsArticles = [
        {
            title: "如何培养积极的心态面对生活压力",
            date: "2024-01-15",
            content: "在现代科技的生态中，压力已经成为我们不可避免的难题。本文将为您介绍几个实用的方法，帮助您建立积极的心态。",
            imageUrl: "IMG.png"
        },
        {
            title: "职场心理健康：平衡工作与生活",
            date: "2024-01-12",
            content: "在追求事业发展的同时，如何保持心理健康？本文将分享一些实用的职场心理调查技巧。",
            imageUrl: "IMG (1).png"
        },
        {
            title: "亲子关系：构建健康的家庭氛围",
            date: "2024-01-10",
            content: "良好的亲子关系是家庭幸福的基站。让我们一起探讨如何营造温暖、理解的家庭环境。",
            imageUrl: "IMG (2).png"
        },
        {
            title: "自我成长：探索内在潜能",
            date: "2024-01-06",
            content: "每个人都有无限潜能，通过自我探索和成长，发现更好的自己",
            imageUrl: "IMG@1x.png"
        },
        {
            title: "正念生活:活在当下的艺术.",
            date: "2024-02-17",
            content: "学习正念生活方式，享受当下每一刻，培养积极的生活态度。",
            imageUrl: "IMG@1x (1).png"
        },
        {
            title: "瑜伽冥想:找寻内心的平静",
            date: "2024-01-10",
            content: "通过瑜伽和冥想练习，学会与自己对话，培养正念，获得内心的宁静。",
            imageUrl: "IMG@1x (2).png"
        },
    ];
    
    // 清空容器
    newsContainer.innerHTML = '';
    
    // 创建新闻卡片
    newsArticles.forEach(article => {
        const newsCard = document.createElement('div');
        newsCard.className = 'news-card';
        newsCard.innerHTML = `
            <div class="news-content">
                <img src="${article.imageUrl}" " class="news-image">
                <h3>${article.title}</h3>
                <span class="news-date">${article.date}</span>
                <p>${article.content}</p>
                <a href="#" class="read-more">阅读全文</a>
            </div>
        `;
        newsContainer.appendChild(newsCard);
    });
}

// 为按钮添加点击效果
function addButtonEffects() {
    const buttons = document.querySelectorAll('.btn');

    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // 删除 e.preventDefault();

            // 添加点击效果
            this.style.transform = 'scale(0.95)';

            setTimeout(() => {
                this.style.transform = '';
            }, 200);
        });
    });
}

// 可以添加更多功能函数
// 例如：用户认证、表单验证、API调用等