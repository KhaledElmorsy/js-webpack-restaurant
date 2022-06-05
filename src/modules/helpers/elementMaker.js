export default function (type, innerHTML, attr) {
    let el = document.createElement(type)
    if (innerHTML) el.innerHTML = innerHTML;
    if (attr) {
        for (let a in attr) 
        el.setAttribute(a,attr[a]);
    }
    return el;
}
