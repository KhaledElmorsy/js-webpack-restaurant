import makeEl from "./elementMaker";

export default function(el, titleText, attr, wrapperClass = true){
    const wrapper = makeEl('div', null, attr)
    if (wrapperClass) wrapper.classList.add('wrapper')

    if (titleText) {
        const title = makeEl('h2',titleText)
        wrapper.appendChild(title)
    }

    // Can take arrays of elements
    if (el[0]) for(let a of el) wrapper.appendChild(a);
    else wrapper.appendChild(el);
    
    return wrapper;
}
