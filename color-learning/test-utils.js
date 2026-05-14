(function () {
    const STORAGE_KEYS = {
        lang: 'colorLearningTestLang',
        fontSize: 'colorLearningTestFontSize'
    };

    const translations = {
        zh: {
            Homepage: '首页',
            Learning: '学习',
            Game: '游戏',
            Test: '测试',
            Community: '社区',
            'Color Encoding Mock Test': '颜色编码模拟测试',
            'Choose a level and get instant feedback after every question.': '选择一个难度级别，每题作答后立即获得反馈。',
            'Basic Concepts': '基础概念',
            'Build confidence with the core ideas behind RGB values and hexadecimal notation.': '通过 RGB 数值和十六进制表示的核心概念建立信心。',
            'RGB channel basics': 'RGB 通道基础',
            'Hexadecimal notation': '十六进制表示',
            'Simple color interpretation': '简单颜色解读',
            '5 questions - 10 minutes': '5 题 - 10 分钟',
            'Advanced Encoding': '进阶编码',
            'Review common colour models and practical ideas used in graphics workflows.': '复习图形工作流中常见的颜色模型和实用概念。',
            'HSL and CMYK usage': 'HSL 与 CMYK 用法',
            'Alpha channels': 'Alpha 通道',
            'Bit depth and precision': '位深与精度',
            '5 questions - 15 minutes': '5 题 - 15 分钟',
            'Comprehensive Test': '综合测试',
            'Challenge yourself with colour spaces, gamut, gamma, and production scenarios.': '用色彩空间、色域、伽马和生产场景挑战自己。',
            'Color spaces and gamut': '色彩空间与色域',
            'Gamma correction': '伽马校正',
            'Video and print workflows': '视频与印刷工作流',
            '6 questions - 18 minutes': '6 题 - 18 分钟',
            'Home': '首页',
            'Test Levels': '测试级别',
            'About Test': '测试说明',
            'Question Test': '答题测试',
            'Back to Test': '返回测试',
            'About This Test': '测试说明',
            'This level introduces the main ideas used to read and reason about digital colour values.': '本级别介绍阅读和理解数字颜色值的主要思路。',
            'You will get immediate feedback after every answer so the test doubles as a revision activity.': '每次作答后都会立即获得反馈，因此测试也可以作为复习活动。',
            'Key Features': '主要特点',
            'Before You Start': '开始前',
            'Questions:': '题目数：',
            'Estimated time:': '预计时间：',
            'Focus:': '重点：',
            'Start Test': '开始测试',
            'Question 1 of 5': '第 1 题 / 共 5 题',
            'Exit Test': '退出测试',
            'Example': '示例',
            'Next Question': '下一题',
            'View Results': '查看结果',
            'Strong Result': '表现良好',
            'Test Complete': '测试完成',
            'You finished the test.': '你已完成测试。',
            Correct: '正确',
            Incorrect: '错误',
            Accuracy: '准确率',
            'Try Again': '再试一次',
            'Back to Test Levels': '返回测试级别',
            'Correct answer': '回答正确',
            'Not quite': '还不对',
            'Perfect score': '满分',
            Excellent: '优秀',
            'Good Review': '继续复习',
            'Keep Practising': '继续练习',
            'Start the test now? Make sure you are ready.': '现在开始测试吗？请确认你已经准备好了。',
            'Exit this test and lose your current progress?': '退出测试并丢失当前进度吗？',
            'All rights reserved.': '保留所有权利。',
            'Privacy Policy': '隐私政策',
            'Terms of Use': '使用条款'
        }
    };

    let currentLang = localStorage.getItem(STORAGE_KEYS.lang) || 'en';
    let currentFontSize = Number(localStorage.getItem(STORAGE_KEYS.fontSize)) || 100;

    function t(text) {
        return currentLang === 'zh' && translations.zh[text] ? translations.zh[text] : text;
    }

    function applyStaticTranslations() {
        document.documentElement.lang = currentLang === 'zh' ? 'zh-CN' : 'en';
        document.querySelectorAll('[data-i18n]').forEach((element) => {
            const key = element.getAttribute('data-i18n');
            element.textContent = t(key);
        });
        document.querySelectorAll('.lang-btn').forEach((button) => {
            button.dataset.bound = 'true';
            button.textContent = currentLang === 'zh' ? '中' : 'EN';
            button.setAttribute('aria-label', currentLang === 'zh' ? 'Switch language' : '切换语言');
        });
    }

    function applyFontSize() {
        document.body.style.fontSize = `${currentFontSize}%`;
    }

    function initTestControls(onLanguageChange) {
        applyFontSize();
        applyStaticTranslations();

        document.querySelectorAll('.lang-btn').forEach((button) => {
            button.addEventListener('click', () => {
                currentLang = currentLang === 'en' ? 'zh' : 'en';
                localStorage.setItem(STORAGE_KEYS.lang, currentLang);
                applyStaticTranslations();
                if (typeof onLanguageChange === 'function') {
                    onLanguageChange(currentLang);
                }
            });
        });

        document.querySelectorAll('.font-btn').forEach((button) => {
            button.addEventListener('click', (event) => {
                event.stopImmediatePropagation();
                const change = button.textContent.trim() === 'A+' ? 10 : -10;
                currentFontSize = Math.min(160, Math.max(70, currentFontSize + change));
                localStorage.setItem(STORAGE_KEYS.fontSize, String(currentFontSize));
                applyFontSize();
            });
        });

        const navToggle = document.querySelector('.nav-toggle');
        if (navToggle && !navToggle.dataset.bound) {
            navToggle.dataset.bound = 'true';
            navToggle.addEventListener('click', () => {
                const navList = document.querySelector('nav ul');
                if (navList) {
                    navList.classList.toggle('nav-open');
                }
            });
        }
    }

    window.TestPageUtils = {
        init: initTestControls,
        t,
        getLang: () => currentLang
    };
})();
