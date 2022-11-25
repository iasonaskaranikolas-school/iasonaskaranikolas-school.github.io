const pages = {
    "home": "/",
    "school": "/views/school.html",
    "about": "/views/about.html"
}

const loadTopNav = () => {
    try {
        const topnav = document.getElementById("topnav");
        if (topnav !== null && topnav !== undefined) {
            for (const page in pages) {
                console.log(page);
            }
            console.log(topnav);
        }
    } catch (e) {
        console.log(e);
    }
}

window.onload = () => {
    loadTopNav();
}