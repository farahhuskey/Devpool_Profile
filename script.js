// เลือก Element จาก HTML ผ่าน DOM
const themeButton = document.getElementById("themeButton");
const moreButton = document.getElementById("moreButton");
const moreInformation = document.getElementById("moreInformation");
const currentYear = document.getElementById("currentYear");

// เปลี่ยนข้อความปุ่มตาม Theme ปัจจุบัน
function updateThemeButton() {
    const isDarkMode =
        document.body.classList.contains("dark-mode");

    themeButton.textContent = isDarkMode
        ? "☀️ Light Mode"
        : "🌙 Dark Mode";
}

// อ่าน Theme ที่เคยบันทึกไว้ใน Browser
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
}

updateThemeButton();

// Event ที่ทำงานเมื่อผู้ใช้คลิกปุ่มเปลี่ยน Theme
themeButton.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    const isDarkMode =
        document.body.classList.contains("dark-mode");

    localStorage.setItem(
        "theme",
        isDarkMode ? "dark" : "light"
    );

    updateThemeButton();
});

// Event ที่ทำงานเมื่อผู้ใช้คลิกปุ่มข้อมูลเพิ่มเติม
moreButton.addEventListener("click", function () {
    moreInformation.classList.toggle("hidden");

    const isHidden =
        moreInformation.classList.contains("hidden");

    moreButton.textContent = isHidden
        ? "แสดงข้อมูลเพิ่มเติม"
        : "ซ่อนข้อมูลเพิ่มเติม";

    moreButton.setAttribute(
        "aria-expanded",
        String(!isHidden)
    );
});

// ใส่ปีปัจจุบันใน Footer
currentYear.textContent = new Date().getFullYear();