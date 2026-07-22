

const asideIcons = document.querySelectorAll(".aside_icons");

asideIcons.forEach((item) => {
    item.addEventListener("click", () => {

        // حذف active از همه آیتم‌ها
        asideIcons.forEach((icon) => {
            icon.classList.remove("active");
        });

        // اضافه کردن active به آیتم کلیک شده
        item.classList.add("active");

    });
});