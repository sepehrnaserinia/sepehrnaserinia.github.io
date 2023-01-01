const device = window.matchMedia("(min-width: 768px)");
if (!device.matches)
    toggleShowHide("nav-2");
device.addEventListener("change", event => handleDeviceChange(event))

function handleDeviceChange(event) {
    let m_class = document.getElementsByClassName("nav-2")[0];
    if (event.matches)
    {
        m_class.classList.add("show");
        m_class.classList.remove("hide");
    }
    else
    {
        m_class.classList.add("hide");
        m_class.classList.remove("show");
    }
}

function toggleShowHide(input) {
    let m_class = document.getElementsByClassName(input)[0];
    m_class.classList.toggle("show")
    m_class.classList.toggle("hide")
}


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function copyToClipboard(input) {
    navigator.clipboard.writeText(input);
    toggleShowHide("copy-box");
    sleep(1000).then(() => {
        toggleShowHide("copy-box");
    });
}