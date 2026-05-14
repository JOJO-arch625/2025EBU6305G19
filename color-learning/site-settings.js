(function () {
    var STORAGE_KEY = 'colorLearningSiteSettings';
    var LEGACY_LANG_KEY = 'colorLearningSiteLang';
    var LEGACY_TEST_LANG_KEY = 'colorLearningTestLang';
    var LEGACY_TEST_FONT_KEY = 'colorLearningTestFontSize';

    var FONT_MIN = 60;
    var FONT_MAX = 160;
    var FONT_STEP = 10;
    var FONT_DEFAULT = 100;

    function clamp(value, min, max) {
        return Math.min(max, Math.max(min, value));
    }

    function readStored() {
        try {
            var raw = localStorage.getItem(STORAGE_KEY);
            if (raw) {
                var parsed = JSON.parse(raw);
                if (parsed && typeof parsed === 'object') {
                    return parsed;
                }
            }
        } catch (e) {}
        return null;
    }

    function migrateLegacy() {
        var stored = readStored();
        if (stored) return stored;

        var legacy = {};
        try {
            var lang = localStorage.getItem(LEGACY_LANG_KEY) || localStorage.getItem(LEGACY_TEST_LANG_KEY);
            if (lang === 'zh' || lang === 'en') {
                legacy.lang = lang;
            }
            var font = Number(localStorage.getItem(LEGACY_TEST_FONT_KEY));
            if (font >= FONT_MIN && font <= FONT_MAX) {
                legacy.fontSize = font;
            }
        } catch (e) {}
        return legacy;
    }

    var initial = migrateLegacy();
    var state = {
        lang: initial.lang === 'zh' ? 'zh' : 'en',
        fontSize: typeof initial.fontSize === 'number'
            ? clamp(initial.fontSize, FONT_MIN, FONT_MAX)
            : FONT_DEFAULT,
        contrast: initial.contrast === true
    };

    function persist() {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
            localStorage.setItem(LEGACY_LANG_KEY, state.lang);
            localStorage.setItem(LEGACY_TEST_LANG_KEY, state.lang);
            localStorage.setItem(LEGACY_TEST_FONT_KEY, String(state.fontSize));
        } catch (e) {}
    }

    function applyToDom() {
        var root = document.documentElement;
        if (root) {
            root.setAttribute('lang', state.lang === 'zh' ? 'zh' : 'en');
            root.style.fontSize = state.fontSize + '%';
            root.style.setProperty('--cg-font-scale', String(state.fontSize / 100));
        }
        var body = document.body;
        if (body) {
            body.classList.toggle('high-contrast', state.contrast);
        }
        document.querySelectorAll('#contrastToggle, [data-contrast-toggle]').forEach(function (btn) {
            btn.classList.toggle('active', state.contrast);
            btn.setAttribute('aria-pressed', state.contrast ? 'true' : 'false');
        });
        document.querySelectorAll('.lang-btn').forEach(function (btn) {
            if (btn.hasAttribute('data-language')) {
                btn.classList.toggle('is-active', btn.getAttribute('data-language') === state.lang);
            } else {
                btn.textContent = state.lang === 'zh' ? '中文' : 'EN';
            }
        });
    }

    function emit() {
        try {
            document.dispatchEvent(new CustomEvent('site-settings:change', {
                detail: { lang: state.lang, fontSize: state.fontSize, contrast: state.contrast }
            }));
        } catch (e) {}
        try {
            document.dispatchEvent(new CustomEvent('colorsite:lang', {
                detail: { zh: state.lang === 'zh', lang: state.lang }
            }));
        } catch (e) {}
    }

    function update(patch, options) {
        var changed = false;
        if (typeof patch.lang === 'string' && (patch.lang === 'zh' || patch.lang === 'en') && patch.lang !== state.lang) {
            state.lang = patch.lang;
            changed = true;
        }
        if (typeof patch.fontSize === 'number') {
            var next = clamp(Math.round(patch.fontSize), FONT_MIN, FONT_MAX);
            if (next !== state.fontSize) {
                state.fontSize = next;
                changed = true;
            }
        }
        if (typeof patch.contrast === 'boolean' && patch.contrast !== state.contrast) {
            state.contrast = patch.contrast;
            changed = true;
        }
        if (!changed) return false;
        applyToDom();
        if (!options || options.persist !== false) persist();
        if (!options || options.emit !== false) emit();
        return true;
    }

    function setLang(lang) { return update({ lang: lang }); }
    function toggleLang() { return setLang(state.lang === 'zh' ? 'en' : 'zh'); }
    function setFontSize(size) { return update({ fontSize: size }); }
    function adjustFontSize(delta) { return setFontSize(state.fontSize + delta); }
    function setContrast(on) { return update({ contrast: !!on }); }
    function toggleContrast() { return setContrast(!state.contrast); }

    function get() { return { lang: state.lang, fontSize: state.fontSize, contrast: state.contrast }; }
    function isZh() { return state.lang === 'zh'; }

    function bindControls(root) {
        root = root || document;

        root.querySelectorAll('.lang-btn').forEach(function (btn) {
            if (btn.dataset.siteSettingsBound) return;
            btn.dataset.siteSettingsBound = 'true';
            btn.addEventListener('click', function (event) {
                event.stopImmediatePropagation();
                var target = btn.getAttribute('data-language');
                if (target === 'zh' || target === 'en') {
                    setLang(target);
                } else {
                    toggleLang();
                }
            }, true);
        });

        root.querySelectorAll('.font-btn').forEach(function (btn) {
            if (btn.dataset.siteSettingsBound) return;
            if (btn.id === 'sound-toggle') return;
            btn.dataset.siteSettingsBound = 'true';
            btn.addEventListener('click', function (event) {
                if (btn.hasAttribute('data-font-reset')) {
                    event.stopImmediatePropagation();
                    setFontSize(FONT_DEFAULT);
                    return;
                }
                if (btn.id === 'contrastToggle' || btn.hasAttribute('data-contrast-toggle')) {
                    event.stopImmediatePropagation();
                    toggleContrast();
                    return;
                }
                var step = Number(btn.getAttribute('data-font-step'));
                var label = (btn.textContent || '').trim();
                var delta;
                if (step) {
                    delta = step * FONT_STEP;
                } else if (label.indexOf('+') !== -1 || label.indexOf('A+') !== -1) {
                    delta = FONT_STEP;
                } else if (label.indexOf('-') !== -1 || label.indexOf('A-') !== -1) {
                    delta = -FONT_STEP;
                } else {
                    return;
                }
                event.stopImmediatePropagation();
                adjustFontSize(delta);
            }, true);
        });

        root.querySelectorAll('#contrastToggle, [data-contrast-toggle]').forEach(function (btn) {
            if (btn.dataset.siteSettingsContrastBound) return;
            btn.dataset.siteSettingsContrastBound = 'true';
            btn.addEventListener('click', function (event) {
                event.stopImmediatePropagation();
                toggleContrast();
            }, true);
        });
    }

    window.addEventListener('storage', function (event) {
        if (event.key !== STORAGE_KEY || !event.newValue) return;
        try {
            var incoming = JSON.parse(event.newValue);
            if (!incoming) return;
            update({
                lang: incoming.lang,
                fontSize: incoming.fontSize,
                contrast: incoming.contrast
            }, { persist: false });
        } catch (e) {}
    });

    function initOnDom() {
        applyToDom();
        bindControls(document);
        emit();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initOnDom, { once: true });
    } else {
        initOnDom();
    }

    applyToDom();

    window.SiteSettings = {
        get: get,
        isZh: isZh,
        setLang: setLang,
        toggleLang: toggleLang,
        setFontSize: setFontSize,
        adjustFontSize: adjustFontSize,
        setContrast: setContrast,
        toggleContrast: toggleContrast,
        bindControls: bindControls,
        on: function (handler) {
            document.addEventListener('site-settings:change', function (event) {
                handler(event.detail);
            });
        }
    };
})();
