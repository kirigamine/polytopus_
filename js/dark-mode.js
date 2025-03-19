function applyDarkMode() {
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
        document.body.classList.add("dark-mode");
    } else {
        document.body.classList.remove("dark-mode");
    }
}

// 初回適用
applyDarkMode();

// ユーザーがテーマを変更したときにリアルタイムで適用
window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", applyDarkMode);
