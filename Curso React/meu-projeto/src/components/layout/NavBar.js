import { Link } from 'react-router-dom'
import style from "./NavBar.module.css"

function NavBar(){
  return(
    <ul className={style.lista}>
        <li className={style.itens}><Link to="/">Home</Link></li>
        <li className={style.itens}><Link to="/empresa">Empresa</Link></li>
        <li className={style.itens}><Link to="/contato">Contato</Link></li>
    </ul>
  )
}

export default NavBar