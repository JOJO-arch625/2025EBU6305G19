(function () {
    if (typeof gameCopy === "undefined" || typeof worldState === "undefined") {
        return;
    }

    Object.assign(worldState, {
        showHints: worldState.showHints ?? true,
        reducedMotion: worldState.reducedMotion ?? false
    });

    Object.assign(gameCopy.en, {
        task_model_visit: "Reach Chromatic Cafe",
        task_model_clear: "Clear enough cafe orders in one round",
        task_hue_clear: "Finish Hue Lab with a strong average score",
        task_gate_visit: "Reach the exit gate for site links",
        active_model_text: "Serve guests one by one inside Chromatic Cafe. Pick the right recipe bottle, cook the order, and clear the round before the main timer ends.",
        active_hue_text: "Tune hue, saturation, and lightness on the mixing bench, then submit each recipe to build a stronger average score.",
        dispatch_orders_title: "Serve one guest at a time before the round clock ends",
        dispatch_legend_line_4: "Wrong recipes waste round time and break your chain.",
        dispatch_scene_help: "Move with A / D or Left / Right. Press E or Enter near a guest, then choose the matching colour model.",
        dispatch_scene_hold_label: "Selected model",
        dispatch_scene_hold_none: "No model selected",
        dispatch_scene_selected_label: "Current guest",
        dispatch_scene_selected_none: "No guest selected",
        dispatch_scene_prompt_guest: "Talk to a guest to lock in the order",
        dispatch_scene_prompt_bottle: "Choose the matching colour model for the selected guest",
        dispatch_scene_prompt_kitchen: "Serve the right answer before the guest timer ends",
        dispatch_scene_prompt_serve: "Serve the selected guest before the timer runs out",
        dispatch_scene_prompt_floor: "Move across the cafe floor and serve the right guest",
        dispatch_scene_station: "Cafe Floor",
        dispatch_scene_order_ready: "Dish ready",
        dispatch_scene_select_action: "Talk",
        dispatch_scene_serve_action: "Serve",
        dispatch_missed_label: "Missed",
        gate_heading: "Choose your next learning path",
        gate_policy_eyebrow: "Local Play Policy",
        gate_policy_title: "How this page uses your data",
        gate_policy_body: "This page does not use accounts, ads, or tracking. Scores and settings stay in this browser only and reset when the page reloads.",
        pref_local: "All gameplay data stays local to this browser tab.",
        pref_sound: "Sound effects",
        pref_hints: "World hints",
        pref_motion: "Decorative motion",
        toggle_on: "On",
        toggle_off: "Off",
        confirm_restart_dispatch: "Restart the current cafe round? Your current progress in this round will be lost.",
        confirm_skip_dispatch: "Skip this guest? You can only skip one guest per round.",
        confirm_restart_hue: "Restart the current Hue Lab round? Your current bench progress will be lost.",
        confirm_reset_hue: "Reset the current mix back to the default values?",
        feedback_ready: "Waiting for your next move",
        feedback_correct: "Great progress",
        feedback_retry: "Try a cleaner fix"
    });

    gameCopy.zh = {
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
        status_retry: "正在调整",
        mission_progress: "任务进度",
        panel_eyebrow: "任务列表",
        panel_title: "这个世界里的目标",
        panel_title_short: "任务板",
        task_model_visit: "到达 Chromatic Cafe",
        task_model_clear: "在一轮咖啡馆挑战中完成足够订单",
        task_hue_clear: "在 Hue Lab 中获得较高平均分",
        task_gate_visit: "到达出口传送门查看跳转页面",
        station_idle: "待机中",
        station_title_idle: "先靠近一个地点",
        station_text_idle: "使用 WASD 或方向键移动角色，也可以直接点击场景模块。",
        controls_title: "操作方式",
        controls_text: "使用 WASD / 方向键移动，靠近站点后按 Enter 进入互动。",
        link_learning: "前往 Learning 页面复习理论",
        link_test: "前往 Test 页面进行正式自测",
        link_community: "前往 Community 页面查看分享与排行",
        station_model: "Chromatic Cafe",
        station_hue: "Hue Lab",
        station_gate: "出口门",
        prompt_idle: "靠近一个站点开始互动",
        prompt_plaza: "按 Enter 查看广场说明",
        prompt_quest: "按 Enter 打开任务板",
        prompt_model: "按 Enter 进入 Chromatic Cafe",
        prompt_hue: "按 Enter 进入 Hue Lab",
        prompt_gate: "按 Enter 打开出口门",
        active_plaza_type: "欢迎点",
        active_plaza_title: "色彩广场",
        active_plaza_text: "这里是整张游戏地图的起点。沿着发光路径探索站点，并完成两个高互动小游戏。",
        active_quest_type: "任务板",
        active_quest_title: "任务板",
        active_quest_text: "打开任务板可以查看当前路线与已经完成的学习目标。",
        active_model_type: "咖啡馆柜台",
        active_model_title: "Chromatic Cafe",
        active_model_text: "顾客会按顺序来到店里下单。选对配方瓶，下锅后再上菜，在整局倒计时结束前尽量完成更多订单。",
        active_hue_type: "调色台",
        active_hue_title: "Hue Lab",
        active_hue_text: "像操作实验工作台一样调节色相、饱和度和明度，再提交结果，尽量把平均分拉高。",
        active_gate_type: "传送门",
        active_gate_title: "出口门",
        active_gate_text: "完成当前游戏后，你可以从这里跳转去 Learning、Test 或 Community。",
        match_eyebrow: "小游戏 1",
        match_heading: "Chromatic Cafe",
        hue_eyebrow: "小游戏 2",
        hue_heading: "Hue Lab 调色台",
        time_left_label: "剩余时间",
        dispatch_restart: "重新开始",
        dispatch_goal_label: "已完成订单",
        dispatch_score_label: "本局得分",
        dispatch_chain_label: "连击",
        dispatch_rating_label: "评级",
        dispatch_skip_label: "跳过",
        dispatch_legend_eyebrow: "玩法流程",
        dispatch_legend_title: "先选顾客，再配方下锅，最后出餐上菜",
        dispatch_legend_line_1: "先从顾客队列中选中一位客人的订单。",
        dispatch_legend_line_2: "把正确的配方瓶拖进搅拌锅。",
        dispatch_legend_line_3: "先烹饪，再把成品送给顾客。",
        dispatch_legend_line_4: "错误配方会浪费整局时间，并打断连击。",
        dispatch_tokens_eyebrow: "配方瓶架",
        dispatch_tokens_title: "为当前客人选择正确的配方底料",
        dispatch_orders_eyebrow: "顾客队列",
        dispatch_orders_title: "按顺序服务客人，在整局倒计时内完成更多订单",
        dispatch_scene_help: "使用 A / D 或左右方向键移动。靠近客人后按 E 或 Enter 选中，再选择匹配的颜色模型。",
        dispatch_scene_hold_label: "当前选择",
        dispatch_scene_hold_none: "还没有选择模型",
        dispatch_scene_selected_label: "当前客人",
        dispatch_scene_selected_none: "还没有选中客人",
        dispatch_scene_prompt_guest: "先和客人互动，锁定当前订单",
        dispatch_scene_prompt_bottle: "为当前客人选择匹配的颜色模型",
        dispatch_scene_prompt_kitchen: "在客人倒计时结束前完成正确送餐",
        dispatch_scene_prompt_serve: "尽快把正确答案送给这位客人",
        dispatch_scene_prompt_floor: "沿着咖啡馆吧台移动，给正确的客人送上正确答案",
        dispatch_scene_station: "咖啡馆动线",
        dispatch_scene_order_ready: "菜品已完成",
        dispatch_scene_select_action: "交谈",
        dispatch_scene_serve_action: "上菜",
        dispatch_missed_label: "错过",
        dispatch_kitchen_eyebrow: "料理台",
        dispatch_kitchen_title: "备料、烹饪、装盘后再上菜",
        dispatch_pot_label: "把一个配方瓶拖进锅里",
        dispatch_plate_label: "当前还没有出餐",
        dispatch_cook: "开始烹饪",
        dispatch_clear_prep: "清空锅具",
        dispatch_skip: "跳过客人",
        feedback_title: "游戏反馈",
        feedback_ready: "等待你的下一步操作",
        feedback_correct: "进度很好",
        feedback_retry: "再调整一下",
        hue_restart: "重开本轮",
        hue_goal_label: "完成目标",
        hue_average_label: "平均分",
        hue_recipe_eyebrow: "目标简报",
        target_label: "目标颜色",
        current_label: "当前调色",
        meter_label: "匹配分数",
        slider_h: "色相",
        slider_s: "饱和度",
        slider_l: "明度",
        hue_check: "提交调色",
        hue_next: "下一个目标",
        hue_reset: "重置调色",
        gate_eyebrow: "出口门",
        gate_heading: "选择下一条学习路径",
        gate_policy_eyebrow: "本地游玩说明",
        gate_policy_title: "这个页面如何使用你的数据",
        gate_policy_body: "本页面不使用账号、广告或追踪。分数和设置只保存在当前浏览器中，刷新页面后会重置。",
        pref_local: "所有游戏数据都只保留在当前浏览器标签页中。",
        pref_sound: "音效",
        pref_hints: "世界提示",
        pref_motion: "装饰动效",
        toggle_on: "开启",
        toggle_off: "关闭",
        confirm_restart_dispatch: "要重新开始当前咖啡馆回合吗？本轮进度会被清空。",
        confirm_skip_dispatch: "要跳过当前客人吗？每轮只能跳过一次。",
        confirm_restart_hue: "要重新开始当前 Hue Lab 回合吗？本轮调色进度会被清空。",
        confirm_reset_hue: "要把当前调色重置为默认值吗？"
    };

    Object.assign(gameCopy.en, {
        active_model_text: "Move across Chromatic Cafe, talk to seated guests, take the correct recipe bottle, cook it, and walk the finished dish back to the matching guest.",
        dispatch_orders_title: "Handle several seated guests by moving to the right customer and serving the correct dish",
        dispatch_legend_title: "Move, pick the right recipe, cook it, then deliver it to the matching guest",
        dispatch_legend_line_1: "Walk to a guest and interact to lock in that order.",
        dispatch_legend_line_2: "Move to the shelf and pick the colour recipe that matches the guest's task.",
        dispatch_legend_line_3: "Bring the held recipe to the kitchen station and cook it.",
        dispatch_legend_line_4: "Walk the finished dish back to the correct guest before moving on."
    });

    Object.assign(gameCopy.zh, {
        active_model_text: "在 Chromatic Cafe 里沿吧台移动，先和坐着的客人互动，再拿正确配方、去厨房处理，最后把成品送回对应客人。",
        dispatch_orders_title: "在多位坐席客人之间穿梭，把正确菜品送给对应客人",
        dispatch_legend_title: "移动、拿对配方、完成烹饪，再把菜送给对应客人",
        dispatch_legend_line_1: "先走到某位客人面前互动，确认这位客人的订单。",
        dispatch_legend_line_2: "再走到配方架，选择与该任务匹配的颜色配方。",
        dispatch_legend_line_3: "把当前配方带去厨房站点完成烹饪。",
        dispatch_legend_line_4: "再把做好的菜送回给正确客人，继续处理下一单。"
    });

    dispatchTemplates.splice(0, dispatchTemplates.length, {
        scenarioType: "screen",
        icon: "📱",
        label: { en: "Phone Banner", zh: "手机横幅" },
        hint: { en: "Glowing display asset", zh: "发光屏幕素材" },
        correctModel: "RGB",
        explanation: {
            en: "RGB fits screen work because displays emit red, green, and blue light.",
            zh: "RGB 适合屏幕任务，因为显示器直接发出红、绿、蓝三色光。"
        }
    }, {
        scenarioType: "print",
        icon: "🖨️",
        label: { en: "Magazine Cover", zh: "杂志封面" },
        hint: { en: "Ink on paper output", zh: "纸张油墨输出" },
        correctModel: "CMYK",
        explanation: {
            en: "CMYK is used for print because cyan, magenta, yellow, and black inks build the final page.",
            zh: "CMYK 用于印刷，因为青、品红、黄、黑四种油墨会在纸面上组合出最终颜色。"
        }
    }, {
        scenarioType: "tuning",
        icon: "🎛️",
        label: { en: "UI Colour Picker", zh: "界面取色器" },
        hint: { en: "Human-readable colour tuning", zh: "更适合人的直观调色" },
        correctModel: "HSV",
        explanation: {
            en: "HSV exposes hue, saturation, and value directly, so it is easier for interactive tuning.",
            zh: "HSV 直接暴露色相、饱和度和明度，更适合交互式调色。"
        }
    }, {
        scenarioType: "video",
        icon: "🎬",
        label: { en: "Video Stream", zh: "视频流" },
        hint: { en: "Separate luma and chroma", zh: "亮度与色差信息分离" },
        correctModel: "YCbCr",
        explanation: {
            en: "YCbCr separates luma from chroma, which makes video encoding and transmission more efficient.",
            zh: "YCbCr 会把亮度和色差信息分开，因此更适合视频编码和传输。"
        }
    });

    hueRecipes.splice(0, hueRecipes.length, {
        name: { en: "Soft UI Sky", zh: "柔和界面天蓝" },
        scenarioTag: { en: "Landing page hero accent", zh: "首页主视觉高光" },
        lesson: {
            en: "Cool hues stay friendly when saturation is lively but lightness is raised.",
            zh: "冷色相在保留一定饱和度时，只要提高明度，就会显得更轻盈友好。"
        },
        h: 208, s: 82, l: 70
    }, {
        name: { en: "Print Warm Bloom", zh: "印刷暖粉高光" },
        scenarioTag: { en: "Print-friendly feature sticker", zh: "适合印刷的暖色贴纸" },
        lesson: {
            en: "Warm accents can feel printable when vividness is controlled and brightness stays soft.",
            zh: "暖色高光想更适合印刷，通常要控制鲜艳度，并保持柔和亮度。"
        },
        h: 340, s: 68, l: 72
    }, {
        name: { en: "Video Safe Aqua", zh: "视频安全青色" },
        scenarioTag: { en: "Motion graphic overlay", zh: "动态图形叠加色" },
        lesson: {
            en: "Balanced saturation helps colour stay vivid without exploding on motion content.",
            zh: "适中的饱和度能让颜色在动态内容里既鲜明又不过于刺眼。"
        },
        h: 170, s: 62, l: 56
    }, {
        name: { en: "Playful Lab Grape", zh: "实验室葡萄紫" },
        scenarioTag: { en: "Cute interaction reward colour", zh: "可爱互动奖励色" },
        lesson: {
            en: "A richer hue can still feel cute when lightness stays above the midpoint.",
            zh: "较浓的色相只要明度保持在中位以上，依然会显得可爱而轻快。"
        },
        h: 286, s: 70, l: 64
    });

    function tt(key) {
        return gameCopy[worldState.language]?.[key] ?? gameCopy.en[key] ?? key;
    }

    t = tt;

    function injectGatePolicyPanel() {
        const gatePanel = document.querySelector("#modal-gate .cg-modal-panel");
        if (!gatePanel || gatePanel.querySelector(".cg-gate-policy")) {
            return;
        }

        const panel = document.createElement("section");
        panel.className = "cg-gate-policy";
        panel.innerHTML = `
            <div class="cg-panel-heading">
                <p class="cg-eyebrow" data-i18n="gate_policy_eyebrow">Local Play Policy</p>
                <h3 data-i18n="gate_policy_title">How this page uses your data</h3>
            </div>
            <p class="cg-brief-line" data-i18n="gate_policy_body">This page does not use accounts, ads, or tracking. Scores and settings stay in this browser only and reset when the page reloads.</p>
            <div class="cg-pref-grid">
                <button class="cg-pref-toggle" type="button" id="pref-sound"></button>
                <button class="cg-pref-toggle" type="button" id="pref-hints"></button>
                <button class="cg-pref-toggle" type="button" id="pref-motion"></button>
            </div>
            <p class="cg-local-pill" data-i18n="pref_local">All gameplay data stays local to this browser tab.</p>
        `;
        gatePanel.appendChild(panel);
    }

    function fixStaticNodes() {
        const zhButton = document.querySelector('[data-language="zh"]');
        if (zhButton) {
            zhButton.textContent = "中文";
        }
        document.querySelectorAll(".cg-modal-close").forEach((button) => {
            button.textContent = "×";
        });
    }

    function renderPreferenceButtons() {
        const prefSound = document.getElementById("pref-sound");
        const prefHints = document.getElementById("pref-hints");
        const prefMotion = document.getElementById("pref-motion");
        if (!prefSound || !prefHints || !prefMotion) {
            return;
        }

        [
            { node: prefSound, key: "pref_sound", active: worldState.soundEnabled },
            { node: prefHints, key: "pref_hints", active: worldState.showHints },
            { node: prefMotion, key: "pref_motion", active: !worldState.reducedMotion }
        ].forEach((item) => {
            item.node.classList.toggle("is-on", item.active);
            item.node.innerHTML = `
                <span class="cg-pref-label">${tt(item.key)}</span>
                <span class="cg-pref-state">${item.active ? tt("toggle_on") : tt("toggle_off")}</span>
            `;
        });
    }

    function syncPreferenceState() {
        document.body.classList.toggle("is-reduced-motion", worldState.reducedMotion);
        if (elements.worldPrompt) {
            elements.worldPrompt.classList.toggle("is-hidden", !worldState.showHints);
        }
        if (!worldState.showHints && elements.inspectorPanel) {
            elements.inspectorPanel.classList.remove("is-visible");
            elements.inspectorPanel.setAttribute("aria-hidden", "true");
        }
        renderPreferenceButtons();
    }

    const originalApplyStaticTranslations = applyStaticTranslations;
    applyStaticTranslations = function () {
        originalApplyStaticTranslations();
        fixStaticNodes();
        syncPreferenceState();
    };

    const originalRenderWorldPanels = renderWorldPanels;
    renderWorldPanels = function () {
        originalRenderWorldPanels();
        if (!worldState.showHints && elements.inspectorPanel) {
            elements.inspectorPanel.classList.remove("is-visible");
            elements.inspectorPanel.setAttribute("aria-hidden", "true");
        }
    };

    const originalUpdateStationPrompt = updateStationPrompt;
    updateStationPrompt = function () {
        originalUpdateStationPrompt();
        if (elements.worldPrompt) {
            elements.worldPrompt.classList.toggle("is-hidden", !worldState.showHints);
        }
    };

    renderDispatchKitchen = function () {
        if (dispatchState.prepModel) {
            elements.dispatchPotLiquid.style.background = getDishPalette(dispatchState.prepModel);
            elements.dispatchPotLiquid.classList.add("is-filled");
            elements.dispatchPotLabel.textContent = worldState.language === "en"
                ? `${dispatchState.prepModel} recipe in pot`
                : `${dispatchState.prepModel} 配方已下锅`;
        } else {
            elements.dispatchPotLiquid.style.background = "transparent";
            elements.dispatchPotLiquid.classList.remove("is-filled");
            elements.dispatchPotLabel.textContent = tt("dispatch_pot_label");
        }

        const platedOrder = dispatchState.activeOrders.find((item) => item.id === dispatchState.platedOrderId);
        if (platedOrder) {
            elements.dispatchServeDish.style.background = getDishPalette(platedOrder.correctModel);
            elements.dispatchServeDish.className = `cg-serve-dish is-visible is-${platedOrder.scenarioType}`;
            elements.dispatchPlateLabel.textContent = worldState.language === "en"
                ? `${platedOrder.label.en} is plated and ready to serve`
                : `${platedOrder.label.zh} 已经装盘，准备上菜`;
        } else {
            elements.dispatchServeDish.className = "cg-serve-dish";
            elements.dispatchServeDish.style.background = "transparent";
            elements.dispatchPlateLabel.textContent = tt("dispatch_plate_label");
        }

        const selectedOrder = dispatchState.activeOrders.find((item) => item.id === dispatchState.selectedOrderId);
        if (!dispatchState.platedOrderId && selectedOrder) {
            elements.dispatchPlateLabel.textContent = worldState.language === "en"
                ? `Current guest: ${selectedOrder.label.en}`
                : `当前客人：${selectedOrder.label.zh}`;
        }
    };

    renderDispatchOrders = function () {
        elements.dispatchOrderGrid.innerHTML = "";
        dispatchState.activeOrders.forEach((order) => {
            const card = document.createElement("article");
            const isSelected = dispatchState.selectedOrderId === order.id;
            const isCooked = dispatchState.platedOrderId === order.id;
            card.className = `cg-order-card is-${order.scenarioType}${isSelected ? " is-selected" : ""}${isCooked ? " is-cooked" : ""}`;
            card.innerHTML = `
                <div class="cg-order-top">
                    <div class="cg-customer-avatar is-${order.scenarioType}">
                        <span class="cg-customer-head"></span>
                        <span class="cg-customer-face"></span>
                        <span class="cg-customer-body"></span>
                    </div>
                    <div class="cg-order-copy">
                        <strong>${order.label[worldState.language]}</strong>
                        <p>${order.hint[worldState.language]}</p>
                    </div>
                </div>
                <div class="cg-order-dish">
                    <span class="cg-order-dish-plate is-${order.scenarioType}"></span>
                    <span class="cg-order-dish-icon">${order.icon}</span>
                </div>
                <div class="cg-order-actions">
                    <button class="cg-order-action" data-action="select" data-order-id="${order.id}">
                        ${worldState.language === "en" ? (isSelected ? "Selected" : "Take Order") : (isSelected ? "已选中" : "接单")}
                    </button>
                    <button class="cg-order-action cg-order-action-serve${isCooked ? " is-live" : ""}" data-action="serve" data-order-id="${order.id}" ${isCooked ? "" : "disabled"}>
                        ${worldState.language === "en" ? "Serve Dish" : "上菜"}
                    </button>
                </div>
            `;

            card.querySelector('[data-action="select"]').addEventListener("click", () => selectDispatchOrder(order.id));
            card.querySelector('[data-action="serve"]').addEventListener("click", () => serveDispatchOrder(order.id));
            elements.dispatchOrderGrid.appendChild(card);
        });
    };

    renderWorkbench = function () {
        const target = getCurrentRecipe();
        const current = getCurrentMix();
        const average = workbenchState.submissions === 0 ? 0 : Math.round(workbenchState.totalScore / workbenchState.submissions);

        elements.hueTimeText.textContent = `${workbenchState.timeLeft}s`;
        updateProgressBar(elements.hueProgressText, elements.hueProgressFill, workbenchState.submissions, workbenchState.targetGoal);
        elements.hueAverageText.textContent = `${average}%`;
        elements.hueStreakText.textContent = String(workbenchState.streak);
        elements.hueRatingText.textContent = getRatingFromScore(average, { s: 92, a: 82, b: 70 });
        elements.hueTargetTitle.textContent = target.name[worldState.language];
        elements.hueTargetScenario.textContent = target.scenarioTag[worldState.language];
        elements.hueTargetLesson.textContent = target.lesson[worldState.language];
        elements.targetSwatch.style.background = hslString(target);
        elements.currentSwatch.style.background = hslString(current);
        elements.targetMeta.textContent = `H ${target.h} | S ${target.s}% | L ${target.l}%`;
        elements.currentMeta.textContent = `H ${current.h} | S ${current.s}% | L ${current.l}%`;
        elements.targetLesson.textContent = target.lesson[worldState.language];
        elements.sliderHValue.textContent = `${current.h}deg`;
        elements.sliderSValue.textContent = `${current.s}%`;
        elements.sliderLValue.textContent = `${current.l}%`;
        elements.vialFill.style.height = `${current.s}%`;
        elements.matchScore.textContent = `${calculateMatchScore(current, target)}%`;
        elements.nextTarget.disabled = !workbenchState.canAdvance;
    };

    startDispatchRound = function () {
        stopDispatchRound();
        dispatchState.timeLeft = dispatchState.duration;
        dispatchState.score = 0;
        dispatchState.streak = 0;
        dispatchState.completedOrders = 0;
        dispatchState.skipsLeft = 1;
        dispatchState.activeOrders = [];
        dispatchState.nextOrderId = 1;
        dispatchState.tickCount = 0;
        dispatchState.draggingModel = null;
        dispatchState.selectedOrderId = null;
        dispatchState.prepModel = null;
        dispatchState.platedOrderId = null;
        dispatchState.running = true;
        resetDispatchFeedback();
        spawnDispatchOrder();
        renderDispatchGame();

        dispatchState.tickHandle = setInterval(() => {
            dispatchState.timeLeft -= 1;
            if (dispatchState.completedOrders >= dispatchState.targetOrders || dispatchState.timeLeft <= 0) {
                finishDispatchRound();
            } else {
                renderDispatchGame();
            }
        }, 1000);
    };

    cookDispatchOrder = function () {
        if (!dispatchState.running) {
            return;
        }
        if (!dispatchState.selectedOrderId) {
            setDispatchFeedback("wrong", {
                en: "Choose a guest order first, then start cooking.",
                zh: "先选中一位客人的订单，再开始烹饪。"
            });
            return;
        }
        if (!dispatchState.prepModel) {
            setDispatchFeedback("wrong", {
                en: "Drop one recipe bottle into the pot before cooking.",
                zh: "先把一个配方瓶拖进锅里，再开始烹饪。"
            });
            return;
        }

        const order = dispatchState.activeOrders.find((item) => item.id === dispatchState.selectedOrderId);
        if (!order) {
            return;
        }

        if (dispatchState.prepModel !== order.correctModel) {
            const wrongModel = dispatchState.prepModel;
            dispatchState.streak = 0;
            dispatchState.prepModel = null;
            updateGlobalScore(-2, "reset", "status_retry");
            setDispatchFeedback("wrong", {
                en: `${wrongModel} does not fit ${order.label.en}. ${order.explanation.en}`,
                zh: `${wrongModel} 不适合 ${order.label.zh}。${order.explanation.zh}`
            });
            playFeedbackTone(260);
            renderDispatchGame();
            return;
        }

        dispatchState.platedOrderId = order.id;
        setDispatchFeedback("correct", {
            en: `${order.label.en} is cooked. Serve it while the round clock is still on your side.`,
            zh: `${order.label.zh} 已经出锅了，快在本局时间结束前完成上菜。`
        });
        playFeedbackTone(560);
        renderDispatchGame();
    };

    serveDispatchOrder = function (orderId) {
        if (!dispatchState.running || dispatchState.platedOrderId !== orderId) {
            return;
        }
        const order = dispatchState.activeOrders.find((item) => item.id === orderId);
        if (!order) {
            return;
        }

        dispatchState.score += 10 + Math.min(dispatchState.streak, 4) * 2;
        dispatchState.streak += 1;
        dispatchState.completedOrders += 1;
        dispatchState.activeOrders = dispatchState.activeOrders.filter((item) => item.id !== orderId);
        dispatchState.selectedOrderId = null;
        dispatchState.platedOrderId = null;
        dispatchState.prepModel = null;

        if (dispatchState.completedOrders < dispatchState.targetOrders && dispatchState.running) {
            spawnDispatchOrder();
        }

        if (dispatchState.completedOrders >= 8) {
            tasks.modelClear = true;
            updateMissionProgress();
        }

        updateGlobalScore(10, "up", "status_correct");
        setDispatchFeedback("correct", {
            en: `Served on time. ${order.explanation.en}`,
            zh: `成功上菜。${order.explanation.zh}`
        });
        playFeedbackTone(640);
        renderDispatchGame();
    };

    finishDispatchRound = function () {
        stopDispatchRound();
        const rating = getRatingFromScore(dispatchState.score, { s: 120, a: 90, b: 65 });
        const cleared = dispatchState.completedOrders;
        const success = cleared >= 8;
        if (success) {
            tasks.modelClear = true;
            updateMissionProgress();
        }
        setDispatchFeedback(success ? "correct" : "wrong", {
            en: success
                ? `Round clear. You processed ${cleared} orders with a ${rating} rating.`
                : `Round over. You cleared ${cleared} orders and finished with a ${rating} rating. Try to reach 8 next time.`,
            zh: success
                ? `本局完成。你一共处理了 ${cleared} 个订单，评级为 ${rating}。`
                : `本局结束。你处理了 ${cleared} 个订单，评级为 ${rating}。下次尽量冲到 8 个以上。`
        });
        renderDispatchGame();
    };

    skipDispatchOrder = function () {
        if (!dispatchState.running || dispatchState.skipsLeft <= 0 || dispatchState.activeOrders.length === 0) {
            return;
        }

        const skippedOrder = dispatchState.activeOrders[0];
        dispatchState.skipsLeft -= 1;
        dispatchState.activeOrders = [];
        dispatchState.selectedOrderId = null;
        dispatchState.platedOrderId = null;
        dispatchState.prepModel = null;

        if (dispatchState.completedOrders < dispatchState.targetOrders) {
            spawnDispatchOrder();
        }

        setDispatchFeedback("ready", {
            en: `Skipped ${skippedOrder.label.en}. A new guest has taken the seat.`,
            zh: `已跳过 ${skippedOrder.label.zh}，下一位客人已经入座。`
        });
        renderDispatchGame();
    };

    evaluateWorkbenchMix = function () {
        if (!workbenchState.running || workbenchState.canAdvance) {
            return;
        }
        const target = getCurrentRecipe();
        const current = getCurrentMix();
        const score = calculateMatchScore(current, target);

        workbenchState.totalScore += score;
        workbenchState.submissions += 1;
        workbenchState.canAdvance = workbenchState.submissions < workbenchState.targetGoal;

        if (score >= 90) {
            workbenchState.streak += 1;
            updateGlobalScore(14, "up", "status_correct");
            setWorkbenchFeedback("correct", {
                en: `Perfect mix. ${target.name.en} landed right where the brief needed it.`,
                zh: `几乎完美。${target.name.zh} 的颜色已经非常接近目标。`
            });
            playFeedbackTone(680);
        } else if (score >= 75) {
            workbenchState.streak += 1;
            updateGlobalScore(9, "up", "status_correct");
            setWorkbenchFeedback("correct", {
                en: "Good mix. A small tweak could make it even tighter, but this already works.",
                zh: "这次已经很接近了，再微调一点会更好。"
            });
            playFeedbackTone(520);
        } else {
            workbenchState.streak = 0;
            updateGlobalScore(-1, "reset", "status_retry");
            setWorkbenchFeedback("wrong", {
                en: "Retry energy. Compare hue first, then saturation, then lightness.",
                zh: "再试一次。先看色相，再看饱和度，最后修正明度。"
            });
            playFeedbackTone(240);
        }

        const average = Math.round(workbenchState.totalScore / workbenchState.submissions);
        if (average >= 78 && workbenchState.submissions >= workbenchState.targetGoal) {
            tasks.hueClear = true;
            updateMissionProgress();
        }

        renderWorkbench();

        if (workbenchState.submissions >= workbenchState.targetGoal) {
            finishWorkbenchRound();
        }
    };

    finishWorkbenchRound = function () {
        stopWorkbenchRound();
        const average = workbenchState.submissions === 0 ? 0 : Math.round(workbenchState.totalScore / workbenchState.submissions);
        const rating = getRatingFromScore(average, { s: 92, a: 82, b: 70 });
        const success = average >= 78 && workbenchState.submissions >= workbenchState.targetGoal;
        if (success) {
            tasks.hueClear = true;
            updateMissionProgress();
        }
        setWorkbenchFeedback(success ? "correct" : "wrong", {
            en: success
                ? `Bench clear. You finished with a ${average}% average and a ${rating} rating.`
                : `Bench over. Your average was ${average}% with a ${rating} rating. Push it above 78% next run.`,
            zh: success
                ? `调色台完成。你的平均分是 ${average}% ，评级为 ${rating}。`
                : `本轮结束。你的平均分是 ${average}% ，评级为 ${rating}。下次尽量冲到 78% 以上。`
        });
        renderWorkbench();
    };

    function interceptAction(node, confirmKey, handler) {
        if (!node) {
            return;
        }
        node.addEventListener("click", (event) => {
            event.preventDefault();
            event.stopImmediatePropagation();
            if (confirmKey && !window.confirm(tt(confirmKey))) {
                return;
            }
            handler();
        }, true);
    }

    Object.assign(dispatchState, {
        scenePlayerX: 420,
        sceneFocus: null,
        sceneLastFrame: performance.now(),
        paused: false,
        failedOrders: 0,
        guestLifetime: 15
    });

    const cafeSceneConfig = {
        minX: 84,
        maxX: 860,
        speed: 330,
        pantryCenterX: 220,
        kitchenCenterX: 520,
        guestSeatXs: [238, 470, 708],
        bottleXs: [122, 198, 274, 350],
        interactRadius: 68,
        bottleRadius: 42
    };

    function installCafeScene() {
        const oldLayout = document.querySelector(".cg-dispatch-layout");
        if (!oldLayout || document.getElementById("dispatch-cafe-sim")) {
            return;
        }

        const sim = document.createElement("section");
        sim.className = "cg-cafe-sim";
        sim.id = "dispatch-cafe-sim";
        sim.innerHTML = `
            <div class="cg-cafe-stage" id="dispatch-cafe-stage">
                <div class="cg-cafe-backdrop">
                    <div class="cg-cafe-canopy"></div>
                    <div class="cg-cafe-water"></div>
                    <div class="cg-cafe-island cg-cafe-island-a"></div>
                    <div class="cg-cafe-island cg-cafe-island-b"></div>
                    <div class="cg-cafe-shelf">
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
                        <div class="cg-cafe-shelf-ui">
                            <div class="cg-cafe-shelf-head">
                                <span class="cg-cafe-scene-chip" data-i18n="dispatch_scene_station">${tt("dispatch_scene_station")}</span>
                                <p class="cg-cafe-shelf-copy" data-i18n="dispatch_scene_help">${tt("dispatch_scene_help")}</p>
                            </div>
                            <div class="cg-cafe-answer-buttons cg-cafe-answer-buttons-shelf" id="dispatch-token-rack"></div>
                        </div>
                    </div>
                </div>

                <div class="cg-cafe-topbar">
                    <div class="cg-cafe-top-pill">
                        <span data-i18n="time_left_label">Time Left</span>
                        <strong id="dispatch-time-text">95s</strong>
                    </div>
                    <div class="cg-cafe-top-pill">
                        <span data-i18n="dispatch_goal_label">Orders Cleared</span>
                        <strong id="dispatch-progress-text">0 / 10</strong>
                    </div>
                    <div class="cg-cafe-top-pill">
                        <span data-i18n="dispatch_score_label">Round Score</span>
                        <strong id="dispatch-score-text">0</strong>
                    </div>
                    <div class="cg-cafe-top-pill">
                        <span data-i18n="dispatch_chain_label">Chain</span>
                        <strong id="dispatch-streak-text">0</strong>
                    </div>
                    <div class="cg-cafe-top-pill">
                        <span data-i18n="dispatch_rating_label">Rating</span>
                        <strong id="dispatch-rating-text">C</strong>
                    </div>
                    <div class="cg-cafe-top-pill">
                        <span data-i18n="dispatch_missed_label">Missed</span>
                        <strong id="dispatch-missed-text">0</strong>
                    </div>
                    <button class="cg-button cg-button-secondary cg-cafe-pause-button" type="button" id="dispatch-pause-toggle">Pause</button>
                </div>

                <div class="cg-cafe-counter">
                    <div class="cg-cafe-seat-grid" id="dispatch-order-grid"></div>
                </div>

                <div class="cg-cafe-floor">
                    <div class="cg-cafe-player" id="dispatch-player" aria-hidden="true">
                        <span class="cg-cafe-player-shadow"></span>
                        <span class="cg-cafe-player-head"></span>
                        <span class="cg-cafe-player-body"></span>
                        <span class="cg-cafe-player-apron"></span>
                    </div>
                </div>

                <div class="cg-cafe-service-strip">
                    <div class="cg-cafe-service-card">
                        <span data-i18n="dispatch_scene_selected_label">${tt("dispatch_scene_selected_label")}</span>
                        <strong id="dispatch-selected-guest">${tt("dispatch_scene_selected_none")}</strong>
                    </div>
                    <div class="cg-cafe-service-card">
                        <span data-i18n="dispatch_scene_hold_label">${tt("dispatch_scene_hold_label")}</span>
                        <strong id="dispatch-held-model">${tt("dispatch_scene_hold_none")}</strong>
                    </div>
                    <p class="cg-cafe-scene-prompt cg-cafe-scene-prompt-inline" id="dispatch-scene-prompt">${tt("dispatch_scene_prompt_floor")}</p>
                </div>

                <div class="cg-cafe-overlay" id="dispatch-pause-overlay" aria-hidden="true">
                    <div class="cg-cafe-overlay-card">
                        <p class="cg-eyebrow">Paused</p>
                        <h3>Chromatic Cafe Break</h3>
                        <details class="cg-cafe-details">
                            <summary>Tutorial</summary>
                            <p>Move to a seated guest, lock in that order, then choose the matching colour model.</p>
                        </details>
                        <details class="cg-cafe-details">
                            <summary>Tips</summary>
                            <p>Each guest has only 15 seconds. If they leave, you lose score and miss that order.</p>
                        </details>
                        <button class="cg-button cg-button-primary" type="button" id="dispatch-resume-button">Resume</button>
                    </div>
                </div>

                <div class="cg-cafe-overlay" id="dispatch-end-overlay" aria-hidden="true">
                    <div class="cg-cafe-overlay-card">
                        <p class="cg-eyebrow">Round Result</p>
                        <h3 id="dispatch-end-title">Round Over</h3>
                        <p id="dispatch-end-text"></p>
                        <div class="cg-cafe-end-grid">
                            <div class="cg-cafe-end-pill">
                                <span data-i18n="dispatch_goal_label">Orders Cleared</span>
                                <strong id="dispatch-end-cleared">0</strong>
                            </div>
                            <div class="cg-cafe-end-pill">
                                <span data-i18n="dispatch_rating_label">Rating</span>
                                <strong id="dispatch-end-rating">C</strong>
                            </div>
                            <div class="cg-cafe-end-pill">
                                <span>Missed</span>
                                <strong id="dispatch-end-missed">0</strong>
                            </div>
                        </div>
                        <div class="cg-cafe-end-actions">
                            <button class="cg-button cg-button-primary" type="button" id="dispatch-restart-overlay">Play Again</button>
                            <button class="cg-button cg-button-secondary" type="button" id="dispatch-close-overlay">Back to World</button>
                        </div>
                    </div>
                </div>
            </div>
        `;

        oldLayout.replaceWith(sim);
        elements.dispatchTokenRack = document.getElementById("dispatch-token-rack");
        elements.dispatchOrderGrid = document.getElementById("dispatch-order-grid");
        elements.dispatchCook = null;
        elements.dispatchClearPrep = null;
        elements.dispatchSkip = null;
        elements.dispatchPotSlot = null;
        elements.dispatchPotLiquid = null;
        elements.dispatchPotLabel = null;
        elements.dispatchServePlate = null;
        elements.dispatchServeDish = null;
        elements.dispatchPlateLabel = null;
        elements.dispatchMissedText = document.getElementById("dispatch-missed-text");
        elements.dispatchPauseToggle = document.getElementById("dispatch-pause-toggle");
        elements.dispatchPauseOverlay = document.getElementById("dispatch-pause-overlay");
        elements.dispatchResumeButton = document.getElementById("dispatch-resume-button");
        elements.dispatchEndOverlay = document.getElementById("dispatch-end-overlay");
        elements.dispatchEndTitle = document.getElementById("dispatch-end-title");
        elements.dispatchEndText = document.getElementById("dispatch-end-text");
        elements.dispatchEndCleared = document.getElementById("dispatch-end-cleared");
        elements.dispatchEndRating = document.getElementById("dispatch-end-rating");
        elements.dispatchEndMissed = document.getElementById("dispatch-end-missed");
        elements.dispatchRestartOverlay = document.getElementById("dispatch-restart-overlay");
        elements.dispatchCloseOverlay = document.getElementById("dispatch-close-overlay");
        elements.dispatchScenePrompt = document.getElementById("dispatch-scene-prompt");
        elements.dispatchHeldModel = document.getElementById("dispatch-held-model");
        elements.dispatchSelectedGuest = document.getElementById("dispatch-selected-guest");
        elements.dispatchPlayer = document.getElementById("dispatch-player");
    }

    function fillDispatchSeats() {
        while (dispatchState.activeOrders.length < 3 && dispatchState.completedOrders + dispatchState.failedOrders + dispatchState.activeOrders.length < dispatchState.targetOrders) {
            const order = makeOrder(pickDispatchTemplate());
            order.timeLeft = dispatchState.guestLifetime;
            dispatchState.activeOrders.push(order);
        }
    }

    spawnDispatchOrder = function () {
        fillDispatchSeats();
    };

    function getActiveSceneGuest() {
        if (dispatchState.selectedOrderId) {
            const selected = dispatchState.activeOrders.find((order) => order.id === dispatchState.selectedOrderId);
            if (selected) {
                return selected;
            }
        }

        if (dispatchState.sceneFocus?.type === "guest") {
            return dispatchState.activeOrders.find((order) => order.id === dispatchState.sceneFocus.orderId) || null;
        }

        return null;
    }

    function getBottleModelByIndex(index) {
        return modelTokens[index]?.key || null;
    }

    function getSceneFocus() {
        let best = { type: "floor", distance: Number.POSITIVE_INFINITY };

        cafeSceneConfig.guestSeatXs.forEach((seatX, index) => {
            const order = dispatchState.activeOrders[index];
            if (!order) {
                return;
            }
            const distance = Math.abs(dispatchState.scenePlayerX - seatX);
            if (distance < cafeSceneConfig.interactRadius && distance < best.distance) {
                best = { type: "guest", distance, orderId: order.id };
            }
        });

        return best.type === "floor" ? null : best;
    }

    function renderDispatchScenePlayer() {
        if (elements.dispatchPlayer) {
            elements.dispatchPlayer.style.transform = `translateX(${dispatchState.scenePlayerX}px)`;
        }
    }

    function renderDispatchSceneMeta() {
        if (!elements.dispatchScenePrompt || !elements.dispatchHeldModel || !elements.dispatchSelectedGuest) {
            return;
        }

        const activeGuest = dispatchState.selectedOrderId
            ? dispatchState.activeOrders.find((order) => order.id === dispatchState.selectedOrderId)
            : null;

        elements.dispatchHeldModel.textContent = dispatchState.prepModel || tt("dispatch_scene_hold_none");
        elements.dispatchSelectedGuest.textContent = activeGuest
            ? activeGuest.label[worldState.language]
            : tt("dispatch_scene_selected_none");

        let promptKey = "dispatch_scene_prompt_floor";
        if (dispatchState.sceneFocus?.type === "guest") {
            promptKey = "dispatch_scene_prompt_guest";
        } else if (dispatchState.selectedOrderId && dispatchState.prepModel) {
            promptKey = "dispatch_scene_prompt_serve";
        } else if (dispatchState.selectedOrderId) {
            promptKey = "dispatch_scene_prompt_bottle";
        }
        elements.dispatchScenePrompt.textContent = tt(promptKey);
    }

    function handleDispatchSceneInteract() {
        if (!dispatchState.running) {
            return;
        }

        const focus = dispatchState.sceneFocus;
        if (!focus) {
            return;
        }

        if (focus.type === "guest") {
            if (dispatchState.platedOrderId === focus.orderId) {
                serveDispatchOrder(focus.orderId);
                return;
            }

            selectDispatchOrder(focus.orderId);
            const order = dispatchState.activeOrders.find((item) => item.id === focus.orderId);
            if (order) {
                setDispatchFeedback("ready", {
                    en: `${order.label.en} is waiting. Go pick the right recipe bottle for this guest.`,
                    zh: `${order.label.zh} 正在等待，先去拿适合这位客人的正确配方。`
                });
                renderDispatchGame();
            }
            return;
        }

        if (focus.type === "bottle" && focus.modelKey) {
            setDispatchPrepModel(focus.modelKey);
            setDispatchFeedback("ready", {
                en: `${focus.modelKey} is in your hands. Take it to the kitchen and cook for the selected guest.`,
                zh: `你拿起了 ${focus.modelKey} 配方，带去厨房为当前客人处理。`
            });
            renderDispatchGame();
            return;
        }

        if (focus.type === "kitchen") {
            cookDispatchOrder();
        }
    }

    function moveDispatchScenePlayer(deltaTime) {
        if (worldState.openModalKey !== "model" || !dispatchState.running) {
            return;
        }

        let deltaX = 0;
        if (worldState.pressedKeys.has("arrowleft") || worldState.pressedKeys.has("a")) {
            deltaX -= 1;
        }
        if (worldState.pressedKeys.has("arrowright") || worldState.pressedKeys.has("d")) {
            deltaX += 1;
        }

        if (deltaX !== 0) {
            dispatchState.scenePlayerX = clamp(
                dispatchState.scenePlayerX + deltaX * cafeSceneConfig.speed * deltaTime,
                cafeSceneConfig.minX,
                cafeSceneConfig.maxX
            );
            renderDispatchScenePlayer();
        }

        dispatchState.sceneFocus = getSceneFocus();
        renderDispatchSceneMeta();
    }

    function tickDispatchScene(now) {
        const deltaTime = Math.min((now - dispatchState.sceneLastFrame) / 1000, 0.032);
        dispatchState.sceneLastFrame = now;
        moveDispatchScenePlayer(deltaTime);
        requestAnimationFrame(tickDispatchScene);
    }

    renderDispatchSceneMeta = function () {
        if (!elements.dispatchScenePrompt || !elements.dispatchHeldModel || !elements.dispatchSelectedGuest) {
            return;
        }

        const activeGuest = dispatchState.selectedOrderId
            ? dispatchState.activeOrders.find((order) => order.id === dispatchState.selectedOrderId)
            : null;

        elements.dispatchHeldModel.textContent = dispatchState.prepModel || tt("dispatch_scene_hold_none");
        elements.dispatchSelectedGuest.textContent = activeGuest
            ? activeGuest.label[worldState.language]
            : tt("dispatch_scene_selected_none");

        let promptKey = "dispatch_scene_prompt_floor";
        if (dispatchState.selectedOrderId) {
            promptKey = "dispatch_scene_prompt_bottle";
        } else if (dispatchState.sceneFocus?.type === "guest") {
            promptKey = "dispatch_scene_prompt_guest";
        }
        elements.dispatchScenePrompt.textContent = tt(promptKey);
    };

    renderDispatchOrders = function () {
        if (!elements.dispatchOrderGrid) {
            return;
        }

        elements.dispatchOrderGrid.innerHTML = "";
        dispatchState.activeOrders.forEach((order, index) => {
            const isSelected = dispatchState.selectedOrderId === order.id;
            const isNearby = dispatchState.sceneFocus?.type === "guest" && dispatchState.sceneFocus.orderId === order.id;
            const seat = document.createElement("article");
            seat.className = `cg-cafe-seat is-${order.scenarioType}${isSelected ? " is-selected" : ""}${isNearby ? " is-near" : ""}`;
            seat.style.left = `${cafeSceneConfig.guestSeatXs[index]}px`;
            seat.innerHTML = `
                <div class="cg-cafe-ticket">
                    <span class="cg-cafe-ticket-tag">${order.label[worldState.language]}</span>
                    <p>${order.hint[worldState.language]}</p>
                    <div class="cg-cafe-guest-timer">
                        <span class="cg-cafe-guest-timer-fill" style="width:${Math.max(0, (order.timeLeft / dispatchState.guestLifetime) * 100)}%"></span>
                    </div>
                </div>
                <div class="cg-cafe-guest-avatar is-${order.scenarioType}">
                    <span class="cg-cafe-guest-head"></span>
                    <span class="cg-cafe-guest-face"></span>
                    <span class="cg-cafe-guest-body"></span>
                </div>
                <div class="cg-cafe-seat-ui">
                    <span class="cg-cafe-seat-chip">${worldState.language === "en" ? (isSelected ? "Active order" : "Waiting") : (isSelected ? "当前订单" : "等待中")}</span>
                </div>
            `;
            seat.addEventListener("click", () => {
                selectDispatchOrder(order.id);
                renderDispatchGame();
            });
            elements.dispatchOrderGrid.appendChild(seat);
        });
    };

    submitGuestAnswer = function (modelKey) {
        if (!dispatchState.running || dispatchState.paused) {
            return;
        }

        const activeGuest = getActiveSceneGuest();
        if (!activeGuest) {
            return;
        }

        dispatchState.prepModel = modelKey;

        if (modelKey !== activeGuest.correctModel) {
            dispatchState.streak = 0;
            activeGuest.timeLeft = Math.max(1, activeGuest.timeLeft - 4);
            dispatchState.score = Math.max(0, dispatchState.score - 4);
            updateGlobalScore(-2, "reset", "status_retry");
            playFeedbackTone(260);
            renderDispatchGame();
            return;
        }

        dispatchState.score += 12 + Math.min(dispatchState.streak, 4) * 2;
        dispatchState.streak += 1;
        dispatchState.completedOrders += 1;
        dispatchState.activeOrders = dispatchState.activeOrders.filter((order) => order.id !== activeGuest.id);
        dispatchState.selectedOrderId = null;
        dispatchState.prepModel = null;
        fillDispatchSeats();

        if (dispatchState.completedOrders >= 8) {
            tasks.modelClear = true;
            updateMissionProgress();
        }

        updateGlobalScore(10, "up", "status_correct");
        playFeedbackTone(640);
        renderDispatchGame();
    };

    decayGuestTimers = function () {
        const expiredOrders = [];
        dispatchState.activeOrders.forEach((order) => {
            order.timeLeft -= 1;
            if (order.timeLeft <= 0) {
                expiredOrders.push(order);
            }
        });

        if (!expiredOrders.length) {
            return;
        }

        expiredOrders.forEach((order) => {
            dispatchState.failedOrders += 1;
            dispatchState.score = Math.max(0, dispatchState.score - 6);
            if (dispatchState.selectedOrderId === order.id) {
                dispatchState.selectedOrderId = null;
            }
        });
        dispatchState.activeOrders = dispatchState.activeOrders.filter((order) => order.timeLeft > 0);
        fillDispatchSeats();
        updateGlobalScore(-2, "reset", "status_retry");
        renderDispatchGame();
    };

    renderDispatchTokens = function () {
        if (!elements.dispatchTokenRack) {
            return;
        }

        elements.dispatchTokenRack.innerHTML = "";
        modelTokens.forEach((token, index) => {
            const button = document.createElement("button");
            const isSelected = dispatchState.prepModel === token.key;
            const isNearby = dispatchState.sceneFocus?.type === "bottle" && dispatchState.sceneFocus.modelKey === token.key;
            button.type = "button";
            button.className = `cg-cafe-bottle is-${token.accent}${isSelected ? " is-selected" : ""}${isNearby ? " is-near" : ""}`;
            button.dataset.model = token.key;
            button.style.left = `${cafeSceneConfig.bottleXs[index]}px`;
            button.innerHTML = `
                <span class="cg-cafe-bottle-cap"></span>
                <span class="cg-cafe-bottle-core">${token.key}</span>
            `;
            button.addEventListener("click", () => {
                setDispatchPrepModel(token.key);
                setDispatchFeedback("ready", {
                    en: `${token.key} recipe selected. Take it to the kitchen.`,
                    zh: `已选中 ${token.key} 配方，把它带去厨房。`
                });
                renderDispatchGame();
            });
            elements.dispatchTokenRack.appendChild(button);
        });
    };

    renderDispatchOrders = function () {
        if (!elements.dispatchOrderGrid) {
            return;
        }

        elements.dispatchOrderGrid.innerHTML = "";
        dispatchState.activeOrders.forEach((order, index) => {
            const isSelected = dispatchState.selectedOrderId === order.id;
            const isCooked = dispatchState.platedOrderId === order.id;
            const isNearby = dispatchState.sceneFocus?.type === "guest" && dispatchState.sceneFocus.orderId === order.id;
            const seat = document.createElement("article");
            seat.className = `cg-cafe-seat is-${order.scenarioType}${isSelected ? " is-selected" : ""}${isCooked ? " is-cooked" : ""}${isNearby ? " is-near" : ""}`;
            seat.style.left = `${cafeSceneConfig.guestSeatXs[index]}px`;
            seat.innerHTML = `
                <div class="cg-cafe-ticket">
                    <span class="cg-cafe-ticket-tag">${order.label[worldState.language]}</span>
                    <p>${order.hint[worldState.language]}</p>
                </div>
                <div class="cg-cafe-guest-avatar is-${order.scenarioType}">
                    <span class="cg-cafe-guest-head"></span>
                    <span class="cg-cafe-guest-face"></span>
                    <span class="cg-cafe-guest-body"></span>
                </div>
                <div class="cg-cafe-seat-ui">
                    <span class="cg-cafe-seat-chip">${isCooked ? tt("dispatch_scene_order_ready") : (isSelected ? tt("dispatch_scene_select_action") : tt("dispatch_scene_select_action"))}</span>
                    <button class="cg-order-action${isCooked ? " cg-order-action-serve is-live" : ""}" type="button">
                        ${isCooked ? tt("dispatch_scene_serve_action") : tt("dispatch_scene_select_action")}
                    </button>
                </div>
            `;
            seat.querySelector("button").addEventListener("click", () => {
                if (isCooked) {
                    serveDispatchOrder(order.id);
                } else {
                    selectDispatchOrder(order.id);
                    setDispatchFeedback("ready", {
                        en: `${order.label.en} is waiting. Pick the correct recipe, cook it, then come back to serve.`,
                        zh: `${order.label.zh} 正在等待。先去拿正确配方、完成烹饪，再回来上菜。`
                    });
                    renderDispatchGame();
                }
            });
            elements.dispatchOrderGrid.appendChild(seat);
        });
    };

    renderDispatchKitchen = function () {
        if (!elements.dispatchPotLiquid || !elements.dispatchPotLabel || !elements.dispatchServeDish || !elements.dispatchPlateLabel) {
            return;
        }

        if (dispatchState.prepModel) {
            elements.dispatchPotLiquid.style.background = getDishPalette(dispatchState.prepModel);
            elements.dispatchPotLiquid.classList.add("is-filled");
            elements.dispatchPotLabel.textContent = worldState.language === "en"
                ? `${dispatchState.prepModel} recipe ready for the stove`
                : `${dispatchState.prepModel} 配方已拿在手里，可以去烹饪`;
        } else {
            elements.dispatchPotLiquid.style.background = "transparent";
            elements.dispatchPotLiquid.classList.remove("is-filled");
            elements.dispatchPotLabel.textContent = tt("dispatch_pot_label");
        }

        const platedOrder = dispatchState.activeOrders.find((item) => item.id === dispatchState.platedOrderId);
        if (platedOrder) {
            elements.dispatchServeDish.style.background = getDishPalette(platedOrder.correctModel);
            elements.dispatchServeDish.className = `cg-serve-dish is-visible is-${platedOrder.scenarioType}`;
            elements.dispatchPlateLabel.textContent = worldState.language === "en"
                ? `Dish for ${platedOrder.label.en} is ready. Walk it back to the right guest.`
                : `${platedOrder.label.zh} 的菜已经做好了，把它送回正确的客人。`;
        } else {
            elements.dispatchServeDish.className = "cg-serve-dish";
            elements.dispatchServeDish.style.background = "transparent";
            elements.dispatchPlateLabel.textContent = tt("dispatch_plate_label");
        }
    };

    renderDispatchGame = function () {
        elements.dispatchTimeText.textContent = `${dispatchState.timeLeft}s`;
        updateProgressBar(elements.dispatchProgressText, elements.dispatchProgressFill, dispatchState.completedOrders, dispatchState.targetOrders);
        elements.dispatchScoreText.textContent = String(dispatchState.score);
        elements.dispatchStreakText.textContent = String(dispatchState.streak);
        elements.dispatchRatingText.textContent = getRatingFromScore(dispatchState.score, { s: 120, a: 90, b: 65 });
        if (elements.dispatchSkipText) {
            elements.dispatchSkipText.textContent = String(dispatchState.skipsLeft);
        }
        if (elements.dispatchSkip) {
            elements.dispatchSkip.disabled = dispatchState.skipsLeft <= 0 || !dispatchState.running;
        }
        renderDispatchTokens();
        renderDispatchKitchen();
        renderDispatchOrders();
        renderDispatchScenePlayer();
        dispatchState.sceneFocus = getSceneFocus();
        renderDispatchSceneMeta();
    };

    startDispatchRound = function () {
        stopDispatchRound();
        dispatchState.timeLeft = dispatchState.duration;
        dispatchState.score = 0;
        dispatchState.streak = 0;
        dispatchState.completedOrders = 0;
        dispatchState.skipsLeft = 1;
        dispatchState.activeOrders = [];
        dispatchState.nextOrderId = 1;
        dispatchState.tickCount = 0;
        dispatchState.draggingModel = null;
        dispatchState.selectedOrderId = null;
        dispatchState.prepModel = null;
        dispatchState.platedOrderId = null;
        dispatchState.scenePlayerX = 420;
        dispatchState.running = true;
        resetDispatchFeedback();
        fillDispatchSeats();
        renderDispatchGame();

        dispatchState.tickHandle = setInterval(() => {
            dispatchState.timeLeft -= 1;
            if (dispatchState.completedOrders >= dispatchState.targetOrders || dispatchState.timeLeft <= 0) {
                finishDispatchRound();
            } else {
                renderDispatchGame();
            }
        }, 1000);
    };

    setDispatchPrepModel = function (tokenKey) {
        if (!dispatchState.running) {
            return;
        }
        dispatchState.prepModel = tokenKey;
        dispatchState.draggingModel = tokenKey;
        renderDispatchGame();
    };

    cookDispatchOrder = function () {
        if (!dispatchState.running) {
            return;
        }
        const order = getActiveSceneGuest();
        if (!order) {
            setDispatchFeedback("wrong", {
                en: "Talk to a guest first so you know which order to prepare.",
                zh: "先和一位客人互动，这样你才知道要做哪一单。"
            });
            return;
        }
        if (!dispatchState.prepModel) {
            setDispatchFeedback("wrong", {
                en: "Pick one recipe bottle from the shelf before cooking.",
                zh: "先去配方架拿一个正确的配方，再开始烹饪。"
            });
            return;
        }
        if (dispatchState.prepModel !== order.correctModel) {
            const wrongModel = dispatchState.prepModel;
            dispatchState.streak = 0;
            dispatchState.prepModel = null;
            updateGlobalScore(-2, "reset", "status_retry");
            setDispatchFeedback("wrong", {
                en: `${wrongModel} does not fit ${order.label.en}. ${order.explanation.en}`,
                zh: `${wrongModel} 不适合 ${order.label.zh}。${order.explanation.zh}`
            });
            playFeedbackTone(260);
            renderDispatchGame();
            return;
        }

        dispatchState.platedOrderId = order.id;
        setDispatchFeedback("correct", {
            en: `${order.label.en} is cooked. Walk it back to the matching guest.`,
            zh: `${order.label.zh} 已经做好了，把它送回给对应的客人。`
        });
        playFeedbackTone(560);
        renderDispatchGame();
    };

    serveDispatchOrder = function (orderId) {
        if (!dispatchState.running || dispatchState.platedOrderId !== orderId) {
            return;
        }
        const order = dispatchState.activeOrders.find((item) => item.id === orderId);
        if (!order) {
            return;
        }

        dispatchState.score += 10 + Math.min(dispatchState.streak, 4) * 2;
        dispatchState.streak += 1;
        dispatchState.completedOrders += 1;
        dispatchState.activeOrders = dispatchState.activeOrders.filter((item) => item.id !== orderId);
        dispatchState.selectedOrderId = null;
        dispatchState.platedOrderId = null;
        dispatchState.prepModel = null;
        fillDispatchSeats();

        if (dispatchState.completedOrders >= 8) {
            tasks.modelClear = true;
            updateMissionProgress();
        }

        updateGlobalScore(10, "up", "status_correct");
        setDispatchFeedback("correct", {
            en: `Served to the right guest. ${order.explanation.en}`,
            zh: `成功送到了正确客人。${order.explanation.zh}`
        });
        playFeedbackTone(640);
        renderDispatchGame();
    };

    skipDispatchOrder = function () {
        if (!dispatchState.running || dispatchState.skipsLeft <= 0 || dispatchState.activeOrders.length === 0) {
            return;
        }

        const target = getActiveSceneGuest();
        if (!target) {
            return;
        }

        dispatchState.skipsLeft -= 1;
        dispatchState.activeOrders = dispatchState.activeOrders.filter((order) => order.id !== target.id);
        dispatchState.selectedOrderId = null;
        dispatchState.platedOrderId = null;
        dispatchState.prepModel = null;
        fillDispatchSeats();

        setDispatchFeedback("ready", {
            en: `Skipped ${target.label.en}. A new guest has taken the seat.`,
            zh: `已跳过 ${target.label.zh}，新的客人已经坐下。`
        });
        renderDispatchGame();
    };

    function setDispatchOverlayState(isPaused, showEnd) {
        dispatchState.paused = isPaused;
        if (elements.dispatchPauseOverlay) {
            elements.dispatchPauseOverlay.classList.toggle("is-visible", isPaused && !showEnd);
            elements.dispatchPauseOverlay.setAttribute("aria-hidden", isPaused && !showEnd ? "false" : "true");
        }
        if (elements.dispatchEndOverlay) {
            elements.dispatchEndOverlay.classList.toggle("is-visible", !!showEnd);
            elements.dispatchEndOverlay.setAttribute("aria-hidden", showEnd ? "false" : "true");
        }
        if (elements.dispatchPauseToggle) {
            elements.dispatchPauseToggle.textContent = isPaused && !showEnd ? "Resume" : "Pause";
        }
    }

    function submitGuestAnswer(modelKey) {
        if (!dispatchState.running || dispatchState.paused) {
            return;
        }

        const activeGuest = getActiveSceneGuest();
        if (!activeGuest) {
            setDispatchFeedback("ready", {
                en: "Move to a guest first, then choose the matching colour model.",
                zh: "先移动到一位客人旁边，再选择对应的颜色模型。"
            });
            return;
        }

        dispatchState.prepModel = modelKey;

        if (modelKey !== activeGuest.correctModel) {
            dispatchState.streak = 0;
            activeGuest.timeLeft = Math.max(1, activeGuest.timeLeft - 4);
            dispatchState.score = Math.max(0, dispatchState.score - 4);
            updateGlobalScore(-2, "reset", "status_retry");
            setDispatchFeedback("wrong", {
                en: `${modelKey} is not right for ${activeGuest.label.en}. ${activeGuest.explanation.en}`,
                zh: `${modelKey} 不适合 ${activeGuest.label.zh}。${activeGuest.explanation.zh}`
            });
            playFeedbackTone(260);
            renderDispatchGame();
            return;
        }

        dispatchState.score += 12 + Math.min(dispatchState.streak, 4) * 2;
        dispatchState.streak += 1;
        dispatchState.completedOrders += 1;
        dispatchState.activeOrders = dispatchState.activeOrders.filter((order) => order.id !== activeGuest.id);
        dispatchState.selectedOrderId = null;
        dispatchState.prepModel = null;
        fillDispatchSeats();

        if (dispatchState.completedOrders >= 8) {
            tasks.modelClear = true;
            updateMissionProgress();
        }

        updateGlobalScore(10, "up", "status_correct");
        setDispatchFeedback("correct", {
            en: `${activeGuest.label.en} was served correctly. ${activeGuest.explanation.en}`,
            zh: `${activeGuest.label.zh} 已经成功送达。${activeGuest.explanation.zh}`
        });
        playFeedbackTone(640);
        renderDispatchGame();
    }

    function decayGuestTimers() {
        const expiredOrders = [];
        dispatchState.activeOrders.forEach((order) => {
            order.timeLeft -= 1;
            if (order.timeLeft <= 0) {
                expiredOrders.push(order);
            }
        });

        if (!expiredOrders.length) {
            return;
        }

        expiredOrders.forEach((order) => {
            dispatchState.failedOrders += 1;
            dispatchState.score = Math.max(0, dispatchState.score - 6);
            if (dispatchState.selectedOrderId === order.id) {
                dispatchState.selectedOrderId = null;
            }
        });
        dispatchState.activeOrders = dispatchState.activeOrders.filter((order) => order.timeLeft > 0);
        fillDispatchSeats();
        updateGlobalScore(-2, "reset", "status_retry");
        setDispatchFeedback("wrong", {
            en: "A guest left before being served. Move faster to protect your score.",
            zh: "有客人在等待结束前离开了。下次需要更快地完成对应送餐。"
        });
    }

    handleDispatchSceneInteract = function () {
        if (!dispatchState.running || dispatchState.paused) {
            return;
        }

        const focus = dispatchState.sceneFocus;
        if (!focus || focus.type !== "guest") {
            return;
        }

        selectDispatchOrder(focus.orderId);
        renderDispatchGame();
    };

    renderDispatchSceneMeta = function () {
        if (!elements.dispatchScenePrompt || !elements.dispatchHeldModel || !elements.dispatchSelectedGuest) {
            return;
        }

        const activeGuest = dispatchState.selectedOrderId
            ? dispatchState.activeOrders.find((order) => order.id === dispatchState.selectedOrderId)
            : null;

        elements.dispatchHeldModel.textContent = dispatchState.prepModel || tt("dispatch_scene_hold_none");
        elements.dispatchSelectedGuest.textContent = activeGuest
            ? activeGuest.label[worldState.language]
            : tt("dispatch_scene_selected_none");

        let promptKey = "dispatch_scene_prompt_floor";
        if (dispatchState.selectedOrderId) {
            promptKey = "dispatch_scene_prompt_bottle";
        } else if (dispatchState.sceneFocus?.type === "guest") {
            promptKey = "dispatch_scene_prompt_guest";
        }
        elements.dispatchScenePrompt.textContent = tt(promptKey);
    };

    renderDispatchTokens = function () {
        if (!elements.dispatchTokenRack) {
            return;
        }

        elements.dispatchTokenRack.innerHTML = "";
        modelTokens.forEach((token) => {
            const button = document.createElement("button");
            const isSelected = dispatchState.prepModel === token.key;
            button.type = "button";
            button.className = `cg-cafe-answer-button is-${token.accent}${isSelected ? " is-selected" : ""}`;
            button.dataset.model = token.key;
            button.innerHTML = `
                <span class="cg-cafe-answer-chip">${token.key}</span>
                <span class="cg-cafe-answer-copy">${token.key}</span>
            `;
            button.addEventListener("click", () => {
                submitGuestAnswer(token.key);
            });
            elements.dispatchTokenRack.appendChild(button);
        });
    };

    renderDispatchOrders = function () {
        if (!elements.dispatchOrderGrid) {
            return;
        }

        elements.dispatchOrderGrid.innerHTML = "";
        dispatchState.activeOrders.forEach((order, index) => {
            const isSelected = dispatchState.selectedOrderId === order.id;
            const isNearby = dispatchState.sceneFocus?.type === "guest" && dispatchState.sceneFocus.orderId === order.id;
            const seat = document.createElement("article");
            seat.className = `cg-cafe-seat is-${order.scenarioType}${isSelected ? " is-selected" : ""}${isNearby ? " is-near" : ""}`;
            seat.style.left = `${cafeSceneConfig.guestSeatXs[index]}px`;
            seat.innerHTML = `
                <div class="cg-cafe-ticket">
                    <span class="cg-cafe-ticket-tag">${order.label[worldState.language]}</span>
                    <p>${order.hint[worldState.language]}</p>
                    <div class="cg-cafe-guest-timer">
                        <span class="cg-cafe-guest-timer-fill" style="width:${Math.max(0, (order.timeLeft / dispatchState.guestLifetime) * 100)}%"></span>
                    </div>
                </div>
                <div class="cg-cafe-guest-avatar is-${order.scenarioType}">
                    <span class="cg-cafe-guest-head"></span>
                    <span class="cg-cafe-guest-face"></span>
                    <span class="cg-cafe-guest-body"></span>
                </div>
                <div class="cg-cafe-seat-ui">
                    <span class="cg-cafe-seat-chip">${worldState.language === "en" ? (isSelected ? "Active order" : "Waiting") : (isSelected ? "当前订单" : "等待中")}</span>
                </div>
            `;
            seat.addEventListener("click", () => {
                selectDispatchOrder(order.id);
                setDispatchFeedback("ready", {
                    en: `${order.label.en} is active. Choose the matching colour model now.`,
                    zh: `${order.label.zh} 已锁定。现在为这位客人选择匹配的颜色模型。`
                });
                renderDispatchGame();
            });
            elements.dispatchOrderGrid.appendChild(seat);
        });
    };

    renderDispatchKitchen = function () {
        renderDispatchSceneMeta();
    };

    renderDispatchGame = function () {
        if (elements.dispatchTimeText) {
            elements.dispatchTimeText.textContent = `${dispatchState.timeLeft}s`;
        }
        if (elements.dispatchProgressText) {
            elements.dispatchProgressText.textContent = `${dispatchState.completedOrders} / ${dispatchState.targetOrders}`;
        }
        if (elements.dispatchScoreText) {
            elements.dispatchScoreText.textContent = String(dispatchState.score);
        }
        if (elements.dispatchStreakText) {
            elements.dispatchStreakText.textContent = String(dispatchState.streak);
        }
        if (elements.dispatchRatingText) {
            elements.dispatchRatingText.textContent = getRatingFromScore(dispatchState.score, { s: 120, a: 90, b: 65 });
        }
        if (elements.dispatchMissedText) {
            elements.dispatchMissedText.textContent = String(dispatchState.failedOrders);
        }
        renderDispatchTokens();
        renderDispatchOrders();
        renderDispatchScenePlayer();
        dispatchState.sceneFocus = getSceneFocus();
        renderDispatchSceneMeta();
    };

    startDispatchRound = function () {
        stopDispatchRound();
        dispatchState.timeLeft = dispatchState.duration;
        dispatchState.score = 0;
        dispatchState.streak = 0;
        dispatchState.completedOrders = 0;
        dispatchState.failedOrders = 0;
        dispatchState.activeOrders = [];
        dispatchState.nextOrderId = 1;
        dispatchState.selectedOrderId = null;
        dispatchState.prepModel = null;
        dispatchState.platedOrderId = null;
        dispatchState.scenePlayerX = 420;
        dispatchState.running = true;
        dispatchState.paused = false;
        resetDispatchFeedback();
        setDispatchOverlayState(false, false);
        fillDispatchSeats();
        renderDispatchGame();

        dispatchState.tickHandle = setInterval(() => {
            if (dispatchState.paused) {
                return;
            }
            dispatchState.timeLeft -= 1;
            decayGuestTimers();
            if (dispatchState.completedOrders + dispatchState.failedOrders >= dispatchState.targetOrders || dispatchState.timeLeft <= 0) {
                finishDispatchRound();
            } else {
                renderDispatchGame();
            }
        }, 1000);
    };

    skipDispatchOrder = function () {
        return;
    };

    finishDispatchRound = function () {
        stopDispatchRound();
        setDispatchOverlayState(false, true);
        const rating = getRatingFromScore(dispatchState.score, { s: 120, a: 90, b: 65 });
        const cleared = dispatchState.completedOrders;
        const missed = dispatchState.failedOrders;
        const success = cleared >= 8;
        if (success) {
            tasks.modelClear = true;
            updateMissionProgress();
        }
        setDispatchFeedback(success ? "correct" : "wrong", {
            en: success
                ? `Cafe clear. You served ${cleared} guests and missed ${missed}.`
                : `Round over. You served ${cleared} guests and missed ${missed}. Try to protect more timers next run.`,
            zh: success
                ? `咖啡馆挑战完成。你成功服务了 ${cleared} 位客人，错过了 ${missed} 位。`
                : `本轮结束。你成功服务了 ${cleared} 位客人，错过了 ${missed} 位。下次要尽量保护更多等待条。`
        });
        if (elements.dispatchEndTitle) {
            elements.dispatchEndTitle.textContent = success ? "Cafe Round Clear" : "Cafe Round Over";
        }
        if (elements.dispatchEndText) {
            elements.dispatchEndText.textContent = elements.matchFeedbackText?.textContent || "";
        }
        if (elements.dispatchEndCleared) {
            elements.dispatchEndCleared.textContent = String(cleared);
        }
        if (elements.dispatchEndRating) {
            elements.dispatchEndRating.textContent = rating;
        }
        if (elements.dispatchEndMissed) {
            elements.dispatchEndMissed.textContent = String(missed);
        }
        renderDispatchGame();
    };

    finishDispatchRound = function () {
        stopDispatchRound();
        setDispatchOverlayState(false, true);
        const rating = getRatingFromScore(dispatchState.score, { s: 120, a: 90, b: 65 });
        const cleared = dispatchState.completedOrders;
        const missed = dispatchState.failedOrders;
        const success = cleared >= 8;
        if (success) {
            tasks.modelClear = true;
            updateMissionProgress();
        }
        if (elements.dispatchEndTitle) {
            elements.dispatchEndTitle.textContent = worldState.language === "en"
                ? (success ? "Cafe Round Clear" : "Cafe Round Over")
                : (success ? "咖啡馆挑战完成" : "咖啡馆本轮结束");
        }
        if (elements.dispatchEndText) {
            elements.dispatchEndText.textContent = worldState.language === "en"
                ? (success
                    ? `You served ${cleared} guests and only missed ${missed}.`
                    : `You served ${cleared} guests and missed ${missed}. Keep more customer timers alive next round.`)
                : (success
                    ? `你成功服务了 ${cleared} 位客人，只错过了 ${missed} 位。`
                    : `你成功服务了 ${cleared} 位客人，错过了 ${missed} 位。下一轮尽量保护更多客人的倒计时。`);
        }
        if (elements.dispatchEndCleared) {
            elements.dispatchEndCleared.textContent = String(cleared);
        }
        if (elements.dispatchEndRating) {
            elements.dispatchEndRating.textContent = rating;
        }
        if (elements.dispatchEndMissed) {
            elements.dispatchEndMissed.textContent = String(missed);
        }
        renderDispatchGame();
    };

    moveDispatchScenePlayer = function (deltaTime) {
        if (worldState.openModalKey !== "model" || !dispatchState.running || dispatchState.paused) {
            return;
        }

        let deltaX = 0;
        if (worldState.pressedKeys.has("arrowleft") || worldState.pressedKeys.has("a")) {
            deltaX -= 1;
        }
        if (worldState.pressedKeys.has("arrowright") || worldState.pressedKeys.has("d")) {
            deltaX += 1;
        }

        if (deltaX !== 0) {
            dispatchState.scenePlayerX = clamp(
                dispatchState.scenePlayerX + deltaX * cafeSceneConfig.speed * deltaTime,
                cafeSceneConfig.minX,
                cafeSceneConfig.maxX
            );
            renderDispatchScenePlayer();
        }

        dispatchState.sceneFocus = getSceneFocus();
        renderDispatchSceneMeta();
    };

    function bindPreferenceEvents() {
        const prefSound = document.getElementById("pref-sound");
        const prefHints = document.getElementById("pref-hints");
        const prefMotion = document.getElementById("pref-motion");

        if (prefSound && !prefSound.dataset.bound) {
            prefSound.dataset.bound = "true";
            prefSound.addEventListener("click", () => {
                worldState.soundEnabled = !worldState.soundEnabled;
                applyStaticTranslations();
                syncAudioState();
            });
        }
        if (prefHints && !prefHints.dataset.bound) {
            prefHints.dataset.bound = "true";
            prefHints.addEventListener("click", () => {
                worldState.showHints = !worldState.showHints;
                renderWorldPanels();
                updateStationPrompt();
                syncPreferenceState();
            });
        }
        if (prefMotion && !prefMotion.dataset.bound) {
            prefMotion.dataset.bound = "true";
            prefMotion.addEventListener("click", () => {
                worldState.reducedMotion = !worldState.reducedMotion;
                syncPreferenceState();
            });
        }
    }

    const audioState = {
        context: null,
        masterGain: null,
        bgmGain: null,
        sfxGain: null,
        started: false,
        schedulerHandle: null,
        nextNoteTime: 0,
        stepIndex: 0
    };

    const bgmLeadPattern = [
        "E5", "G5", "A5", "G5",
        "E5", "D5", "C5", "D5",
        "G5", "A5", "B5", "A5",
        "G5", "E5", "D5", null
    ];

    const bgmBassPattern = [
        "C3", null, "G3", null,
        "A3", null, "E3", null,
        "F3", null, "C3", null,
        "G3", null, "C3", null
    ];

    const bgmChordPattern = [
        ["C4", "E4", "G4"],
        ["C4", "E4", "G4"],
        ["A3", "C4", "E4"],
        ["A3", "C4", "E4"],
        ["F3", "A3", "C4"],
        ["F3", "A3", "C4"],
        ["G3", "B3", "D4"],
        ["G3", "B3", "D4"]
    ];

    const noteFrequencies = {
        C3: 130.81,
        D3: 146.83,
        E3: 164.81,
        F3: 174.61,
        G3: 196.0,
        A3: 220.0,
        B3: 246.94,
        C4: 261.63,
        D4: 293.66,
        E4: 329.63,
        F4: 349.23,
        G4: 392.0,
        A4: 440.0,
        B4: 493.88,
        C5: 523.25,
        D5: 587.33,
        E5: 659.25,
        G5: 783.99,
        A5: 880.0,
        B5: 987.77
    };

    function ensureAudioContext() {
        if (audioState.context) {
            return audioState.context;
        }

        const AudioContextRef = window.AudioContext || window.webkitAudioContext;
        if (!AudioContextRef) {
            return null;
        }

        const context = new AudioContextRef();
        const masterGain = context.createGain();
        const bgmGain = context.createGain();
        const sfxGain = context.createGain();

        masterGain.gain.value = 0.34;
        bgmGain.gain.value = 0.22;
        sfxGain.gain.value = 0.24;

        bgmGain.connect(masterGain);
        sfxGain.connect(masterGain);
        masterGain.connect(context.destination);

        audioState.context = context;
        audioState.masterGain = masterGain;
        audioState.bgmGain = bgmGain;
        audioState.sfxGain = sfxGain;
        return context;
    }

    function playSynthNote(frequency, startTime, duration, type, volume, targetGain) {
        const context = ensureAudioContext();
        if (!context || !frequency) {
            return;
        }

        const oscillator = context.createOscillator();
        const gainNode = context.createGain();
        oscillator.type = type;
        oscillator.frequency.setValueAtTime(frequency, startTime);
        gainNode.gain.setValueAtTime(0.0001, startTime);
        gainNode.gain.exponentialRampToValueAtTime(volume, startTime + 0.02);
        gainNode.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);
        oscillator.connect(gainNode);
        gainNode.connect(targetGain);
        oscillator.start(startTime);
        oscillator.stop(startTime + duration + 0.03);
    }

    function playClickSound() {
        if (!worldState.soundEnabled) {
            return;
        }
        const context = ensureAudioContext();
        if (!context) {
            return;
        }
        const now = context.currentTime + 0.001;
        playSynthNote(920, now, 0.045, "triangle", 0.11, audioState.sfxGain);
        playSynthNote(1240, now + 0.018, 0.04, "sine", 0.06, audioState.sfxGain);
    }

    function playStartupJingle() {
        if (!worldState.soundEnabled) {
            return;
        }
        const context = ensureAudioContext();
        if (!context) {
            return;
        }
        const now = context.currentTime + 0.02;
        playSynthNote(noteFrequencies.C5, now, 0.12, "triangle", 0.11, audioState.sfxGain);
        playSynthNote(noteFrequencies.E5, now + 0.08, 0.12, "triangle", 0.11, audioState.sfxGain);
        playSynthNote(noteFrequencies.G5, now + 0.16, 0.14, "triangle", 0.11, audioState.sfxGain);
    }

    function stopBgmLoop() {
        if (audioState.schedulerHandle) {
            clearInterval(audioState.schedulerHandle);
            audioState.schedulerHandle = null;
        }
    }

    function scheduleBgmWindow() {
        const context = ensureAudioContext();
        if (!context || !worldState.soundEnabled) {
            return;
        }

        const lookAhead = 0.6;
        const stepDuration = 60 / 126 / 2;

        while (audioState.nextNoteTime < context.currentTime + lookAhead) {
            const step = audioState.stepIndex % bgmLeadPattern.length;
            const lead = bgmLeadPattern[step];
            const bass = bgmBassPattern[step];
            const chord = bgmChordPattern[Math.floor(step / 2) % bgmChordPattern.length];
            const startTime = audioState.nextNoteTime;

            if (lead) {
                playSynthNote(noteFrequencies[lead], startTime, stepDuration * 0.86, "triangle", 0.075, audioState.bgmGain);
            }
            if (bass) {
                playSynthNote(noteFrequencies[bass], startTime, stepDuration * 0.95, "sine", 0.05, audioState.bgmGain);
            }

            if (chord && step % 2 === 0) {
                chord.forEach((note, index) => {
                    playSynthNote(noteFrequencies[note], startTime + index * 0.006, stepDuration * 1.55, "sawtooth", 0.016, audioState.bgmGain);
                });
            }

            if (step % 4 === 0) {
                playSynthNote(98, startTime, 0.08, "sine", 0.028, audioState.bgmGain);
                playSynthNote(1567.98, startTime + 0.02, 0.05, "sine", 0.028, audioState.bgmGain);
            } else if (step % 2 === 1) {
                playSynthNote(1318.51, startTime, 0.03, "triangle", 0.018, audioState.bgmGain);
            }

            audioState.nextNoteTime += stepDuration;
            audioState.stepIndex += 1;
        }
    }

    function startBgmLoop() {
        const context = ensureAudioContext();
        if (!context || audioState.schedulerHandle) {
            return;
        }

        audioState.nextNoteTime = context.currentTime + 0.06;
        audioState.stepIndex = 0;
        scheduleBgmWindow();
        audioState.schedulerHandle = window.setInterval(scheduleBgmWindow, 120);
    }

    function syncAudioState() {
        const context = ensureAudioContext();
        if (!context || !audioState.masterGain || !audioState.bgmGain) {
            return;
        }

        const now = context.currentTime;
        const masterTarget = worldState.soundEnabled ? 0.34 : 0.0001;
        const bgmTarget = worldState.soundEnabled ? 0.22 : 0.0001;
        audioState.masterGain.gain.cancelScheduledValues(now);
        audioState.bgmGain.gain.cancelScheduledValues(now);
        audioState.masterGain.gain.setTargetAtTime(masterTarget, now, 0.06);
        audioState.bgmGain.gain.setTargetAtTime(bgmTarget, now, 0.08);

        if (worldState.soundEnabled && audioState.started) {
            startBgmLoop();
        } else if (!worldState.soundEnabled) {
            stopBgmLoop();
        }
    }

    async function unlockAudio() {
        const context = ensureAudioContext();
        if (!context) {
            return;
        }

        try {
            await context.resume();
            audioState.started = true;
            playStartupJingle();
            syncAudioState();
            startBgmLoop();
        } catch (error) {
            console.warn("Audio unlock skipped", error);
        }
    }

    playFeedbackTone = function (frequency) {
        if (!worldState.soundEnabled) {
            return;
        }
        const context = ensureAudioContext();
        if (!context) {
            return;
        }
        const now = context.currentTime + 0.001;
        playSynthNote(frequency, now, 0.11, "triangle", 0.085, audioState.sfxGain);
        playSynthNote(frequency * 1.5, now + 0.02, 0.08, "sine", 0.032, audioState.sfxGain);
    };

    function bindGlobalAudioInteractions() {
        const unlockOnce = () => {
            unlockAudio();
            document.removeEventListener("pointerdown", unlockOnce);
            document.removeEventListener("keydown", unlockOnce);
        };

        document.addEventListener("pointerdown", unlockOnce, { once: true });
        document.addEventListener("keydown", unlockOnce, { once: true });

        document.addEventListener("click", (event) => {
            const interactive = event.target.closest("button, a, .cg-order-card, .cg-station, .cg-landmark");
            if (interactive) {
                playClickSound();
            }
        }, true);
    }

    function attachUpgradeEvents() {
        interceptAction(elements.restartDispatch, "confirm_restart_dispatch", startDispatchRound);
        interceptAction(elements.dispatchCook, null, cookDispatchOrder);
        interceptAction(elements.dispatchSkip, "confirm_skip_dispatch", skipDispatchOrder);
        interceptAction(elements.restartHue, "confirm_restart_hue", startWorkbenchRound);
        interceptAction(elements.checkHue, null, evaluateWorkbenchMix);
        interceptAction(elements.resetHue, "confirm_reset_hue", resetWorkbenchMix);

        if (elements.dispatchClearPrep) {
            elements.dispatchClearPrep.addEventListener("click", (event) => {
                event.preventDefault();
                event.stopImmediatePropagation();
                dispatchState.prepModel = null;
                renderDispatchGame();
            }, true);
        }

        if (elements.dispatchPotSlot) {
            elements.dispatchPotSlot.addEventListener("click", () => {
                cookDispatchOrder();
            });
        }

        elements.soundToggle.addEventListener("click", () => {
            renderPreferenceButtons();
            syncAudioState();
        });

        if (elements.dispatchPauseToggle && !elements.dispatchPauseToggle.dataset.bound) {
            elements.dispatchPauseToggle.dataset.bound = "true";
            elements.dispatchPauseToggle.addEventListener("click", () => {
                if (!dispatchState.running) {
                    return;
                }
                setDispatchOverlayState(!dispatchState.paused, false);
                renderDispatchGame();
            });
        }

        if (elements.dispatchResumeButton && !elements.dispatchResumeButton.dataset.bound) {
            elements.dispatchResumeButton.dataset.bound = "true";
            elements.dispatchResumeButton.addEventListener("click", () => {
                setDispatchOverlayState(false, false);
                renderDispatchGame();
            });
        }

        if (elements.dispatchRestartOverlay && !elements.dispatchRestartOverlay.dataset.bound) {
            elements.dispatchRestartOverlay.dataset.bound = "true";
            elements.dispatchRestartOverlay.addEventListener("click", () => {
                startDispatchRound();
            });
        }

        if (elements.dispatchCloseOverlay && !elements.dispatchCloseOverlay.dataset.bound) {
            elements.dispatchCloseOverlay.dataset.bound = "true";
            elements.dispatchCloseOverlay.addEventListener("click", () => {
                closeModal();
            });
        }

        document.addEventListener("keydown", (event) => {
            if (worldState.openModalKey !== "model") {
                return;
            }
            const key = event.key.toLowerCase();
            if (key === "p") {
                event.preventDefault();
                setDispatchOverlayState(!dispatchState.paused, false);
                renderDispatchGame();
                return;
            }
            if (key === "enter" || key === "e" || key === " ") {
                event.preventDefault();
                event.stopPropagation();
                handleDispatchSceneInteract();
            }
        }, true);
    }

    injectGatePolicyPanel();
    installCafeScene();
    fixStaticNodes();
    bindPreferenceEvents();
    bindGlobalAudioInteractions();
    attachUpgradeEvents();
    applyStaticTranslations();
    syncAudioState();
    renderDispatchGame();
    renderWorkbench();
    renderWorldPanels();
    updateStationPrompt();
    requestAnimationFrame(tickDispatchScene);
})();
