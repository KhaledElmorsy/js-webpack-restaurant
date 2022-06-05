export default function(el, titleText){
    const wrapper = document.createElement('div')
    wrapper.classList.add('wrapper')

    if (titleText) {
        const title = document.createElement('h2')
        title.innerText = titleText;
        wrapper.appendChild(title)
    }

    wrapper.appendChild(el)
    
    return wrapper;
}
