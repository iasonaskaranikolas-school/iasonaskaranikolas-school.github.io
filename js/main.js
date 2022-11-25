const pages = [
    {
        "display_name": "Home",
        "path": "/"
    },
    {
        "display_name": "School",
        "path": "/views/school.html"
    },
    {
        "display_name": "About",
        "path": "/views/about.html"
    }
]

const loadTopNav = () => {
    try {
        const topnav = document.getElementById("topnav");
        if (topnav !== null && topnav !== undefined) {
            for (const page of pages) {
                if (page !== null && page !== undefined) {
                    if ((page.display_name !== null && page.display_name !== undefined) && (page.path !== null && page.path !== undefined)) {
                        const elem = document.createElement("a");
                        elem.innerText = page.display_name;
                        elem.setAttribute("href", page.path);
                        if (window.location.pathname === page.path) {
                            elem.classList.add("active");
                        }
                        topnav.appendChild(elem);
                    }
                }
            }
        }
    } catch (e) {
        console.log(e);
    }
}

window.onload = () => {
    loadTopNav();
}