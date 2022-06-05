import makeEl from '../helpers/elementMaker.js'
import wrap from '../helpers/wrap.js'
import pizza from '../../assets/home/pizza.jpeg'
import '../../assets/home/home.style.css'

export default function(){
const introText = 'We know pizza. You come here, you try it, you think: \n Why haven\'t I had pizza this good yet until now? \ That what you can expect when you try our 100 year old recipe that\'s been passed down and perfected for generations. Once you come here, you won\'t go anywhere else'

const headline = makeEl('h3','Pizza you just can\'t forget about')
const heroPic = makeEl('img','',{src:pizza})
const intro = makeEl('p',introText)
const statement = makeEl('div',null,{class:'statement'})

const statementContents =  (function() {
    statement.appendChild(makeEl('p','Each pizza has 3 main ingredients that make it perfect: '))
    
    const list = makeEl('ol')

    list.appendChild(makeEl('li','Lots of cheese'))
    list.appendChild(makeEl('li','Lots of toppings'))
    list.appendChild(makeEl('li','Lots of love'))

    statement.appendChild(list)

    statement.appendChild(makeEl('p','That\'s why people just can\'t get enough of it'))

})();

return [
    wrap(headline),
    heroPic,
    wrap(intro),
    wrap(statement)
]
}
