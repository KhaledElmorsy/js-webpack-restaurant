export default function(el, titleText){
    const wrapper = document.createElement('div')
    wrapper.classList.add('wrapper')

    if (titleText) {
        const title = document.createElement('h2')
        title.innerText = titleText;
        wrapper.appendChild(title)
    }

    // Can take arrays of elements
    if (el[0]) for(let el of a) wrapper.appendChild(el);
    else wrapper.appendChild(el);
    
    return wrapper;
}
