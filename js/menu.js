document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector('[data-responsive="menu-toggle"]');
    const menu = document.querySelector('[data-responsive="menu"]');

    if (!menuToggle || !menu) {
        console.error("メニュー要素が見つからない");
        return;
    }

    menuToggle.addEventListener("click", () => {
        menu.classList.toggle("open");
    });

    // メニュー外をクリックしたら閉じる
    document.addEventListener("click", (event) => {
        if (!menu.contains(event.target) && !menuToggle.contains(event.target)) {
            menu.classList.remove("open");
        }
    });
});
