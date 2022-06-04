import home from './home.js'
import about from './about.js'
import menu from './menu.js'


let tabContents = {
    home,
    about,
    menu,
}

export default function (tabName) {
    return tabContents[tabName];
}
