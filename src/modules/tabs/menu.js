import marghPic from '../../assets/menu/margherita.jpeg'
import peppPic from '../../assets/menu/pepperoni.jpeg'
import mushPic from '../../assets/menu/mushroom.jpeg'

import makeEl from '../helpers/elementMaker.js'
import wrap from '../helpers/wrap.js'
import '../../assets/menu/menu.style.css'

export default function(){
    const margheritaText = 'Delicious, alluring, addictive. The classic margherita is here to make your day. Live, Laugh, Love? More like, One, More, Slice'
    const pepperoniText = 'Meaty, savory, head-spinning insanity. Our pepperoni pizza is like no other. People just can\'t get enough of it!'
    const mushroomText = 'Umami. What more can we say other than that this pizza is a flavor explosion that\'ll send you to cloud nine and beyond'

    function menuItem(name,text,image){
        let itemPic = makeEl('img',null,{src:image, class:'menu-pic'})
        let itemText = makeEl('p',text)
        
        let itemContent = wrap([itemPic,itemText],null,{class:'menu-item-content'},false)
        
        return wrap(itemContent, name,{class:'menu-item'})
    }

    const margherita = menuItem('Margherita', margheritaText, marghPic);
    const pepperoni = menuItem('Pepperoni', pepperoniText, peppPic);
    const mushroom = menuItem('Mushroom', mushroomText, mushPic);

    return [
        margherita,
        pepperoni,
        mushroom
    ]
}
