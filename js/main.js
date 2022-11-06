const loadJS = (url, cb) => {
    try {
        const scriptTag = document.createElement("script");

        scriptTag.src = url;
        scriptTag.onload = cb;
        scriptTag.onreadystatechange = cb;

        document.getElementsByTagName("head")[0].appendChild(scriptTag);
    } catch { }
};

window.onload = async () => {
    if ((window.Fingerprinter === null || window.Fingerprinter === undefined) || (window.UAParser === null || window.UAParser === undefined) || (window.CryptoJS === null || window.CryptoJS === undefined)) throw new Error("Fingerprinter could not be loaded!");
    const client = new window.Fingerprinter();
}
