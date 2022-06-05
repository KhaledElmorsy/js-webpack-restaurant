import home from '../tabs/home.js'
import about from '../tabs/about.js'
import menu from '../tabs/menu.js'


let tabContents = {
    home,
    about,
    menu,
}

export default function (tabName) {
    return tabContents[tabName]();
}
