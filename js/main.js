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

const queryMetroDepartureTime = async () => {
    const req = await fetch("https://eval.jasonkaranik.tk/", {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({
            "key": "hi",
            "url": "https://cdn.jasonkaranik.tk/files/get_greek_subway_departure_times.js",
            "env": {
                "subway_stations": [
                    {
                        "name": "aghia_paraskevi",
                        "line": "3"
                    }
                ]
            }
        })
    });

    if (req != null) {
        //if (req.ok === true) {
            const res = await req.json();
            if (res != null) {
                console.log(res);
            }
        //}
    }
}

const loadTopNav = () => {
    try {
        const topnav = document.getElementById("topnav");
        if (topnav != null) {
            for (const page of pages) {
                if (page != null) {
                    if ((page.display_name != null) && (page.path != null) && (page.links != null)) {
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
