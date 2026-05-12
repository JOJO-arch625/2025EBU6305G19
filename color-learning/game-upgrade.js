(() => {
    if (typeof window === "undefined" || typeof document === "undefined") {
        return;
    }

    const lanePercents = [18, 50, 82];

    const cafeTemplates = [
        {
            scenarioType: "screen",
            label: { en: "Phone Banner", zh: "手机横幅" },
            hint: { en: "Glowing screen asset", zh: "发光屏幕素材" },
            correctModel: "RGB",
            feedback: {
                en: "RGB fits glowing screens.",
                zh: "RGB 适合发光屏幕。"
            }
        },
        {
            scenarioType: "print",
            label: { en: "Magazine Cover", zh: "杂志封面" },
            hint: { en: "Ink on paper output", zh: "纸张油墨输出" },
            correctModel: "CMYK",
            feedback: {
                en: "CMYK fits ink on paper.",
                zh: "CMYK 适合纸张印刷。"
            }
        },
        {
            scenarioType: "tuning",
            label: { en: "UI Colour Picker", zh: "界面取色器" },
            hint: { en: "Human-readable colour tuning", zh: "更适合人类调色" },
            correctModel: "HSV",
            feedback: {
                en: "HSV is strong for interactive tuning.",
                zh: "HSV 更适合交互调色。"
            }
        },
        {
            scenarioType: "video",
            label: { en: "Video Stream", zh: "视频流" },
            hint: { en: "Separate luma and chroma", zh: "亮度与色差信号分离" },
            correctModel: "YCbCr",
            feedback: {
                en: "YCbCr works for video encoding.",
                zh: "YCbCr 更适合视频编码。"
            }
        }
    ];

    const printOrders = [
        {
            title: { en: "Poster Print", zh: "海报印刷" },
            clue: { en: "Paper stock for an ink poster.", zh: "纸张海报，需要油墨输出。" },
            hint: { en: "Think paper, CMYK, and ink-based print.", zh: "想想纸张、CMYK 和油墨输出。" },
            art: "assets/print-poster-cartoon.svg",
            medium: "paper",
            model: "CMYK",
            output: "ink",
            feedback: {
                en: "CMYK plus ink on paper completes the poster press job.",
                zh: "纸张 + CMYK + 油墨输出，完成海报印刷。"
            }
        },
        {
            title: { en: "LED Event Screen", zh: "活动大屏" },
            clue: { en: "Screen display with emitted light.", zh: "屏幕显示，依赖发光像素。" },
            hint: { en: "Think glowing pixels and screen display workflow.", zh: "想想发光像素和屏幕显示流程。" },
            art: "assets/print-screen-cartoon.svg",
            medium: "screen",
            model: "RGB",
            output: "display",
            feedback: {
                en: "RGB is best when the result glows on a screen.",
                zh: "屏幕发光显示时，RGB 更合适。"
            }
        },
        {
            title: { en: "Palette Guide", zh: "调色指南" },
            clue: { en: "A colour-picking helper for creators.", zh: "给创作者看的调色辅助卡。" },
            hint: { en: "Think human-readable tuning and preview tools.", zh: "想想人类可读的调色与预览工具。" },
            art: "assets/print-palette-cartoon.svg",
            medium: "palette",
            model: "HSV",
            output: "preview",
            feedback: {
                en: "HSV is ideal for readable colour tuning previews.",
                zh: "HSV 适合可读性强的调色预览。"
            }
        },
        {
            title: { en: "Broadcast Card", zh: "播出片头卡" },
            clue: { en: "Signal-focused video delivery.", zh: "面向视频信号传输的任务。" },
            hint: { en: "Think luma/chroma separation in video delivery.", zh: "想想视频传输中的亮度与色差分离。" },
            art: "assets/print-broadcast-cartoon.svg",
            medium: "signal",
            model: "YCbCr",
            output: "encode",
            feedback: {
                en: "YCbCr supports luma/chroma-friendly video delivery.",
                zh: "YCbCr 适合亮度/色差分离的视频流程。"
            }
        },
        {
            title: { en: "Flyer Pack", zh: "宣传单套组" },
            clue: { en: "Handout flyers for an offline event booth.", zh: "线下展位发放的纸质宣传单。" },
            hint: { en: "A physical handout still belongs to the print pipeline.", zh: "实体发放的纸质单页仍属于印刷流程。" },
            art: "assets/print-poster-cartoon.svg",
            medium: "paper",
            model: "CMYK",
            output: "ink",
            feedback: {
                en: "Printed flyers still rely on CMYK ink on paper.",
                zh: "纸质宣传单仍然依赖纸张、CMYK 和油墨输出。"
            }
        },
        {
            title: { en: "Booklet Cover", zh: "手册封面" },
            clue: { en: "A folded paper booklet for visitors to take home.", zh: "给观众带走的折页纸质手册。" },
            hint: { en: "Folded paper and take-home print both point to CMYK + ink.", zh: "折页纸张和带走的印刷品都指向 CMYK 与油墨。" },
            art: "assets/print-poster-cartoon.svg",
            medium: "paper",
            model: "CMYK",
            output: "ink",
            feedback: {
                en: "A paper booklet cover belongs in the CMYK print workflow.",
                zh: "纸质手册封面属于典型的 CMYK 印刷流程。"
            }
        },
        {
            title: { en: "Kiosk Screen", zh: "展台屏幕" },
            clue: { en: "A bright display looping on a booth monitor.", zh: "在展位显示器上循环播放的明亮画面。" },
            hint: { en: "This is meant to glow on a display, not on paper.", zh: "它是要在屏幕上发光显示，而不是印在纸上。" },
            art: "assets/print-screen-cartoon.svg",
            medium: "screen",
            model: "RGB",
            output: "display",
            feedback: {
                en: "Booth screens need RGB and display output.",
                zh: "展位屏幕需要 RGB 和显示输出。"
            }
        },
        {
            title: { en: "Tablet Menu", zh: "平板菜单" },
            clue: { en: "An interactive tablet interface with glowing colours.", zh: "带有发光色彩的交互式平板界面。" },
            hint: { en: "Interactive glowing interfaces belong to the screen pipeline.", zh: "会发光的交互界面属于屏幕显示流程。" },
            art: "assets/print-screen-cartoon.svg",
            medium: "screen",
            model: "RGB",
            output: "display",
            feedback: {
                en: "Interactive tablet visuals fit the RGB display pipeline.",
                zh: "交互式平板视觉最适合 RGB 显示流程。"
            }
        },
        {
            title: { en: "Theme Picker", zh: "主题取色器" },
            clue: { en: "A tool that helps a designer tweak colours by eye.", zh: "帮助设计师按视觉感受调整颜色的工具。" },
            hint: { en: "The key is readable colour adjustment, not final physical output.", zh: "重点是易于调色，而不是最终实体输出。" },
            art: "assets/print-palette-cartoon.svg",
            medium: "palette",
            model: "HSV",
            output: "preview",
            feedback: {
                en: "HSV stays readable when the goal is colour tuning.",
                zh: "当目标是调色时，HSV 更容易被人理解。"
            }
        },
        {
            title: { en: "Mood Board Card", zh: "氛围配色卡" },
            clue: { en: "A preview card showing colour options for a concept board.", zh: "展示概念板配色选项的预览卡片。" },
            hint: { en: "This order is about previewing and tuning palette options.", zh: "这个订单强调配色预览和调色逻辑。" },
            art: "assets/print-palette-cartoon.svg",
            medium: "palette",
            model: "HSV",
            output: "preview",
            feedback: {
                en: "Palette previews work well with HSV-based tuning logic.",
                zh: "配色预览卡很适合用 HSV 逻辑来组织。"
            }
        },
        {
            title: { en: "Streaming Lower Third", zh: "直播字幕条" },
            clue: { en: "A video graphics asset delivered inside a streaming signal.", zh: "在直播信号中传输的视频图形素材。" },
            hint: { en: "Streaming signal delivery points toward video encoding logic.", zh: "直播信号传输更接近视频编码逻辑。" },
            art: "assets/print-broadcast-cartoon.svg",
            medium: "signal",
            model: "YCbCr",
            output: "encode",
            feedback: {
                en: "Signal-delivered stream graphics point to YCbCr encoding.",
                zh: "通过视频信号传输的直播图形更贴近 YCbCr 编码流程。"
            }
        },
        {
            title: { en: "TV Intro Card", zh: "电视片头卡" },
            clue: { en: "A broadcast-ready title card for a TV package.", zh: "用于电视播出的片头标题卡。" },
            hint: { en: "Broadcast packages often separate luma and chroma.", zh: "广播包装常常要区分亮度与色差。" },
            art: "assets/print-broadcast-cartoon.svg",
            medium: "signal",
            model: "YCbCr",
            output: "encode",
            feedback: {
                en: "Broadcast packages commonly separate luma and chroma with YCbCr.",
                zh: "广播包装常通过 YCbCr 处理亮度与色差信号。"
            }
        }
    ];

    const printClearGoal = 5;

    const printCatalog = {
        medium: [
            { key: "paper", accent: "paper", label: { en: "Paper Stock", zh: "纸张" } },
            { key: "screen", accent: "screen", label: { en: "Screen Panel", zh: "屏幕" } },
            { key: "palette", accent: "palette", label: { en: "Palette Sheet", zh: "调色卡" } },
            { key: "signal", accent: "feed", label: { en: "Signal Feed", zh: "信号源" } }
        ],
        model: modelTokens.map((token) => ({
            key: token.key,
            accent: token.accent,
            label: { en: token.key, zh: token.key }
        })),
        output: [
            { key: "ink", accent: "ink", label: { en: "Ink Output", zh: "油墨输出" } },
            { key: "display", accent: "display", label: { en: "Display Output", zh: "显示输出" } },
            { key: "preview", accent: "preview", label: { en: "Preview Card", zh: "预览卡" } },
            { key: "encode", accent: "encode", label: { en: "Encode Pack", zh: "编码包" } }
        ]
    };

    const cafeState = {
        running: false,
        paused: false,
        ended: false,
        duration: 95,
        timeLeft: 95,
        score: 0,
        streak: 0,
        completed: 0,
        missed: 0,
        target: 10,
        guests: [],
        nextGuestId: 1,
        selectedGuestId: null,
        selectedModel: null,
        playerLane: 1,
        tickHandle: null,
        prompt: ""
    };

    const printState = {
        running: false,
        paused: false,
        ended: false,
        duration: 85,
        timeLeft: 85,
        score: 0,
        streak: 0,
        completedOrders: 0,
        failedOrders: 0,
        targetOrders: 8,
        currentStep: "medium",
        activeOrder: null,
        selectedParts: { medium: null, model: null, output: null },
        orderDeck: [],
        orderCursor: 0,
        tickHandle: null,
        message: "",
        hintVisible: false,
        hintLevel: 0,
        hintUsesRound: 0,
        currentOrderHintUses: 0,
        feedbackState: "ready",
        feedbackText: "",
        feedbackArt: "",
        rewardTimer: null
    };

    const ui = {};
    const audioState = {
        context: null,
        masterGain: null,
        bgmGain: null,
        sfxGain: null,
        unlocked: false,
        loopTimer: null,
        nextBeatTime: 0,
        beatIndex: 0
    };

    const baseApplyStaticTranslations = applyStaticTranslations;
    const baseOpenModal = openModal;
    const baseInteractWithStation = interactWithStation;
    const baseStopDispatchRound = typeof stopDispatchRound === "function" ? stopDispatchRound : () => {};
    const baseStopWorkbenchRound = typeof stopWorkbenchRound === "function" ? stopWorkbenchRound : () => {};
    const baseStartWorkbenchRound = typeof startWorkbenchRound === "function" ? startWorkbenchRound : () => {};

    const englishPatch = {
        task_model_visit: "Reach Chromatic Cafe",
        task_model_clear: "Clear enough cafe orders in one round",
        task_print_clear: "Complete a longer Poster Press run",
        print_hint: "Hint",
        print_hint_hide: "Hide Hint",
        station_model: "Chromatic Cafe",
        station_print: "Poster Press",
        prompt_model: "Press Enter to enter Chromatic Cafe",
        prompt_print: "Press Enter to enter Poster Press",
        active_model_type: "Cafe Floor",
        active_model_title: "Chromatic Cafe",
        active_model_text: "Move between guests, lock an order, then click the matching model bottle on the shelf.",
        active_print_type: "Poster Press",
        active_print_title: "Poster Press",
        active_print_text: "Assemble a print job in the right order: medium, colour pipeline, then output.",
        dispatch_pause: "Pause",
        dispatch_resume: "Resume",
        dispatch_selected_guest: "Current guest",
        dispatch_selected_model: "Selected model",
        dispatch_no_guest: "No guest selected",
        dispatch_no_model: "No model selected",
        dispatch_pause_title: "Cafe Pause",
        dispatch_pause_tutorial: "Move with A / D or Left / Right. Press E or Enter near a guest to lock the order, then click the matching bottle on the shelf.",
        dispatch_pause_tips: "Guests leave after 15 seconds. Wrong models keep the order active, but you lose rhythm and score.",
        hue_pause_title: "Hue Lab Pause",
        hue_pause_tutorial: "Adjust hue, saturation, and lightness, then confirm the mix. Use Next Target after a scored attempt.",
        hue_pause_tips: "Match hue first, then saturation, then lightness to keep the average score high.",
        dispatch_end_title: "Cafe round result",
        dispatch_end_score: "Round score",
        dispatch_end_cleared: "Orders cleared",
        dispatch_end_missed: "Guests missed",
        dispatch_play_again: "Play again",
        dispatch_back_world: "Back to world",
        dispatch_scene_prompt: "Move to a guest, lock the order, then click the correct colour model on the shelf.",
        print_eyebrow: "Mini-game 3",
        print_heading: "Poster Press",
        print_time_left: "Time Left",
        print_restart: "Restart Press",
        print_goal: "Posters Printed",
        print_failed: "Misprints",
        print_order_title: "Guest Brief",
        print_hint_uses: "Hint Uses",
        print_supply_title: "Supply Shelf",
        print_machine_title: "Press Machine",
        print_medium: "Medium",
        print_model: "Colour Model",
        print_output: "Output",
        print_lever: "Pull Press Lever",
        print_clear: "Clear Build",
        print_pause: "Pause",
        print_resume: "Resume",
        print_pause_title: "Poster Press Pause",
        print_pause_tutorial: "Build each job in order: medium, colour model, then output. Pull the press lever only when all three slots are ready.",
        print_pause_tips: "Follow the highlighted rack as your next step. Click a filled slot if you want to go back and rebuild.",
        print_scene_prompt: "Pick the correct medium, model, and output to complete the poster job.",
        print_end_title: "Poster Press result"
    };

    const chinesePatch = {
        nav_home: "首页",
        nav_learning: "学习",
        nav_game: "游戏",
        nav_test: "测试",
        nav_community: "社区",
        font_reset: "重置",
        sound_on: "声音开",
        sound_off: "声音关",
        crumb_game: "游戏",
        hero_title_short: "色彩广场",
        stat_points: "积分",
        stat_streak: "连击",
        stat_status: "状态",
        status_ready: "准备中",
        status_correct: "节奏很好",
        status_retry: "继续调整",
        mission_progress: "任务进度",
        panel_eyebrow: "任务列表",
        panel_title: "这个世界里的目标",
        panel_title_short: "任务板",
        task_model_visit: "到达 Chromatic Cafe",
        task_model_clear: "在一轮咖啡馆中完成足够订单",
        task_hue_clear: "在 Hue Lab 中完成高平均分",
        task_print_clear: "在 Poster Press 中完成更长的一轮订单",
        print_hint: "提示",
        print_hint_hide: "收起提示",
        task_gate_visit: "到达出口门查看其他页面",
        station_idle: "待机中",
        station_title_idle: "先靠近一个地点",
        station_text_idle: "使用 WASD 或方向键移动角色，也可以直接点击场景模块。",
        controls_title: "操作方式",
        controls_text: "使用 WASD / 方向键移动，靠近站点后按 Enter 进入。",
        link_learning: "前往 Learning 页面复习理论",
        link_test: "前往 Test 页面进行正式自测",
        link_community: "前往 Community 页面查看分享与排行",
        station_model: "Chromatic Cafe",
        station_hue: "Hue Lab",
        station_print: "Poster Press",
        station_gate: "出口门",
        prompt_idle: "靠近一个站点开始互动",
        prompt_plaza: "按 Enter 查看广场说明",
        prompt_quest: "按 Enter 打开任务板",
        prompt_model: "按 Enter 进入 Chromatic Cafe",
        prompt_hue: "按 Enter 进入 Hue Lab",
        prompt_print: "按 Enter 进入 Poster Press",
        prompt_gate: "按 Enter 打开出口门",
        active_plaza_type: "欢迎点",
        active_plaza_title: "色彩广场",
        active_plaza_text: "这里是整个游戏世界的起点，沿着路径去完成每个互动站点。",
        active_quest_type: "任务板",
        active_quest_title: "任务板",
        active_quest_text: "打开这里可以查看当前进度和你还没完成的学习目标。",
        active_model_type: "Cafe Floor",
        active_model_title: "Chromatic Cafe",
        active_model_text: "移动到客人面前锁定订单，然后点击货架上的正确颜色模型。",
        active_hue_type: "调色台",
        active_hue_title: "Hue Lab",
        active_hue_text: "像工作台一样调节色相、饱和度和明度，追求更高的平均分。",
        active_print_type: "Poster Press",
        active_print_title: "Poster Press",
        active_print_text: "按顺序完成印刷拼装：介质、颜色模型、输出方式。",
        active_gate_type: "出口门",
        active_gate_title: "出口门",
        active_gate_text: "完成当前游戏后，可以从这里跳转到 Learning、Test 和 Community。",
        match_eyebrow: "小游戏 1",
        match_heading: "Chromatic Cafe",
        hue_eyebrow: "小游戏 2",
        hue_heading: "Hue Lab 调色台",
        dispatch_score_label: "本局得分",
        dispatch_chain_label: "连击",
        dispatch_rating_label: "评级",
        hue_restart: "重开调色台",
        hue_goal_label: "完成目标",
        hue_average_label: "平均分",
        hue_recipe_eyebrow: "目标说明",
        target_label: "目标颜色",
        current_label: "当前颜色",
        meter_label: "匹配分数",
        slider_h: "色相",
        slider_s: "饱和度",
        slider_l: "明度",
        hue_check: "提交调色",
        hue_next: "下一目标",
        hue_reset: "重置调色",
        gate_eyebrow: "出口门",
        gate_heading: "选择下一个页面",
        time_left_label: "剩余时间",
        feedback_title: "游戏反馈",
        feedback_ready: "等待你的操作",
        feedback_correct: "答对了",
        feedback_retry: "继续尝试",
        dispatch_pause: "暂停",
        dispatch_resume: "继续",
        dispatch_selected_guest: "当前客人",
        dispatch_selected_model: "当前模型",
        dispatch_no_guest: "尚未选择客人",
        dispatch_no_model: "尚未选择模型",
        dispatch_pause_title: "咖啡馆暂停",
        dispatch_pause_tutorial: "用 A / D 或左右键移动到客人面前，按 E 或 Enter 锁定订单，再点击货架上正确的颜色模型。",
        dispatch_pause_tips: "每位客人会等待 15 秒。选错不会消失，但会影响节奏和分数。",
        hue_pause_title: "Hue Lab 暂停",
        hue_pause_tutorial: "调节色相、饱和度和明度后提交结果。每次得分后再进入下一个目标。",
        hue_pause_tips: "先尽量贴近目标色相，再微调饱和度和明度，这样平均分会更高。",
        dispatch_end_title: "咖啡馆结算",
        dispatch_end_score: "本局得分",
        dispatch_end_cleared: "完成订单",
        dispatch_end_missed: "错过客人",
        dispatch_play_again: "再玩一局",
        dispatch_back_world: "返回世界",
        dispatch_scene_prompt: "移动到客人面前锁定订单，再点击货架上的正确颜色模型。",
        print_eyebrow: "小游戏 3",
        print_heading: "Poster Press",
        print_time_left: "剩余时间",
        print_restart: "重开印刷台",
        print_goal: "完成海报",
        print_failed: "失败次数",
        print_order_title: "客人需求",
        print_hint_uses: "提示次数",
        print_supply_title: "素材架",
        print_machine_title: "印刷机",
        print_medium: "介质",
        print_model: "颜色模型",
        print_output: "输出方式",
        print_lever: "拉动印刷杆",
        print_clear: "清空拼装",
        print_pause: "暂停",
        print_resume: "继续",
        print_pause_title: "Poster Press 暂停",
        print_pause_tutorial: "每张订单按顺序完成：介质、颜色模型、输出方式。三项齐全后再拉动印刷杆。",
        print_pause_tips: "跟着高亮素材架一步步操作。点已经填入的槽位可以退回重选。",
        print_scene_prompt: "依次选择正确的介质、颜色模型和输出方式。",
        print_end_title: "Poster Press 结算"
    };

    Object.assign(gameCopy.en, englishPatch);
    Object.assign(gameCopy.zh, chinesePatch);

    if (!("printClear" in tasks)) {
        tasks.printClear = false;
    }

    stations.print = {
        key: "print",
        radius: 126,
        promptKey: "prompt_print",
        badgeKey: "active_print_type",
        titleKey: "active_print_title",
        textKey: "active_print_text"
    };

    function getLang() {
        return worldState.language === "zh" ? "zh" : "en";
    }

    function getCopy(record) {
        return record[getLang()] || record.en;
    }

    function ensureAudioContext() {
        const AudioContextRef = window.AudioContext || window.webkitAudioContext;
        if (!AudioContextRef) {
            return null;
        }
        if (!audioState.context) {
            const context = new AudioContextRef();
            const masterGain = context.createGain();
            const bgmGain = context.createGain();
            const sfxGain = context.createGain();

            masterGain.gain.value = 0.22;
            bgmGain.gain.value = 0.18;
            sfxGain.gain.value = 0.34;

            bgmGain.connect(masterGain);
            sfxGain.connect(masterGain);
            masterGain.connect(context.destination);

            audioState.context = context;
            audioState.masterGain = masterGain;
            audioState.bgmGain = bgmGain;
            audioState.sfxGain = sfxGain;
        }
        return audioState.context;
    }

    function beep({ time, frequency, duration = 0.12, type = "triangle", gain = 0.08, target = "sfx" }) {
        const context = ensureAudioContext();
        if (!context) {
            return;
        }
        const oscillator = context.createOscillator();
        const gainNode = context.createGain();
        oscillator.type = type;
        oscillator.frequency.setValueAtTime(frequency, time);
        gainNode.gain.setValueAtTime(0.0001, time);
        gainNode.gain.linearRampToValueAtTime(gain, time + 0.02);
        gainNode.gain.exponentialRampToValueAtTime(0.0001, time + duration);
        oscillator.connect(gainNode);
        gainNode.connect(target === "bgm" ? audioState.bgmGain : audioState.sfxGain);
        oscillator.start(time);
        oscillator.stop(time + duration + 0.02);
    }

    function unlockAudio() {
        const context = ensureAudioContext();
        if (!context) {
            return;
        }
        if (context.state === "suspended") {
            context.resume().catch(() => {});
        }
        audioState.unlocked = true;
        syncAudioState();
    }

    function scheduleCafeBgm() {
        const context = ensureAudioContext();
        if (!context || !audioState.unlocked || !worldState.soundEnabled) {
            return;
        }
        const melody = [659, 784, 880, 784, 698, 784, 988, 784];
        const bass = [220, 220, 196, 196, 247, 247, 196, 196];
        const bell = [1318, 0, 1174, 0, 1046, 0, 1174, 0];
        const step = 0.32;
        const horizon = context.currentTime + 1.4;

        if (!audioState.nextBeatTime || audioState.nextBeatTime < context.currentTime) {
            audioState.nextBeatTime = context.currentTime + 0.05;
        }

        while (audioState.nextBeatTime < horizon) {
            const i = audioState.beatIndex % melody.length;
            beep({ time: audioState.nextBeatTime, frequency: melody[i], duration: 0.18, type: "triangle", gain: 0.06, target: "bgm" });
            beep({ time: audioState.nextBeatTime, frequency: bass[i], duration: 0.24, type: "sine", gain: 0.04, target: "bgm" });
            if (bell[i]) {
                beep({ time: audioState.nextBeatTime + 0.02, frequency: bell[i], duration: 0.1, type: "square", gain: 0.03, target: "bgm" });
            }
            audioState.nextBeatTime += step;
            audioState.beatIndex += 1;
        }
    }

    function startBgmLoop() {
        if (audioState.loopTimer || !audioState.unlocked || !worldState.soundEnabled) {
            return;
        }
        const context = ensureAudioContext();
        if (!context) {
            return;
        }
        audioState.nextBeatTime = context.currentTime + 0.08;
        audioState.beatIndex = 0;
        scheduleCafeBgm();
        audioState.loopTimer = window.setInterval(scheduleCafeBgm, 320);
    }

    function stopBgmLoop() {
        if (audioState.loopTimer) {
            clearInterval(audioState.loopTimer);
            audioState.loopTimer = null;
        }
        audioState.nextBeatTime = 0;
        audioState.beatIndex = 0;
    }

    function syncAudioState() {
        const context = ensureAudioContext();
        if (!context) {
            return;
        }
        if (!worldState.soundEnabled) {
            stopBgmLoop();
            return;
        }
        if (audioState.unlocked) {
            startBgmLoop();
        }
    }

    function playUiClickSound() {
        if (!worldState.soundEnabled) {
            return;
        }
        const context = ensureAudioContext();
        if (!context || !audioState.unlocked) {
            return;
        }
        const now = context.currentTime;
        beep({ time: now, frequency: 740, duration: 0.06, type: "triangle", gain: 0.05 });
        beep({ time: now + 0.03, frequency: 988, duration: 0.05, type: "sine", gain: 0.03 });
    }

    playFeedbackTone = function upgradedFeedbackTone(frequency) {
        if (!worldState.soundEnabled) {
            return;
        }
        const context = ensureAudioContext();
        if (!context || !audioState.unlocked) {
            return;
        }
        const now = context.currentTime;
        beep({ time: now, frequency, duration: 0.11, type: "triangle", gain: 0.07 });
        beep({ time: now + 0.04, frequency: frequency * 1.5, duration: 0.08, type: "sine", gain: 0.04 });
    };

    function safeRating(score, mode) {
        if (mode === "cafe") {
            if (score >= 130) return "S";
            if (score >= 95) return "A";
            if (score >= 65) return "B";
            return "C";
        }
        if (score >= 85) return "S";
        if (score >= 65) return "A";
        if (score >= 45) return "B";
        return "C";
    }

    function ensurePrintStation() {
        if (document.getElementById("station-print")) {
            return;
        }
        const world = document.getElementById("world");
        const gate = document.getElementById("station-gate");
        const button = document.createElement("button");
        button.className = "cg-station cg-station-print";
        button.id = "station-print";
        button.dataset.station = "print";
        button.innerHTML = `
            <span class="cg-station-art cg-station-art-print-base"></span>
            <span class="cg-station-art cg-station-art-print-bed"></span>
            <span class="cg-station-art cg-station-art-print-sheet"></span>
            <span class="cg-station-art cg-station-art-print-roller"></span>
            <span class="cg-station-art cg-station-art-print-ink cg-station-art-print-ink-a"></span>
            <span class="cg-station-art cg-station-art-print-ink cg-station-art-print-ink-b"></span>
            <span class="cg-station-art cg-station-art-print-ink cg-station-art-print-ink-c"></span>
            <span class="cg-station-label" data-i18n="station_print">Poster Press</span>
        `;
        world.insertBefore(button, gate);
    }

    function ensurePrintTask() {
        if (document.getElementById("task-print-clear")) {
            return;
        }
        const list = document.querySelector(".cg-task-list");
        const item = document.createElement("li");
        item.className = "cg-task";
        item.id = "task-print-clear";
        item.innerHTML = `
            <span class="cg-task-dot"></span>
            <span data-i18n="task_print_clear">Complete enough poster jobs in Poster Press</span>
        `;
        const gateItem = document.getElementById("task-gate-visit");
        list.insertBefore(item, gateItem);
    }

    function buildCafeModal() {
        const modal = document.getElementById("modal-model");
        modal.innerHTML = `
            <div class="cg-modal-backdrop" data-close-modal></div>
            <div class="cg-modal-panel">
                <button class="cg-modal-close" type="button" data-close-modal aria-label="Close">×</button>
                <section class="cg-cafe-sim">
                    <div class="cg-cafe-stage">
                        <div class="cg-cafe-backdrop">
                            <div class="cg-cafe-canopy"></div>
                            <div class="cg-cafe-water"></div>
                            <div class="cg-cafe-island cg-cafe-island-a"></div>
                            <div class="cg-cafe-island cg-cafe-island-b"></div>
                        </div>

                        <div class="cg-cafe-topbar">
                            <article class="cg-cafe-top-pill">
                                <span data-i18n="time_left_label">Time Left</span>
                                <strong id="cafe-time-text">95s</strong>
                            </article>
                            <article class="cg-cafe-top-pill">
                                <span data-i18n="dispatch_end_cleared">Orders Cleared</span>
                                <strong id="cafe-cleared-text">0 / 10</strong>
                            </article>
                            <article class="cg-cafe-top-pill">
                                <span data-i18n="dispatch_end_score">Round Score</span>
                                <strong id="cafe-score-text">0</strong>
                            </article>
                            <article class="cg-cafe-top-pill">
                                <span data-i18n="dispatch_chain_label">Chain</span>
                                <strong id="cafe-chain-text">0</strong>
                            </article>
                            <article class="cg-cafe-top-pill">
                                <span data-i18n="dispatch_rating_label">Rating</span>
                                <strong id="cafe-rating-text">C</strong>
                            </article>
                            <article class="cg-cafe-top-pill">
                                <span data-i18n="dispatch_end_missed">Guests Missed</span>
                                <strong id="cafe-missed-text">0</strong>
                            </article>
                            <button class="cg-button cg-button-secondary cg-cafe-pause-button" type="button" id="cafe-pause-button" data-i18n="dispatch_pause">Pause</button>
                        </div>

                        <div class="cg-cafe-shelf">
                            <div class="cg-cafe-rack">
                                <div class="cg-cafe-decor-bottle-row" aria-hidden="true">
                                    <span class="cg-cafe-decor-bottle is-pink"></span>
                                    <span class="cg-cafe-decor-bottle is-blue"></span>
                                    <span class="cg-cafe-decor-bottle is-mint"></span>
                                    <span class="cg-cafe-decor-bottle is-yellow"></span>
                                    <span class="cg-cafe-decor-bottle is-blue"></span>
                                    <span class="cg-cafe-decor-bottle is-pink"></span>
                                    <span class="cg-cafe-decor-bottle is-mint"></span>
                                    <span class="cg-cafe-decor-bottle is-yellow"></span>
                                </div>
                            </div>
                        </div>

                        <div class="cg-cafe-shelf-ui">
                            <div class="cg-cafe-answer-buttons cg-cafe-answer-buttons-shelf" id="cafe-answer-buttons"></div>
                        </div>

                        <div class="cg-cafe-counter">
                            <div class="cg-cafe-seat-grid" id="cafe-seat-grid"></div>
                        </div>
                        <div class="cg-cafe-floor"></div>

                        <div class="cg-cafe-player" id="cafe-player" aria-hidden="true">
                            <span class="cg-cafe-player-shadow"></span>
                            <span class="cg-cafe-player-head"></span>
                            <span class="cg-cafe-player-body"></span>
                            <span class="cg-cafe-player-apron"></span>
                        </div>

                        <div class="cg-cafe-service-strip">
                            <div class="cg-cafe-service-card">
                                <span data-i18n="dispatch_selected_guest">Current guest</span>
                                <strong id="cafe-current-guest">No guest selected</strong>
                            </div>
                            <div class="cg-cafe-service-card">
                                <span data-i18n="dispatch_selected_model">Selected model</span>
                                <strong id="cafe-current-model">No model selected</strong>
                            </div>
                            <div class="cg-cafe-scene-prompt-inline" id="cafe-scene-prompt" data-i18n="dispatch_scene_prompt">
                                Move to a guest, lock the order, then click the correct colour model on the shelf.
                            </div>
                        </div>

                        <div class="cg-cafe-overlay" id="cafe-overlay">
                            <div class="cg-cafe-overlay-card" id="cafe-overlay-card"></div>
                        </div>
                    </div>
                </section>
            </div>
        `;
    }

    function buildPrintModal() {
        if (document.getElementById("modal-print")) {
            return;
        }
        const modal = document.createElement("div");
        modal.className = "cg-modal";
        modal.id = "modal-print";
        modal.setAttribute("aria-hidden", "true");
        modal.innerHTML = `
            <div class="cg-modal-backdrop" data-close-modal></div>
            <div class="cg-modal-panel cg-print-modal-panel">
                <button class="cg-modal-close" type="button" data-close-modal aria-label="Close">×</button>
                <div class="cg-modal-header">
                    <div>
                        <p class="cg-eyebrow" data-i18n="print_eyebrow">Mini-game 3</p>
                        <h2 data-i18n="print_heading">Poster Press</h2>
                    </div>
                <div class="cg-inline-actions">
                    <div class="cg-round-pill">
                        <span data-i18n="print_time_left">Time Left</span>
                        <strong id="print-time-text">85s</strong>
                    </div>
                    <button class="cg-button cg-button-secondary" type="button" id="print-pause-button" data-i18n="dispatch_pause">Pause</button>
                    <button class="cg-button cg-button-secondary" type="button" id="print-restart-button" data-i18n="print_restart">Restart Press</button>
                </div>
            </div>
                <div class="cg-print-shop">
                    <section class="cg-print-order-board">
                        <div class="cg-panel-heading">
                            <p class="cg-eyebrow" data-i18n="print_order_title">Guest Brief</p>
                            <h3 id="print-order-title">Poster Print</h3>
                        </div>
                        <div class="cg-inline-actions cg-print-order-actions">
                            <button class="cg-button cg-button-secondary" type="button" id="print-hint-button" data-i18n="print_hint">Hint</button>
                            <div class="cg-print-hint-count">
                                <span data-i18n="print_hint_uses">Hint Uses</span>
                                <strong id="print-hint-count">0</strong>
                            </div>
                        </div>
                        <p class="cg-brief-line" id="print-order-clue"></p>
                        <div class="cg-print-hint-flow" id="print-order-hint" hidden></div>
                        <div class="cg-mini-stats">
                            <article class="cg-mini-stat">
                                <span data-i18n="print_goal">Posters Printed</span>
                                <strong id="print-progress-text">0 / 4</strong>
                            </article>
                            <article class="cg-mini-stat">
                                <span data-i18n="dispatch_score_label">Round Score</span>
                                <strong id="print-score-text">0</strong>
                            </article>
                            <article class="cg-mini-stat">
                                <span data-i18n="print_failed">Misprints</span>
                                <strong id="print-failed-text">0</strong>
                            </article>
                        </div>
                    </section>
                    <section class="cg-print-workshop">
                        <div class="cg-print-workshop-window">
                            <div class="cg-print-workshop-top">
                                <div class="cg-print-step-card">
                                    <span class="cg-print-step-tag" id="print-step-tag">Step 1</span>
                                    <strong id="print-step-title">Medium</strong>
                                    <p class="cg-brief-line" id="print-step-copy">Choose the correct medium first.</p>
                                </div>
                            </div>
                            <div class="cg-print-machine-state" id="print-machine-state" data-i18n="print_scene_prompt">
                                Pick the correct medium, model, and output to complete the poster job.
                            </div>
                            <div class="cg-print-racks">
                                <section class="cg-print-rack" id="print-rack-medium">
                                    <h4 data-i18n="print_medium">Medium</h4>
                                    <div class="cg-print-rack-grid" id="print-medium-grid"></div>
                                </section>
                                <section class="cg-print-rack" id="print-rack-model">
                                    <h4 data-i18n="print_model">Colour Model</h4>
                                    <div class="cg-print-rack-grid" id="print-model-grid"></div>
                                </section>
                                <section class="cg-print-rack" id="print-rack-output">
                                    <h4 data-i18n="print_output">Output</h4>
                                    <div class="cg-print-rack-grid" id="print-output-grid"></div>
                                </section>
                            </div>
                        </div>
                        <div class="cg-print-machine-card">
                            <div class="cg-panel-heading">
                                <p class="cg-eyebrow" data-i18n="print_machine_title">Press Machine</p>
                                <h3 id="print-machine-title">Medium</h3>
                            </div>
                            <div class="cg-print-press-bed">
                                <div class="cg-print-slot" id="print-slot-medium">
                                    <span data-i18n="print_medium">Medium</span>
                                    <strong id="print-slot-medium-text">-</strong>
                                </div>
                                <div class="cg-print-slot" id="print-slot-model">
                                    <span data-i18n="print_model">Colour Model</span>
                                    <strong id="print-slot-model-text">-</strong>
                                </div>
                                <div class="cg-print-slot" id="print-slot-output">
                                    <span data-i18n="print_output">Output</span>
                                    <strong id="print-slot-output-text">-</strong>
                                </div>
                            </div>
                            <div class="cg-print-preview" id="print-preview">
                                <div class="cg-print-preview-sheet" id="print-preview-sheet"></div>
                                <span class="cg-print-preview-badge" id="print-preview-badge">-</span>
                            </div>
                            <div class="cg-print-machine-actions">
                                <button class="cg-button cg-button-primary cg-print-lever" type="button" id="print-lever-button" data-i18n="print_lever">Pull Press Lever</button>
                                <button class="cg-button cg-button-secondary" type="button" id="print-clear-button" data-i18n="print_clear">Clear Build</button>
                            </div>
                        </div>
                    </section>
                </div>
                <div class="cg-print-reward-toast" id="print-reward-toast" aria-hidden="true">
                    <div class="cg-print-reward-card" id="print-reward-card">
                        <div class="cg-feedback-avatar cg-print-feedback-avatar cg-print-reward-avatar" id="print-reward-avatar" data-state="ready">
                            <span class="cg-avatar-hair"></span>
                            <span class="cg-avatar-face">
                                <span class="cg-avatar-eye cg-avatar-eye-left"></span>
                                <span class="cg-avatar-eye cg-avatar-eye-right"></span>
                                <span class="cg-avatar-mouth"></span>
                                <span class="cg-avatar-blush cg-avatar-blush-left"></span>
                                <span class="cg-avatar-blush cg-avatar-blush-right"></span>
                            </span>
                            <span class="cg-avatar-body"></span>
                            <span class="cg-avatar-arm cg-avatar-arm-left"></span>
                            <span class="cg-avatar-arm cg-avatar-arm-right"></span>
                        </div>
                        <div class="cg-print-reward-copy">
                            <span class="cg-feedback-status" id="print-reward-status">Reward</span>
                            <h3 id="print-reward-title">Guest reaction</h3>
                            <p id="print-reward-text"></p>
                        </div>
                        <div class="cg-print-reward-art-shell">
                            <img class="cg-print-reward-art" id="print-reward-art" alt="Printed product reward">
                        </div>
                    </div>
                </div>
                <div class="cg-cafe-overlay" id="print-overlay">
                    <div class="cg-cafe-overlay-card" id="print-overlay-card"></div>
                </div>
            </div>
        `;
        document.body.appendChild(modal);
    }

    function ensureDom() {
        ensurePrintStation();
        ensurePrintTask();
        buildCafeModal();
        buildPrintModal();

        elements.stationButtons = document.querySelectorAll("[data-station]");
        elements.modals = document.querySelectorAll(".cg-modal");
        elements.modalModel = document.getElementById("modal-model");
        elements.modalPrint = document.getElementById("modal-print");
        elements.taskPrintClear = document.getElementById("task-print-clear");

        document.querySelectorAll(".cg-modal-close").forEach((button) => {
            button.textContent = "×";
        });
        const zhButton = document.querySelector('[data-language="zh"]');
        if (zhButton) {
            zhButton.textContent = "中文";
        }

        ui.cafeModal = document.getElementById("modal-model");
        ui.cafeSeatGrid = document.getElementById("cafe-seat-grid");
        ui.cafeAnswerButtons = document.getElementById("cafe-answer-buttons");
        ui.cafePlayer = document.getElementById("cafe-player");
        ui.cafeTime = document.getElementById("cafe-time-text");
        ui.cafeCleared = document.getElementById("cafe-cleared-text");
        ui.cafeScore = document.getElementById("cafe-score-text");
        ui.cafeChain = document.getElementById("cafe-chain-text");
        ui.cafeRating = document.getElementById("cafe-rating-text");
        ui.cafeMissed = document.getElementById("cafe-missed-text");
        ui.cafeCurrentGuest = document.getElementById("cafe-current-guest");
        ui.cafeCurrentModel = document.getElementById("cafe-current-model");
        ui.cafePrompt = document.getElementById("cafe-scene-prompt");
        ui.cafePauseButton = document.getElementById("cafe-pause-button");
        ui.cafeOverlay = document.getElementById("cafe-overlay");
        ui.cafeOverlayCard = document.getElementById("cafe-overlay-card");

        ui.printModal = document.getElementById("modal-print");
        ui.printTime = document.getElementById("print-time-text");
        ui.printProgress = document.getElementById("print-progress-text");
        ui.printScore = document.getElementById("print-score-text");
        ui.printFailed = document.getElementById("print-failed-text");
        ui.printOrderTitle = document.getElementById("print-order-title");
        ui.printOrderClue = document.getElementById("print-order-clue");
        ui.printOrderHint = document.getElementById("print-order-hint");
        ui.printHintButton = document.getElementById("print-hint-button");
        ui.printHintCount = document.getElementById("print-hint-count");
        ui.printFeedbackAvatar = document.getElementById("print-feedback-avatar");
        ui.printFeedbackStatus = document.getElementById("print-feedback-status");
        ui.printFeedbackText = document.getElementById("print-feedback-text");
        ui.printFeedbackArt = document.getElementById("print-feedback-art");
        ui.printRewardToast = document.getElementById("print-reward-toast");
        ui.printRewardAvatar = document.getElementById("print-reward-avatar");
        ui.printRewardStatus = document.getElementById("print-reward-status");
        ui.printRewardTitle = document.getElementById("print-reward-title");
        ui.printRewardText = document.getElementById("print-reward-text");
        ui.printRewardArt = document.getElementById("print-reward-art");
        ui.printMachineState = document.getElementById("print-machine-state");
        ui.printStepTag = document.getElementById("print-step-tag");
        ui.printStepTitle = document.getElementById("print-step-title");
        ui.printStepCopy = document.getElementById("print-step-copy");
        ui.printMachineTitle = document.getElementById("print-machine-title");
        ui.printRackMedium = document.getElementById("print-rack-medium");
        ui.printRackModel = document.getElementById("print-rack-model");
        ui.printRackOutput = document.getElementById("print-rack-output");
        ui.printMediumGrid = document.getElementById("print-medium-grid");
        ui.printModelGrid = document.getElementById("print-model-grid");
        ui.printOutputGrid = document.getElementById("print-output-grid");
        ui.printSlotMedium = document.getElementById("print-slot-medium");
        ui.printSlotModel = document.getElementById("print-slot-model");
        ui.printSlotOutput = document.getElementById("print-slot-output");
        ui.printSlotMediumText = document.getElementById("print-slot-medium-text");
        ui.printSlotModelText = document.getElementById("print-slot-model-text");
        ui.printSlotOutputText = document.getElementById("print-slot-output-text");
        ui.printPreview = document.getElementById("print-preview");
        ui.printPreviewBadge = document.getElementById("print-preview-badge");
        ui.printLever = document.getElementById("print-lever-button");
        ui.printClear = document.getElementById("print-clear-button");
        ui.printRestart = document.getElementById("print-restart-button");
        ui.printPauseButton = document.getElementById("print-pause-button");
        ui.printOverlay = document.getElementById("print-overlay");
        ui.printOverlayCard = document.getElementById("print-overlay-card");

        ui.huePauseButton = document.getElementById("hue-pause-button");
        ui.hueOverlay = document.getElementById("hue-overlay");
        ui.hueOverlayCard = document.getElementById("hue-overlay-card");
    }

    function pauseCafe() {
        if (!cafeState.running || cafeState.ended) {
            return;
        }
        cafeState.paused = true;
        ui.cafeOverlay.classList.add("is-visible");
        ui.cafeOverlayCard.innerHTML = `
            <h3>${t("dispatch_pause_title")}</h3>
            <details class="cg-cafe-details" open>
                <summary>${t("controls_title")}</summary>
                <p>${t("dispatch_pause_tutorial")}</p>
            </details>
            <details class="cg-cafe-details" open>
                <summary>${t("feedback_title")}</summary>
                <p>${t("dispatch_pause_tips")}</p>
            </details>
            <div class="cg-cafe-end-actions">
                <button class="cg-button cg-button-primary" type="button" id="cafe-resume-button">${t("dispatch_resume")}</button>
                <button class="cg-button cg-button-secondary" type="button" id="cafe-restart-button">${t("dispatch_play_again")}</button>
            </div>
        `;
        document.getElementById("cafe-resume-button").addEventListener("click", resumeCafe);
        document.getElementById("cafe-restart-button").addEventListener("click", startCafeRound);
    }

    function resumeCafe() {
        cafeState.paused = false;
        ui.cafeOverlay.classList.remove("is-visible");
    }

    function hideUpgradeOverlays() {
        [ui.cafeOverlay, ui.hueOverlay, ui.printOverlay].forEach((node) => {
            if (node) {
                node.classList.remove("is-visible");
            }
        });
    }

    function beginHueTick() {
        if (workbenchState.tickHandle) {
            clearInterval(workbenchState.tickHandle);
        }
        workbenchState.tickHandle = setInterval(() => {
            if (!workbenchState.running || workbenchState.paused) {
                return;
            }
            workbenchState.timeLeft -= 1;
            if (workbenchState.timeLeft <= 0 || workbenchState.submissions >= workbenchState.targetGoal) {
                finishWorkbenchRound();
            } else {
                renderWorkbench();
            }
        }, 1000);
    }

    function renderHuePauseState() {
        if (ui.huePauseButton) {
            ui.huePauseButton.textContent = workbenchState.paused ? t("dispatch_resume") : t("dispatch_pause");
        }
    }

    function pauseHue() {
        if (!workbenchState.running) {
            return;
        }
        workbenchState.paused = true;
        if (workbenchState.tickHandle) {
            clearInterval(workbenchState.tickHandle);
            workbenchState.tickHandle = null;
        }
        renderHuePauseState();
        if (!ui.hueOverlay || !ui.hueOverlayCard) {
            return;
        }
        ui.hueOverlay.classList.add("is-visible");
        ui.hueOverlayCard.innerHTML = `
            <h3>${t("hue_pause_title")}</h3>
            <details class="cg-cafe-details" open>
                <summary>${t("controls_title")}</summary>
                <p>${t("hue_pause_tutorial")}</p>
            </details>
            <details class="cg-cafe-details" open>
                <summary>${t("feedback_title")}</summary>
                <p>${t("hue_pause_tips")}</p>
            </details>
            <div class="cg-cafe-end-actions">
                <button class="cg-button cg-button-primary" type="button" id="hue-resume-button">${t("dispatch_resume")}</button>
                <button class="cg-button cg-button-secondary" type="button" id="hue-restart-button">${t("dispatch_play_again")}</button>
            </div>
        `;
        document.getElementById("hue-resume-button")?.addEventListener("click", resumeHue);
        document.getElementById("hue-restart-button")?.addEventListener("click", () => {
            resumeHue();
            baseStartWorkbenchRound();
            workbenchState.paused = false;
            beginHueTick();
            renderHuePauseState();
        });
    }

    function resumeHue() {
        if (!workbenchState.running) {
            return;
        }
        workbenchState.paused = false;
        ui.hueOverlay?.classList.remove("is-visible");
        beginHueTick();
        renderHuePauseState();
    }

    function renderPrintPauseState() {
        if (ui.printPauseButton) {
            ui.printPauseButton.textContent = printState.paused ? t("dispatch_resume") : t("dispatch_pause");
        }
    }

    function hidePrintRewardToast() {
        if (printState.rewardTimer) {
            clearTimeout(printState.rewardTimer);
            printState.rewardTimer = null;
        }
        if (ui.printRewardToast) {
            ui.printRewardToast.classList.remove("is-visible");
            ui.printRewardToast.setAttribute("aria-hidden", "true");
        }
    }

    function showPrintRewardToast(kind, order, copy) {
        if (!ui.printRewardToast || !ui.printRewardAvatar || !ui.printRewardStatus || !ui.printRewardTitle || !ui.printRewardText || !ui.printRewardArt) {
            return;
        }
        hidePrintRewardToast();
        const success = kind === "correct";
        const hintUses = printState.currentOrderHintUses;
        ui.printRewardToast.classList.add("is-visible");
        ui.printRewardToast.setAttribute("aria-hidden", "false");
        ui.printRewardAvatar.dataset.state = success ? "correct" : "wrong";
        ui.printRewardStatus.textContent = success
            ? (hintUses === 0
                ? (getLang() === "zh" ? "零提示完成" : "No-Hint Clear")
                : hintUses === 1
                    ? (getLang() === "zh" ? "轻提示完成" : "Lightly Guided")
                    : (getLang() === "zh" ? `使用 ${hintUses} 次提示` : `${hintUses} hints used`))
            : (hintUses === 0
                ? (getLang() === "zh" ? "无提示失败" : "Missed Without Hints")
                : (getLang() === "zh" ? `提示 ${hintUses} 次后仍失败` : `Still missed after ${hintUses} hints`));
        ui.printRewardTitle.textContent = success
            ? (getLang() === "zh" ? "成品完成" : "Product delivered")
            : (getLang() === "zh" ? "订单被退回" : "Order rejected");
        ui.printRewardText.textContent = copy;
        ui.printRewardArt.src = success && order?.art ? order.art : "";
        ui.printRewardArt.style.display = success && order?.art ? "block" : "none";
        printState.rewardTimer = setTimeout(() => {
            hidePrintRewardToast();
        }, 2200);
    }

    function pausePrint() {
        if (!printState.running || printState.ended) {
            return;
        }
        printState.paused = true;
        renderPrintPauseState();
        if (!ui.printOverlay || !ui.printOverlayCard) {
            return;
        }
        ui.printOverlay.classList.add("is-visible");
        ui.printOverlayCard.innerHTML = `
            <h3>${t("print_pause_title")}</h3>
            <details class="cg-cafe-details" open>
                <summary>${t("controls_title")}</summary>
                <p>${t("print_pause_tutorial")}</p>
            </details>
            <details class="cg-cafe-details" open>
                <summary>${t("feedback_title")}</summary>
                <p>${t("print_pause_tips")}</p>
            </details>
            <div class="cg-cafe-end-actions">
                <button class="cg-button cg-button-primary" type="button" id="print-resume-button">${t("dispatch_resume")}</button>
                <button class="cg-button cg-button-secondary" type="button" id="print-restart-overlay-button">${t("dispatch_play_again")}</button>
            </div>
        `;
        document.getElementById("print-resume-button")?.addEventListener("click", resumePrint);
        document.getElementById("print-restart-overlay-button")?.addEventListener("click", () => {
            resumePrint();
            startPrintRound();
        });
    }

    function resumePrint() {
        printState.paused = false;
        ui.printOverlay?.classList.remove("is-visible");
        renderPrintPauseState();
        renderPrintStudio();
    }

    function finishCafeRound() {
        cafeState.running = false;
        cafeState.ended = true;
        if (cafeState.tickHandle) {
            clearInterval(cafeState.tickHandle);
            cafeState.tickHandle = null;
        }
        tasks.modelClear = cafeState.completed >= 6;
        updateMissionProgress();
        ui.cafeOverlay.classList.add("is-visible");
        ui.cafeOverlayCard.innerHTML = `
            <h3>${t("dispatch_end_title")}</h3>
            <div class="cg-cafe-end-grid">
                <article class="cg-cafe-end-pill">
                    <span>${t("dispatch_end_score")}</span>
                    <strong>${cafeState.score}</strong>
                </article>
                <article class="cg-cafe-end-pill">
                    <span>${t("dispatch_end_cleared")}</span>
                    <strong>${cafeState.completed}</strong>
                </article>
                <article class="cg-cafe-end-pill">
                    <span>${t("dispatch_end_missed")}</span>
                    <strong>${cafeState.missed}</strong>
                </article>
            </div>
            <p class="cg-cafe-scene-help">${cafeState.completed >= 6 ? t("feedback_correct") : t("feedback_retry")}</p>
            <div class="cg-cafe-end-actions">
                <button class="cg-button cg-button-primary" type="button" id="cafe-play-again">${t("dispatch_play_again")}</button>
                <button class="cg-button cg-button-secondary" type="button" id="cafe-back-world">${t("dispatch_back_world")}</button>
            </div>
        `;
        document.getElementById("cafe-play-again").addEventListener("click", startCafeRound);
        document.getElementById("cafe-back-world").addEventListener("click", closeModal);
    }

    function fillCafeSeats() {
        for (let slot = 0; slot < lanePercents.length; slot += 1) {
            if (!cafeState.guests.some((guest) => guest.slot === slot)) {
                const template = cafeTemplates[Math.floor(Math.random() * cafeTemplates.length)];
                cafeState.guests.push({
                    id: cafeState.nextGuestId++,
                    slot,
                    timeLeft: 15,
                    maxTime: 15,
                    scenarioType: template.scenarioType,
                    label: template.label,
                    hint: template.hint,
                    correctModel: template.correctModel,
                    feedback: template.feedback
                });
            }
        }
    }

    function setCafePrompt(text) {
        cafeState.prompt = text;
        if (ui.cafePrompt) {
            ui.cafePrompt.textContent = text;
        }
    }

    function startCafeRound() {
        if (cafeState.tickHandle) {
            clearInterval(cafeState.tickHandle);
        }
        cafeState.running = true;
        cafeState.paused = false;
        cafeState.ended = false;
        cafeState.timeLeft = cafeState.duration;
        cafeState.score = 0;
        cafeState.streak = 0;
        cafeState.completed = 0;
        cafeState.missed = 0;
        cafeState.guests = [];
        cafeState.nextGuestId = 1;
        cafeState.selectedGuestId = null;
        cafeState.selectedModel = null;
        cafeState.playerLane = 1;
        fillCafeSeats();
        setCafePrompt(t("dispatch_scene_prompt"));
        ui.cafeOverlay.classList.remove("is-visible");
        renderCafeScene();
        cafeState.tickHandle = setInterval(() => {
            if (!cafeState.running || cafeState.paused) {
                return;
            }
            cafeState.timeLeft = Math.max(0, cafeState.timeLeft - 0.2);
            cafeState.guests.forEach((guest) => {
                guest.timeLeft = Math.max(0, guest.timeLeft - 0.2);
            });
            const expiredIds = cafeState.guests.filter((guest) => guest.timeLeft <= 0).map((guest) => guest.id);
            if (expiredIds.length) {
                cafeState.guests = cafeState.guests.filter((guest) => !expiredIds.includes(guest.id));
                if (expiredIds.includes(cafeState.selectedGuestId)) {
                    cafeState.selectedGuestId = null;
                }
                cafeState.missed += expiredIds.length;
                cafeState.streak = 0;
                updateGlobalScore(0, "reset", "status_retry");
                playFeedbackTone(240);
                fillCafeSeats();
            }
            if (cafeState.timeLeft <= 0 || cafeState.completed >= cafeState.target) {
                finishCafeRound();
            } else {
                renderCafeScene();
            }
        }, 200);
    }

    function stopCafeRound() {
        cafeState.running = false;
        cafeState.paused = false;
        if (cafeState.tickHandle) {
            clearInterval(cafeState.tickHandle);
            cafeState.tickHandle = null;
        }
        if (ui.cafeOverlay) {
            ui.cafeOverlay.classList.remove("is-visible");
        }
    }

    function selectCafeGuest(slot, force = false) {
        const guest = cafeState.guests.find((item) => item.slot === slot);
        if (!guest) {
            return;
        }
        if (!force && slot !== cafeState.playerLane) {
            setCafePrompt(getLang() === "zh" ? "先移动到这位客人面前，再按 E 或 Enter 接单。" : "Move to this guest first, then press E or Enter.");
            return;
        }
        cafeState.playerLane = slot;
        cafeState.selectedGuestId = guest.id;
        setCafePrompt(getLang() === "zh" ? `已锁定 ${guest.label.zh}，现在点击正确的颜色模型。` : `Order locked: ${guest.label.en}. Now click the matching colour model.`);
        renderCafeScene();
    }

    function chooseCafeModel(modelKey) {
        if (!cafeState.running || cafeState.paused || cafeState.ended) {
            return;
        }
        cafeState.selectedModel = modelKey;
        const guest = cafeState.guests.find((item) => item.id === cafeState.selectedGuestId);
        if (!guest) {
            setCafePrompt(getLang() === "zh" ? "先锁定一位客人的订单，再选择颜色模型。" : "Lock a guest order first, then choose a colour model.");
            renderCafeScene();
            return;
        }
        if (guest.correctModel === modelKey) {
            cafeState.score += 12 + Math.min(cafeState.streak, 4) * 2;
            cafeState.streak += 1;
            cafeState.completed += 1;
            tasks.modelVisit = true;
            if (cafeState.completed >= 6) {
                tasks.modelClear = true;
            }
            updateMissionProgress();
            updateGlobalScore(8, "up", "status_correct");
            playFeedbackTone(620);
            setCafePrompt(guest.feedback[getLang()]);
            cafeState.guests = cafeState.guests.filter((item) => item.id !== guest.id);
            cafeState.selectedGuestId = null;
            fillCafeSeats();
        } else {
            cafeState.score = Math.max(0, cafeState.score - 3);
            cafeState.streak = 0;
            updateGlobalScore(-1, "reset", "status_retry");
            playFeedbackTone(260);
            setCafePrompt(getLang() === "zh" ? `${modelKey} 不适合 ${guest.label.zh}。再试一次。` : `${modelKey} does not fit ${guest.label.en}. Try again.`);
        }
        renderCafeScene();
    }

    function moveCafeLane(direction) {
        if (!cafeState.running || cafeState.paused || cafeState.ended) {
            return;
        }
        cafeState.playerLane = clamp(cafeState.playerLane + direction, 0, lanePercents.length - 1);
        renderCafeScene();
    }

    function renderCafeAnswers() {
        ui.cafeAnswerButtons.innerHTML = "";
        modelTokens.forEach((token) => {
            const button = document.createElement("button");
            button.type = "button";
            button.className = `cg-cafe-answer-button is-${token.accent}${cafeState.selectedModel === token.key ? " is-selected" : ""}`;
            button.dataset.model = token.key;
            button.innerHTML = `<span class="cg-cafe-answer-chip">${token.key}</span>`;
            button.addEventListener("click", () => chooseCafeModel(token.key));
            ui.cafeAnswerButtons.appendChild(button);
        });
    }

    function renderCafeGuests() {
        ui.cafeSeatGrid.innerHTML = "";
        const guests = [...cafeState.guests].sort((a, b) => a.slot - b.slot);
        guests.forEach((guest) => {
            const seat = document.createElement("button");
            const selected = guest.id === cafeState.selectedGuestId;
            seat.type = "button";
            seat.className = `cg-cafe-seat${selected ? " is-selected" : ""}${guest.slot === cafeState.playerLane ? " is-near" : ""}`;
            seat.dataset.guestSlot = String(guest.slot);
            seat.style.left = `${lanePercents[guest.slot]}%`;
            const timerWidth = `${(guest.timeLeft / guest.maxTime) * 100}%`;
            seat.innerHTML = `
                <div class="cg-cafe-seat-ui">
                    <div class="cg-cafe-ticket">
                        <span class="cg-cafe-seat-chip">${getCopy(guest.label)}</span>
                        <p>${getCopy(guest.hint)}</p>
                        <div class="cg-cafe-guest-timer">
                            <span class="cg-cafe-guest-timer-fill" style="width:${timerWidth}"></span>
                        </div>
                    </div>
                    <div class="cg-cafe-guest-avatar is-${guest.scenarioType}">
                        <span class="cg-cafe-guest-head"></span>
                        <span class="cg-cafe-guest-face"></span>
                        <span class="cg-cafe-guest-body"></span>
                    </div>
                </div>
            `;
            seat.addEventListener("click", () => selectCafeGuest(guest.slot, true));
            ui.cafeSeatGrid.appendChild(seat);
        });
    }

    function renderCafeScene() {
        if (!ui.cafeModal) {
            return;
        }
        ui.cafeTime.textContent = `${Math.ceil(cafeState.timeLeft)}s`;
        ui.cafeCleared.textContent = `${cafeState.completed} / ${cafeState.target}`;
        ui.cafeScore.textContent = String(cafeState.score);
        ui.cafeChain.textContent = String(cafeState.streak);
        ui.cafeRating.textContent = safeRating(cafeState.score, "cafe");
        ui.cafeMissed.textContent = String(cafeState.missed);
        ui.cafeCurrentGuest.textContent = cafeState.selectedGuestId
            ? getCopy(cafeState.guests.find((guest) => guest.id === cafeState.selectedGuestId)?.label || { en: t("dispatch_no_guest"), zh: t("dispatch_no_guest") })
            : t("dispatch_no_guest");
        ui.cafeCurrentModel.textContent = cafeState.selectedModel || t("dispatch_no_model");
        ui.cafePauseButton.textContent = cafeState.paused ? t("dispatch_resume") : t("dispatch_pause");
        ui.cafePlayer.style.left = `${lanePercents[cafeState.playerLane]}%`;
        renderCafeAnswers();
        renderCafeGuests();
        if (!cafeState.prompt) {
            setCafePrompt(t("dispatch_scene_prompt"));
        } else {
            ui.cafePrompt.textContent = cafeState.prompt;
        }
    }

    function resetPrintDesk() {
        printState.selectedParts = { medium: null, model: null, output: null };
        printState.currentStep = "medium";
    }

    function shufflePrintOrders() {
        const deck = [...printOrders];
        for (let i = deck.length - 1; i > 0; i -= 1) {
            const j = Math.floor(Math.random() * (i + 1));
            [deck[i], deck[j]] = [deck[j], deck[i]];
        }
        return deck;
    }

    function getPrintLabel(category, key) {
        const list = printCatalog[category] || [];
        const item = list.find((entry) => entry.key === key);
        return item ? getCopy(item.label) : key;
    }

    function getPrintHintSteps(order) {
        const mediumHints = {
            paper: {
                en: "This job lives on a physical sheet, so start from a paper-based medium.",
                zh: "这是实体纸张上的任务，第一步应该先想到纸质介质。"
            },
            screen: {
                en: "The final product glows on a display, so the medium should be a screen panel.",
                zh: "成品需要在屏幕上发光显示，所以介质应该是屏幕。"
            },
            palette: {
                en: "This brief is about visual colour tuning, so begin with a palette-style medium.",
                zh: "这个任务强调视觉调色，因此介质应从调色卡一类开始。"
            },
            signal: {
                en: "This order travels inside a video signal, so the source should be a signal feed.",
                zh: "这个任务要在视频信号里传输，所以介质应是信号源。"
            }
        };
        const modelHints = {
            RGB: {
                en: "Glowing displays favour RGB because the colours are emitted as light.",
                zh: "会发光的显示内容更适合 RGB，因为它基于光的发射。"
            },
            CMYK: {
                en: "Printed ink on paper points toward CMYK rather than screen colour logic.",
                zh: "纸张上的油墨印刷更指向 CMYK，而不是屏幕色彩逻辑。"
            },
            HSV: {
                en: "Human-friendly colour picking and adjustment usually points toward HSV.",
                zh: "如果任务强调人类可读的调色与调整，通常会指向 HSV。"
            },
            YCbCr: {
                en: "Video transport often separates brightness from colour difference, which points to YCbCr.",
                zh: "视频传输常会区分亮度与色差，因此会指向 YCbCr。"
            }
        };
        const outputHints = {
            ink: {
                en: "This result should be physically printed, so the final output should be ink-based.",
                zh: "这个结果要真正印出来，所以最终输出应是油墨输出。"
            },
            display: {
                en: "The result is meant to be shown on a screen, so it should end in display output.",
                zh: "结果要在屏幕上展示，所以最终输出应是显示输出。"
            },
            preview: {
                en: "This brief is for previewing and adjusting choices, so a preview card fits best.",
                zh: "这个任务是为了预览与调整方案，所以最合适的是预览卡。"
            },
            encode: {
                en: "This asset is delivered through a signal chain, so an encoded package fits best.",
                zh: "这个素材要通过信号链交付，所以最合适的是编码包。"
            }
        };

        return [
            mediumHints[order.medium] || order.hint,
            modelHints[order.model] || order.hint,
            outputHints[order.output] || order.hint,
            {
                en: `Full answer: ${getPrintLabel("medium", order.medium)} -> ${getPrintLabel("model", order.model)} -> ${getPrintLabel("output", order.output)}`,
                zh: `完整答案：${getPrintLabel("medium", order.medium)} -> ${getPrintLabel("model", order.model)} -> ${getPrintLabel("output", order.output)}`
            }
        ];
    }

    function getPrintHintFeedback(hintUses, success) {
        if (success) {
            if (hintUses === 0) {
                return getLang() === "zh"
                    ? "零提示完成，客人觉得你判断非常稳。"
                    : "No hints used. The guest is impressed by your confident judgement.";
            }
            if (hintUses === 1) {
                return getLang() === "zh"
                    ? "你只看了一层提示，客人觉得你已经很接近独立完成。"
                    : "Only one hint used. The guest feels you were almost fully independent.";
            }
            return getLang() === "zh"
                ? `你用了 ${hintUses} 次提示完成这单，客人认可结果，但也提醒你下次更独立一些。`
                : `You used ${hintUses} hints to finish this order. The guest approves the result, but hopes for more independence next time.`;
        }
        if (hintUses === 0) {
            return getLang() === "zh"
                ? "这次没有提示也没对上，客人建议你重新梳理流程。"
                : "No hints used and the build still missed. The guest suggests rechecking the workflow.";
        }
        return getLang() === "zh"
            ? `这单已经用了 ${hintUses} 次提示，客人还是摇头，说明链路还没有真正理顺。`
            : `The guest still shook their head after ${hintUses} hints. The workflow chain is not solved yet.`;
    }

    function buildPrintOrder() {
        if (!printState.orderDeck.length || printState.orderCursor >= printState.orderDeck.length) {
            printState.orderDeck = shufflePrintOrders();
            printState.orderCursor = 0;
        }
        const template = printState.orderDeck[printState.orderCursor];
        printState.orderCursor += 1;
        printState.activeOrder = {
            ...template,
            selectedParts: { medium: null, model: null, output: null }
        };
        resetPrintDesk();
        printState.hintVisible = false;
        printState.hintLevel = 0;
        printState.currentOrderHintUses = 0;
        printState.message = t("print_scene_prompt");
        if (!printState.feedbackText) {
            printState.feedbackState = "ready";
            printState.feedbackText = getLang() === "zh"
                ? "瀹㈠杩樺湪绛変綘鎶婃垚鍝佸仛鍑烘潵銆?"
                : "The guest is waiting to see the finished product.";
            printState.feedbackArt = "";
        }
    }

    function startPrintRound() {
        if (printState.tickHandle) {
            clearInterval(printState.tickHandle);
        }
        printState.running = true;
        printState.paused = false;
        printState.ended = false;
        printState.timeLeft = printState.duration;
        printState.score = 0;
        printState.streak = 0;
        printState.completedOrders = 0;
        printState.failedOrders = 0;
        printState.hintUsesRound = 0;
        printState.orderDeck = shufflePrintOrders();
        printState.orderCursor = 0;
        buildPrintOrder();
        ui.printOverlay?.classList.remove("is-visible");
        renderPrintPauseState();
        renderPrintStudio();
        printState.tickHandle = setInterval(() => {
            if (!printState.running || printState.paused) {
                return;
            }
            printState.timeLeft = Math.max(0, printState.timeLeft - 1);
            if (printState.timeLeft <= 0 || printState.completedOrders >= printState.targetOrders) {
                finishPrintRound();
            } else {
                renderPrintStudio();
            }
        }, 1000);
    }

    function stopPrintRound() {
        printState.running = false;
        printState.paused = false;
        if (printState.tickHandle) {
            clearInterval(printState.tickHandle);
            printState.tickHandle = null;
        }
        hidePrintRewardToast();
        renderPrintPauseState();
    }

    function finishPrintRound() {
        stopPrintRound();
        printState.ended = true;
        if (printState.completedOrders >= printClearGoal) {
            tasks.printClear = true;
            updateMissionProgress();
        }
        printState.message = getLang() === "zh"
            ? `本轮完成 ${printState.completedOrders} 张海报，失败 ${printState.failedOrders} 次。`
            : `Round over. Printed ${printState.completedOrders} posters and missed ${printState.failedOrders} jobs.`;
        renderPrintStudio();
    }

    function choosePrintPart(category, key) {
        if (!printState.running || printState.paused || printState.ended) {
            return;
        }
        if (category !== printState.currentStep) {
            printState.message = getLang() === "zh"
                ? "先完成当前高亮步骤，再继续下一步。"
                : "Finish the highlighted step first.";
            renderPrintStudio();
            return;
        }
        printState.selectedParts[category] = key;
        if (category === "medium") {
            printState.currentStep = "model";
        } else if (category === "model") {
            printState.currentStep = "output";
        } else {
            printState.currentStep = "ready";
        }
        printState.message = getLang() === "zh"
            ? "很好，继续完成下一步拼装。"
            : "Good. Move on to the next press step.";
        renderPrintStudio();
    }

    function beginPrintEdit(category) {
        if (!printState.running || printState.paused || printState.ended) {
            return;
        }
        if (category === "medium") {
            printState.selectedParts.medium = null;
            printState.selectedParts.model = null;
            printState.selectedParts.output = null;
            printState.currentStep = "medium";
        } else if (category === "model") {
            printState.selectedParts.model = null;
            printState.selectedParts.output = null;
            printState.currentStep = "model";
        } else {
            printState.selectedParts.output = null;
            printState.currentStep = "output";
        }
        printState.message = getLang() === "zh"
            ? "已回到这一步，你可以重新选择。"
            : "Back to this step. You can choose again.";
        renderPrintStudio();
    }

    function togglePrintHint() {
        if (!printState.running || printState.ended) {
            return;
        }
        const order = printState.activeOrder || printOrders[0];
        const steps = getPrintHintSteps(order);
        printState.hintVisible = true;
        if (printState.hintLevel < steps.length) {
            printState.hintLevel += 1;
            printState.hintUsesRound += 1;
            printState.currentOrderHintUses += 1;
        } else {
            printState.hintLevel = 0;
            printState.hintVisible = false;
        }
        renderPrintStudio();
    }

    function submitPrintOrder() {
        if (!printState.running || printState.paused || printState.ended || printState.currentStep !== "ready") {
            return;
        }
        const order = printState.activeOrder;
        const success = order.medium === printState.selectedParts.medium
            && order.model === printState.selectedParts.model
            && order.output === printState.selectedParts.output;

        if (success) {
            printState.score += 16 + Math.min(printState.streak, 4) * 3;
            printState.streak += 1;
            printState.completedOrders += 1;
            if (printState.completedOrders >= printClearGoal) {
                tasks.printClear = true;
                updateMissionProgress();
            }
            updateGlobalScore(10, "up", "status_correct");
            playFeedbackTone(640);
            printState.message = order.feedback[getLang()];
            printState.feedbackState = "correct";
            printState.feedbackText = getLang() === "zh"
                ? `客人很满意：${order.feedback.zh}`
                : `Guest approved it: ${order.feedback.en}`;
            printState.feedbackText = getPrintHintFeedback(printState.currentOrderHintUses, true);
            printState.feedbackArt = order.art;
            showPrintRewardToast("correct", order, printState.feedbackText);
            buildPrintOrder();
        } else {
            printState.failedOrders += 1;
            printState.streak = 0;
            updateGlobalScore(-1, "reset", "status_retry");
            playFeedbackTone(260);
            printState.message = getLang() === "zh"
                ? "这张海报的拼装不对，检查介质、模型和输出方式。"
                : "That build does not fit the poster brief. Recheck medium, model, and output.";
            printState.feedbackState = "wrong";
            printState.feedbackText = getLang() === "zh"
                ? "客人摇了摇头，这个成品还不能交付。"
                : "The guest shook their head. This product is not ready yet.";
            printState.feedbackText = getPrintHintFeedback(printState.currentOrderHintUses, false);
            printState.feedbackArt = "";
            showPrintRewardToast("wrong", order, printState.feedbackText);
            resetPrintDesk();
        }
        renderPrintStudio();
    }

    function renderPrintRack(category, node, items) {
        node.innerHTML = "";
        items.forEach((item) => {
            const selected = printState.selectedParts[category] === item.key;
            const button = document.createElement("button");
            button.type = "button";
            button.className = `cg-print-part is-${item.accent}${selected ? " is-selected" : ""}`;
            button.innerHTML = `
                <span class="cg-print-part-chip">${getCopy(item.label)}</span>
            `;
            button.addEventListener("click", () => choosePrintPart(category, item.key));
            node.appendChild(button);
        });
    }

    function renderPrintStudio() {
        if (!ui.printModal) {
            return;
        }
        const order = printState.activeOrder || printOrders[0];
        ui.printTime.textContent = `${Math.ceil(printState.timeLeft)}s`;
        ui.printProgress.textContent = `${printState.completedOrders} / ${printState.targetOrders}`;
        ui.printScore.textContent = String(printState.score);
        ui.printFailed.textContent = String(printState.failedOrders);
        renderPrintPauseState();
        ui.printOrderTitle.textContent = getCopy(order.title);
        ui.printOrderClue.textContent = getCopy(order.clue);
        if (ui.printOrderHint) {
            ui.printOrderHint.hidden = !printState.hintVisible;
            ui.printOrderHint.textContent = printState.hintVisible ? getCopy(order.hint || order.clue) : "";
        }
        if (ui.printHintButton) {
            ui.printHintButton.textContent = printState.hintVisible ? t("print_hint_hide") : t("print_hint");
        }
        if (ui.printFeedbackAvatar) {
            ui.printFeedbackAvatar.dataset.state = printState.feedbackState;
        }
        if (ui.printFeedbackStatus) {
            ui.printFeedbackStatus.textContent = printState.feedbackState === "correct"
                ? t("feedback_correct")
                : printState.feedbackState === "wrong"
                    ? t("feedback_retry")
                    : t("feedback_ready");
        }
        if (ui.printFeedbackText) {
            ui.printFeedbackText.textContent = printState.feedbackText;
        }
        if (ui.printFeedbackArt) {
            const showArt = printState.feedbackState === "correct" && printState.feedbackArt;
            ui.printFeedbackArt.src = showArt ? printState.feedbackArt : "";
            ui.printFeedbackArt.style.display = showArt ? "block" : "none";
        }
        ui.printMachineState.textContent = printState.message;
        ui.printStepTitle.textContent = printState.currentStep === "ready"
            ? (getLang() === "zh" ? "准备印刷" : "Ready to Press")
            : printState.currentStep === "medium"
                ? t("print_medium")
                : printState.currentStep === "model"
                    ? t("print_model")
                    : t("print_output");

        renderPrintRack("medium", ui.printMediumGrid, printCatalog.medium);
        renderPrintRack("model", ui.printModelGrid, printCatalog.model);
        renderPrintRack("output", ui.printOutputGrid, printCatalog.output);

        ui.printSlotMediumText.textContent = printState.selectedParts.medium || "-";
        ui.printSlotModelText.textContent = printState.selectedParts.model || "-";
        ui.printSlotOutputText.textContent = printState.selectedParts.output || "-";

        ui.printSlotMedium.classList.toggle("is-next", printState.currentStep === "medium");
        ui.printSlotModel.classList.toggle("is-next", printState.currentStep === "model");
        ui.printSlotOutput.classList.toggle("is-next", printState.currentStep === "output");
        ui.printSlotMedium.classList.toggle("is-filled", Boolean(printState.selectedParts.medium));
        ui.printSlotModel.classList.toggle("is-filled", Boolean(printState.selectedParts.model));
        ui.printSlotOutput.classList.toggle("is-filled", Boolean(printState.selectedParts.output));

        ui.printPreview.dataset.model = (printState.selectedParts.model || "").toLowerCase();
        ui.printPreviewBadge.textContent = printState.selectedParts.model || "—";
        ui.printLever.disabled = printState.currentStep !== "ready" || printState.ended;
    }

    function renderPrintStudio() {
        if (!ui.printModal) {
            return;
        }
        const order = printState.activeOrder || printOrders[0];
        const stepMeta = {
            medium: {
                tag: getLang() === "zh" ? "步骤 1" : "Step 1",
                title: t("print_medium"),
                copy: getLang() === "zh" ? "先选择这张订单的介质。" : "Choose the medium for this order first."
            },
            model: {
                tag: getLang() === "zh" ? "步骤 2" : "Step 2",
                title: t("print_model"),
                copy: getLang() === "zh" ? "现在选择真正驱动这个任务的颜色模型。" : "Now choose the colour model that drives this task."
            },
            output: {
                tag: getLang() === "zh" ? "步骤 3" : "Step 3",
                title: t("print_output"),
                copy: getLang() === "zh" ? "最后决定它的输出方式。" : "Finish by choosing the output method."
            },
            ready: {
                tag: getLang() === "zh" ? "完成" : "Ready",
                title: getLang() === "zh" ? "准备压印" : "Ready to Press",
                copy: getLang() === "zh" ? "三步都完成了，现在拉动印刷杆提交。" : "All three steps are done. Pull the press lever to submit."
            }
        };
        const currentStepMeta = stepMeta[printState.currentStep] || stepMeta.medium;

        ui.printTime.textContent = `${Math.ceil(printState.timeLeft)}s`;
        ui.printProgress.textContent = `${printState.completedOrders} / ${printState.targetOrders}`;
        ui.printScore.textContent = String(printState.score);
        ui.printFailed.textContent = String(printState.failedOrders);
        ui.printOrderTitle.textContent = getCopy(order.title);
        ui.printOrderClue.textContent = getCopy(order.clue);
        if (ui.printHintCount) {
            ui.printHintCount.textContent = String(printState.hintUsesRound);
        }
        if (ui.printOrderHint) {
            const hintSteps = getPrintHintSteps(order);
            const visibleSteps = hintSteps.slice(0, printState.hintLevel);
            ui.printOrderHint.hidden = visibleSteps.length === 0;
            ui.printOrderHint.innerHTML = visibleSteps.map((step, index) => {
                const arrow = index < visibleSteps.length - 1
                    ? `<span class="cg-print-hint-arrow">→</span>`
                    : "";
                return `
                    <div class="cg-print-hint-node${index === visibleSteps.length - 1 ? " is-current" : ""}">
                        <span class="cg-print-hint-node-index">${index + 1}</span>
                        <span class="cg-print-hint-node-copy">${getCopy(step)}</span>
                    </div>
                    ${arrow}
                `;
            }).join("");
        }
        if (ui.printHintButton) {
            const totalHintSteps = getPrintHintSteps(order).length;
            if (printState.hintLevel === 0) {
                ui.printHintButton.textContent = getLang() === "zh" ? "展开提示 1" : "Reveal Hint 1";
            } else if (printState.hintLevel < totalHintSteps) {
                ui.printHintButton.textContent = getLang() === "zh"
                    ? `下一层提示 ${printState.hintLevel + 1}`
                    : `Next Hint ${printState.hintLevel + 1}`;
            } else {
                ui.printHintButton.textContent = getLang() === "zh" ? "重置提示链" : "Reset Hint Chain";
            }
        }
        ui.printMachineState.textContent = printState.message;
        if (ui.printStepTag) ui.printStepTag.textContent = currentStepMeta.tag;
        if (ui.printStepTitle) ui.printStepTitle.textContent = currentStepMeta.title;
        if (ui.printStepCopy) ui.printStepCopy.textContent = currentStepMeta.copy;
        if (ui.printMachineTitle) ui.printMachineTitle.textContent = currentStepMeta.title;

        renderPrintRack("medium", ui.printMediumGrid, printCatalog.medium);
        renderPrintRack("model", ui.printModelGrid, printCatalog.model);
        renderPrintRack("output", ui.printOutputGrid, printCatalog.output);

        if (ui.printRackMedium) ui.printRackMedium.classList.toggle("is-active-rack", printState.currentStep === "medium");
        if (ui.printRackModel) ui.printRackModel.classList.toggle("is-active-rack", printState.currentStep === "model");
        if (ui.printRackOutput) ui.printRackOutput.classList.toggle("is-active-rack", printState.currentStep === "output");

        ui.printSlotMediumText.textContent = printState.selectedParts.medium || "-";
        ui.printSlotModelText.textContent = printState.selectedParts.model || "-";
        ui.printSlotOutputText.textContent = printState.selectedParts.output || "-";

        ui.printSlotMedium.classList.toggle("is-next", printState.currentStep === "medium");
        ui.printSlotModel.classList.toggle("is-next", printState.currentStep === "model");
        ui.printSlotOutput.classList.toggle("is-next", printState.currentStep === "output");
        ui.printSlotMedium.classList.toggle("is-filled", Boolean(printState.selectedParts.medium));
        ui.printSlotModel.classList.toggle("is-filled", Boolean(printState.selectedParts.model));
        ui.printSlotOutput.classList.toggle("is-filled", Boolean(printState.selectedParts.output));

        ui.printPreview.dataset.model = (printState.selectedParts.model || "").toLowerCase();
        ui.printPreviewBadge.textContent = printState.selectedParts.model || "—";
        ui.printLever.disabled = printState.currentStep !== "ready" || printState.ended;
    }

    function bindUpgradeEvents() {
        const printStation = document.getElementById("station-print");
        if (printStation) {
            printStation.addEventListener("click", () => interactWithStation("print"));
        }

        document.addEventListener("pointerdown", unlockAudio, { passive: true });
        document.addEventListener("keydown", unlockAudio);
        document.addEventListener("click", (event) => {
            const target = event.target instanceof Element ? event.target.closest("button, a, [data-station]") : null;
            if (target) {
                playUiClickSound();
            }
        }, true);

        document.querySelectorAll("#modal-model [data-close-modal], #modal-print [data-close-modal], #modal-hue [data-close-modal]").forEach((button) => {
            button.addEventListener("click", closeModal);
        });

        ui.cafePauseButton.addEventListener("click", () => {
            if (cafeState.paused) {
                resumeCafe();
            } else {
                pauseCafe();
            }
        });

        ui.huePauseButton?.addEventListener("click", () => {
            if (workbenchState.paused) {
                resumeHue();
            } else {
                pauseHue();
            }
        });
        elements.restartHue?.addEventListener("click", () => {
            workbenchState.paused = false;
            ui.hueOverlay?.classList.remove("is-visible");
            renderHuePauseState();
        });

        ui.printPauseButton?.addEventListener("click", () => {
            if (printState.paused) {
                resumePrint();
            } else {
                pausePrint();
            }
        });
        ui.printHintButton?.addEventListener("click", togglePrintHint);
        ui.printOrderHint?.addEventListener("click", () => {
            if (printState.hintVisible) {
                togglePrintHint();
            }
        });
        ui.printRestart.addEventListener("click", startPrintRound);
        ui.printClear.addEventListener("click", () => {
            resetPrintDesk();
            printState.message = t("print_scene_prompt");
            renderPrintStudio();
        });
        ui.printLever.addEventListener("click", submitPrintOrder);
        ui.printSlotMedium.addEventListener("click", () => beginPrintEdit("medium"));
        ui.printSlotModel.addEventListener("click", () => beginPrintEdit("model"));
        ui.printSlotOutput.addEventListener("click", () => beginPrintEdit("output"));
        if (elements.soundToggle) {
            elements.soundToggle.addEventListener("click", () => {
                window.setTimeout(syncAudioState, 0);
            });
        }

        document.addEventListener("keydown", (event) => {
            const key = event.key.toLowerCase();
            if (key !== "p") {
                return;
            }
            if (worldState.openModalKey === "hue") {
                event.preventDefault();
                event.stopImmediatePropagation();
                if (workbenchState.paused) {
                    resumeHue();
                } else {
                    pauseHue();
                }
            } else if (worldState.openModalKey === "print") {
                event.preventDefault();
                event.stopImmediatePropagation();
                if (printState.paused) {
                    resumePrint();
                } else {
                    pausePrint();
                }
            }
        }, true);

        document.addEventListener("keydown", (event) => {
            const key = event.key.toLowerCase();
            if (worldState.openModalKey === "model") {
                if (key === "arrowleft" || key === "a") {
                    event.preventDefault();
                    moveCafeLane(-1);
                } else if (key === "arrowright" || key === "d") {
                    event.preventDefault();
                    moveCafeLane(1);
                } else if (key === "e" || key === "enter") {
                    event.preventDefault();
                    selectCafeGuest(cafeState.playerLane);
                } else if (key === "p") {
                    event.preventDefault();
                    if (cafeState.paused) {
                        resumeCafe();
                    } else {
                        pauseCafe();
                    }
                }
            } else if (worldState.openModalKey === "print" && key === "p") {
                event.preventDefault();
                printState.paused = !printState.paused;
                printState.message = printState.paused
                    ? (getLang() === "zh" ? "Poster Press 已暂停。" : "Poster Press paused.")
                    : t("print_scene_prompt");
                renderPrintStudio();
            }
        });
    }

    completedTaskCount = function upgradedCompletedTaskCount() {
        return Object.values(tasks).filter(Boolean).length;
    };

    updateMissionProgress = function upgradedMissionProgress() {
        updateProgressBar(elements.missionProgressText, elements.missionProgressFill, completedTaskCount(), 5);
        elements.taskModelVisit.classList.toggle("is-done", tasks.modelVisit);
        elements.taskModelClear.classList.toggle("is-done", tasks.modelClear);
        elements.taskHueClear.classList.toggle("is-done", tasks.hueClear);
        if (elements.taskPrintClear) {
            elements.taskPrintClear.classList.toggle("is-done", tasks.printClear);
        }
        elements.taskGateVisit.classList.toggle("is-done", tasks.gateVisit);
    };

    closeModal = function upgradedCloseModal() {
        baseStopDispatchRound();
        baseStopWorkbenchRound();
        stopCafeRound();
        stopPrintRound();
        workbenchState.paused = false;
        hideUpgradeOverlays();
        worldState.openModalKey = null;
        document.querySelectorAll(".cg-modal").forEach((modal) => {
            modal.classList.remove("is-open");
            modal.setAttribute("aria-hidden", "true");
        });
        document.body.style.overflow = "";
        checkNearbyStation();
    };

    openModal = function upgradedOpenModal(key) {
        closeModal();
        worldState.activeInfoKey = null;
        worldState.questPanelVisible = false;
        renderWorldPanels();
        worldState.activeStationKey = null;
        worldState.openModalKey = key;
        const modalMap = {
            model: elements.modalModel,
            hue: elements.modalHue,
            gate: elements.modalGate,
            print: elements.modalPrint
        };
        const modal = modalMap[key];
        if (!modal) {
            return;
        }
        modal.classList.add("is-open");
        modal.setAttribute("aria-hidden", "false");
        document.body.style.overflow = "hidden";
        if (key === "model") {
            startCafeRound();
        } else if (key === "hue") {
            startWorkbenchRound();
            workbenchState.paused = false;
            ui.hueOverlay?.classList.remove("is-visible");
            renderHuePauseState();
        } else if (key === "print") {
            startPrintRound();
            resumePrint();
        }
    };

    interactWithStation = function upgradedInteractWithStation(key) {
        if (worldState.openModalKey === key) {
            return;
        }
        if (key === "model") {
            tasks.modelVisit = true;
            updateMissionProgress();
            openModal("model");
            return;
        }
        if (key === "print") {
            openModal("print");
            return;
        }
        baseInteractWithStation(key);
    };

    applyStaticTranslations = function upgradedApplyStaticTranslations() {
        baseApplyStaticTranslations();
        document.querySelectorAll(".cg-modal-close").forEach((button) => {
            button.textContent = "×";
        });
        const zhButton = document.querySelector('[data-language="zh"]');
        if (zhButton) {
            zhButton.textContent = "中文";
        }
        renderCafeScene();
        renderHuePauseState();
        renderPrintPauseState();
        renderPrintStudio();
        updateMissionProgress();
    };

    ensureDom();
    bindUpgradeEvents();
    applyStaticTranslations();
    syncAudioState();
})();
