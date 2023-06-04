import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'

import style from './Footer.module.css'

function Footer(){
    return(
        <footer className={style.footer}>
            <ul className={style.social_list}>
                <li><FaGithub /></li>
                <li><FaLinkedin /></li>
                <li><FaInstagram /></li>
            </ul>
            <p className={style.copy_right}>
                <span>Costs</span> &copy; 2021
            </p>
        </footer>
    )
}

export default Footer