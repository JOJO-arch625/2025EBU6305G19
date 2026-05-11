(function () {
    var root = document.documentElement;
    var fontSize = 100;

    var fontBtns = document.querySelectorAll('.font-btn');
    fontBtns.forEach(function (btn) {
        btn.addEventListener('click', function () {
            var text = btn.textContent.trim();
            if (text.indexOf('+') !== -1) {
                fontSize = Math.min(160, fontSize + 10);
            } else if (text.indexOf('-') !== -1) {
                fontSize = Math.max(60, fontSize - 10);
            }
            root.style.fontSize = fontSize + '%';
        });
    });

    var contrastBtn = document.getElementById('contrastToggle');
    if (contrastBtn) {
        contrastBtn.addEventListener('click', function () {
            document.body.classList.toggle('high-contrast');
            contrastBtn.classList.toggle('active');
        });
    }

    var logoEl = document.querySelector('nav .logo');
    if (logoEl && !logoEl.closest('a')) {
        logoEl.style.cursor = 'pointer';
        logoEl.addEventListener('click', function () {
            window.location.href = 'index.html';
        });
    }

    var langBtn = document.querySelector('.nav-right .lang-btn');
    if (langBtn && !langBtn.dataset.bound) {
        langBtn.dataset.bound = 'true';
        var isZh = false;

        var navKeys = ['nav_home', 'nav_learn', 'nav_game', 'nav_test', 'nav_community'];
        var navTexts = {
            en: { nav_home: 'Homepage', nav_learn: 'Learning', nav_game: 'Game', nav_test: 'Test', nav_community: 'Community' },
            zh: { nav_home: '首页', nav_learn: '学习', nav_game: '游戏', nav_test: '测试', nav_community: '社区' }
        };

        var breadcrumbTexts = {
            en: { home: 'Home', learning: 'Learning', test: 'Test', community: 'Community', about: 'About', question: 'Question', discussions: 'Discussions', profiles: 'Profiles', scoreboard: 'Scoreboard' },
            zh: { home: '首页', learning: '学习', test: '测试', community: '社区', about: '关于', question: '答题', discussions: '讨论', profiles: '个人资料', scoreboard: '排行榜' }
        };

        var pageTitleTexts = {
            en: {},
            zh: {}
        };

        var pageSubtitleTexts = {
            en: {},
            zh: {}
        };

        var footerTexts = {
            en: { copy: '© 2026 Color Learning Website. All rights reserved.', privacy: 'Privacy Policy', terms: 'Terms of Use' },
            zh: { copy: '© 2026 色彩学习网站. 保留所有权利.', privacy: '隐私政策', terms: '使用条款' }
        };

        var pageId = '';
        var activeNav = document.querySelector('nav a.active');
        if (activeNav) {
            var href = activeNav.getAttribute('href');
            if (href.indexOf('learning') !== -1) pageId = 'learning';
            else if (href.indexOf('game') !== -1) pageId = 'game';
            else if (href.indexOf('test') !== -1) pageId = 'test';
            else if (href.indexOf('community') !== -1) pageId = 'community';
            else pageId = 'home';
        }

        var path = window.location.pathname;
        if (path.indexOf('test-about') !== -1) pageId = 'test-about';
        else if (path.indexOf('test-question') !== -1) pageId = 'test-question';
        else if (path.indexOf('discussions') !== -1) pageId = 'discussions';
        else if (path.indexOf('profiles') !== -1) pageId = 'profiles';
        else if (path.indexOf('scoreboard') !== -1) pageId = 'scoreboard';

        var titleEl = document.querySelector('.page-title');
        var subtitleEl = document.querySelector('.page-subtitle');
        if (titleEl) {
            pageTitleTexts.en.title = titleEl.textContent;
            var savedEnTitle = titleEl.textContent;
            var zhTitles = {
                'home': '学习色彩编码',
                'learning': '让你乐在其中的色彩编码学习！',
                'game': '色彩编码实验室世界',
                'test': '色彩编码模拟测试',
                'community': '色彩学习社区',
                'test-about': '关于本测试',
                'test-question': '测试答题',
                'discussions': '小组讨论',
                'profiles': '学习者档案',
                'scoreboard': '社区排行榜'
            };
            pageTitleTexts.zh.title = zhTitles[pageId] || savedEnTitle;
        }
        if (subtitleEl) {
            pageTitleTexts.en.subtitle = subtitleEl.textContent;
            var savedEnSub = subtitleEl.textContent;
            var zhSubs = {
                'home': '掌握 RGB/CMYK/HSV/YCbCr',
                'learning': '光物理、人类视觉、RGB/CMYK/HSV/YUV/YCbCr — 完整专业知识体系尽在掌握',
                'game': '探索世界，完成挑战',
                'test': '选择一个等级，每道题后获得即时反馈。',
                'community': '一起学习，共同竞争',
                'test-about': '了解本测试的内容和规则',
                'test-question': '认真作答，获取即时反馈',
                'discussions': '加入对话，分享学习心得',
                'profiles': '探索成员档案和学习之旅',
                'scoreboard': '每日更新的顶尖表现者和排名'
            };
            pageTitleTexts.zh.subtitle = zhSubs[pageId] || savedEnSub;
        }

        langBtn.addEventListener('click', function () {
            isZh = !isZh;
            var lang = isZh ? 'zh' : 'en';
            langBtn.textContent = isZh ? '中文' : 'EN';
            root.lang = isZh ? 'zh' : 'en';

            var navLinks = document.querySelectorAll('nav ul li a');
            navLinks.forEach(function (a, i) {
                if (navTexts[lang][navKeys[i]]) {
                    a.textContent = navTexts[lang][navKeys[i]];
                }
            });

            var bcLinks = document.querySelectorAll('.breadcrumb a');
            var bcCurrent = document.querySelector('.breadcrumb-current');
            if (bcLinks.length > 0) {
                bcLinks[0].textContent = breadcrumbTexts[lang].home;
            }
            if (bcLinks.length > 1) {
                var secondKey = '';
                if (pageId === 'learning') secondKey = 'learning';
                else if (pageId === 'test' || pageId === 'test-about' || pageId === 'test-question') secondKey = 'test';
                else if (pageId === 'community' || pageId === 'discussions' || pageId === 'profiles' || pageId === 'scoreboard') secondKey = 'community';
                if (secondKey) bcLinks[1].textContent = breadcrumbTexts[lang][secondKey];
            }
            if (bcCurrent) {
                var currentKey = '';
                if (pageId === 'home') currentKey = 'home';
                else if (pageId === 'learning') currentKey = 'learning';
                else if (pageId === 'test') currentKey = 'test';
                else if (pageId === 'test-about') currentKey = 'about';
                else if (pageId === 'test-question') currentKey = 'question';
                else if (pageId === 'community') currentKey = 'community';
                else if (pageId === 'discussions') currentKey = 'discussions';
                else if (pageId === 'profiles') currentKey = 'profiles';
                else if (pageId === 'scoreboard') currentKey = 'scoreboard';
                if (currentKey) bcCurrent.textContent = breadcrumbTexts[lang][currentKey];
            }

            if (titleEl && pageTitleTexts[lang].title) {
                titleEl.textContent = pageTitleTexts[lang].title;
            }
            if (subtitleEl && pageTitleTexts[lang].subtitle) {
                subtitleEl.textContent = pageTitleTexts[lang].subtitle;
            }

            var footerP = document.querySelector('footer p');
            if (footerP) {
                var ft = footerTexts[lang];
                footerP.innerHTML = ft.copy +
                    ' <a href="privacy.html">' + ft.privacy + '</a>' +
                    ' <a href="#">' + ft.terms + '</a>';
            }

            var moduleH3s = document.querySelectorAll('.module h3');
            var moduleLinks = document.querySelectorAll('.module .module-link');
            var moduleZhH3 = ['社交学习', '个人资料', '排行榜 + 明星学习者'];
            var moduleZhLinks = ['探索讨论 →', '浏览档案 →', '查看排行榜 →'];
            var moduleEnH3 = ['Social Learning', 'Profiles', 'Scoreboard + Star Learners'];
            var moduleEnLinks = ['Explore Discussions →', 'Browse Profiles →', 'View Scoreboard →'];
            moduleH3s.forEach(function (h3, i) {
                if (isZh && moduleZhH3[i]) h3.textContent = moduleZhH3[i];
                else if (!isZh && moduleEnH3[i]) h3.textContent = moduleEnH3[i];
            });
            moduleLinks.forEach(function (a, i) {
                if (isZh && moduleZhLinks[i]) a.textContent = moduleZhLinks[i];
                else if (!isZh && moduleEnLinks[i]) a.textContent = moduleEnLinks[i];
            });

            var filterBtns = document.querySelectorAll('.filter-btn');
            var filterZhMap = { 'all': '全部', 'tips': '学习技巧', 'study': '学习方法', 'theory': '色彩理论', 'progress': '进度更新', 'game': '游戏技巧', 'beginner': '初级', 'intermediate': '中级', 'advanced': '高级', 'expert': '专家' };
            var filterEnMap = { 'all': 'All', 'tips': 'Learning Tips', 'study': 'Study Methods', 'theory': 'Color Theory', 'progress': 'Progress Updates', 'game': 'Game Tips', 'beginner': 'Beginner', 'intermediate': 'Intermediate', 'advanced': 'Advanced', 'expert': 'Expert' };
            filterBtns.forEach(function (btn) {
                var key = btn.textContent.trim().toLowerCase().replace(/\s+/g, '');
                var map = isZh ? filterZhMap : filterEnMap;
                for (var k in map) {
                    if (key.indexOf(k.replace(/\s+/g, '')) !== -1) {
                        btn.textContent = map[k];
                        break;
                    }
                }
            });

            var newDiscBtn = document.getElementById('openNewDiscussionBtn');
            if (newDiscBtn) {
                newDiscBtn.textContent = isZh ? '发起新讨论' : 'Start New Discussion';
            }

            var backLink = document.querySelector('.back-link');
            if (backLink) {
                backLink.textContent = isZh ? '← 返回' : backLink.textContent.replace('← 返回', '← Back');
                if (!isZh && backLink.textContent.indexOf('← 返回') !== -1) {
                    backLink.textContent = backLink.textContent.replace('← 返回', '← Back to');
                }
                if (isZh && backLink.textContent.indexOf('Back') !== -1) {
                    backLink.textContent = backLink.textContent.replace(/← Back.*/, '← 返回');
                }
            }

            var startTestBtn = document.getElementById('start-test-btn');
            if (startTestBtn) {
                startTestBtn.textContent = isZh ? '开始测试' : 'Start Test';
            }

            var levelCards = document.querySelectorAll('.level-card h3');
            var levelZh = ['基础概念', '高级编码', '综合测试'];
            var levelEn = ['Basic Concepts', 'Advanced Encoding', 'Comprehensive Test'];
            levelCards.forEach(function (h3, i) {
                if (isZh && levelZh[i]) h3.textContent = levelZh[i];
                else if (!isZh && levelEn[i]) h3.textContent = levelEn[i];
            });

            var levelBadges = document.querySelectorAll('.level-badge');
            levelBadges.forEach(function (badge) {
                var text = badge.textContent.trim();
                if (isZh) {
                    badge.textContent = text.replace('Level 1', '等级1').replace('Level 2', '等级2').replace('Level 3', '等级3');
                } else {
                    badge.textContent = text.replace('等级1', 'Level 1').replace('等级2', 'Level 2').replace('等级3', 'Level 3');
                }
            });
        });
    }

    var navToggle = document.querySelector('.nav-toggle');
    if (navToggle) {
        navToggle.addEventListener('click', function () {
            var navUl = document.querySelector('nav ul');
            if (navUl) navUl.classList.toggle('nav-open');
        });
    }
})();
