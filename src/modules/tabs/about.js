import makeEl from '../helpers/elementMaker.js'
import wrap from '../helpers/wrap.js'
import teamPicAsset from '../../assets/about/our-team.jpeg'
import '../../assets/about/about.style.css'

export default function(){
    const historyText = 'More than a hundred years ago, our family set out to make a pizza so flavorful it would make anyone who tried it forget anything else they\'ve had before. They didn\'t just succeed, they kept raising the bar until their pizza was considered to be on a different level from what you can get anywhere else. <br> <br> We haven\'t slowed down one bit, and you can be sure that the pizza you try here is going to absolutely blow your mind and tastebuds.'

    const contact = (function(){
        let phone = makeEl('p','<b>Phone</b><br> +1 234 456 7890')
        let address = makeEl('p','<b>Address</b><br> 1234 North-West Road, City')
        let email = makeEl('p','<b>Email</b><br> contact@pizzapizzapizaaaa.com')
        let message = makeEl('p','<i>We\'d love to hear from you! Reach out or drop by anytime!<i>')

        return [phone,address,email,message]
    })();


    const history = makeEl('p',historyText)
    const teamPic = makeEl('img',null,{src:teamPicAsset})
    
    return [
        teamPic,
        wrap(history,'Our History'),
        wrap(contact,'Reach Out!',{class:'contact'})
    ]
}
