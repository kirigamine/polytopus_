function applyResponsiveClass() {
    let body = document.body;
    body.classList.remove("pc", "tablet", "mobile");

    if (window.innerWidth >= 1024) {
        body.classList.add("pc");
    } else if (window.innerWidth >= 768) {
        body.classList.add("tablet");
    } else {
        body.classList.add("mobile");
    }
}

function applyDarkMode() {
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
        document.body.classList.add("dark-mode");
    } else {
        document.body.classList.remove("dark-mode");
    }
}

// 初回適用
applyResponsiveClass();
applyDarkMode();

// ウィンドウリサイズ時に再適用
window.addEventListener("resize", applyResponsiveClass);

// ダークモードの変更を監視
window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", applyDarkMode);
