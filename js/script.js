// Toggle icon navigator
const body = document.querySelector("body"),
      nav = document.querySelector("nav"),
      sidebarOpen = document.querySelector(".sidebarOpen"),
      sidebarClose = document.querySelector(".sidebarClose");

// JS code to toggle sidebar
sidebarOpen.addEventListener("click", () => {
    nav.classList.add("active");
});

body.addEventListener("click", e => {
    let clickedElm = e.target;
    if (!clickedElm.classList.contains("sidebarOpen") && !clickedElm.classList.contains("menu")) {
        nav.classList.remove("active");
    }
});

const link = 'https://openjavascript.info/2024/07/12/using-json-in-javascript/';
const msg = encodeURIComponent('follow us on:');
const title = encodeURIComponent(document.querySelector('title').textcontent);

console.log([link, msg, title]);

const fb = document.querySelector('.facebook');
fb.href = 'https://www.facebook.com/share.php?u=${link}';