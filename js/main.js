const pages = [
    {
        "display_name": "Home",
        "path": "/",
        "links": []
    },
    {
        "display_name": "School",
        "path": "/views/school.html",
        "links": []
    },
    {
        "display_name": "Projects",
        "path": "/views/projects.html",
        "links": ["/projects/wwii/index.html"]
    }
]

const loadTopNav = () => {
    try {
        const topnav = document.getElementById("topnav");
        if (topnav !== null && topnav !== undefined) {
            for (const page of pages) {
                if (page !== null && page !== undefined) {
                    if ((page.display_name !== null && page.display_name !== undefined) && (page.path !== null && page.path !== undefined) && (page.links !== null && page.links !== undefined)) {
                        const elem = document.createElement("a");
                        elem.innerText = page.display_name;
                        elem.setAttribute("href", page.path);
                        if ((window.location.pathname === page.path) || (page.links.includes(window.location.pathname))) {
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

window.addEventListener("DOMContentLoaded", () => {
    console.log("Hello world");
    loadTopNav();
});
