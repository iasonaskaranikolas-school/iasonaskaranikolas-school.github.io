const pages = {
    "home": {
        "display_name": "Home",
        "path": "/"
    },
    "school": {
        "display_name": "School",
        "path": "/views/school.html"
    },
    "about": {
        "display_name": "About",
        "path": "/views/about.html"
    }
}

const loadTopNav = () => {
    try {
        const topnav = document.getElementById("topnav");
        if (topnav !== null && topnav !== undefined) {
            for (const name in pages) {
                if (name !== null && name !== undefined) {
                    const page = pages[name];
                    if (page !== null && page !== undefined) {
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