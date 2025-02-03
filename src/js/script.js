// hamburger
const hamburger = document.querySelector('#hamburger');
const navmenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('hamburger-active');
    navmenu.classList.toggle('hidden');
});


// click luar hamburger
window.addEventListener('click', function (e) {
    if (e.target != hamburger && e.target != navmenu) {
        hamburger.classList.remove('hamburger-active');
        navmenu.classList.add('hidden');
    }
});

// navbar fixed
window.onscroll = function () {

    const header = document.querySelector('header');
    const fixnav = header.offsetTop;
    const toTop = document.querySelector('#to-top');

    if (window.pageYOffset > fixnav) {
        header.classList.add('navbar-fixed')
        toTop.classList.remove('hidden')
    } else {
        header.classList.remove('navbar-fixed')
        toTop.classList.add('hidden')
    }
};

// dark mode toggle
const darktToggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html');

darktToggle.addEventListener('click', function () {
    if (darktToggle.checked) {
        html.classList.add('dark');
        localStorage.theme = 'dark'
    } else {
        html.classList.remove('dark');
        localStorage.theme = 'light'
    }
});

// pindah posisi toggle
if (document.documentElement.classList.toggle(
    'dark',
    localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
)) {
    darktToggle.checked = true;
} else {
    darktToggle.checked = false;
}

// current date
function getFormattedDate() {
    const today = new Date();

    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    return `${days[today.getDay()]}, ${today.getDate()} ${months[today.getMonth()]} ${today.getFullYear()}`;
}

// Fungsi untuk mengisi banyak elemen dengan tanggal yang sama
function setMultipleDates(elementIds) {
    elementIds.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.textContent = getFormattedDate();
        }
    });
}

// Panggil fungsi untuk 4 elemen
document.addEventListener("DOMContentLoaded", function () {
    setMultipleDates(["date-1", "date-2", "date-3", "date-4"]);
});


