function applyResponsiveClass() {
    let elements = document.querySelectorAll("[data-responsive]");

    elements.forEach(el => {
        el.classList.remove("pc", "tablet", "mobile");

        if (window.innerWidth >= 1024) {
            el.classList.add("pc");
        } else if (window.innerWidth >= 768) {
            el.classList.add("tablet");
        } else {
            el.classList.add("mobile");
        }
    });
}


function applyDarkMode() {
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
        document.body.classList.add("dark-mode");
    } else {
        document.body.classList.remove("dark-mode");
    }
}

// `DOMContentLoaded` で実行（applyResponsiveClassをグローバルにしたのでOK）
document.addEventListener("DOMContentLoaded", () => {
    applyResponsiveClass();
    applyDarkMode();

    // ウィンドウリサイズ時にレスポンシブを再適用
    window.addEventListener("resize", applyResponsiveClass);

    // ダークモードの変更を監視
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", applyDarkMode);
});
