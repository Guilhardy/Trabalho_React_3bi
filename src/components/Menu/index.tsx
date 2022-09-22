import "./style.css";
import {Link} from "react-router-dom"

export 

const Menu = () => {
    return( 
    <header>
        <h1 className="logo">SuaSaúde</h1>
        <nav className="menu"> 
            <ul className="links">
            <li>
                <Link to='/' > Home</Link>
            </li>
            <li>
                 <Link to='/Servicos '>Saúde do Corpo</Link>
            </li>

            <li>
                 <Link to='/Contatos ' >Contatos</Link>
                 
               
                 
            </li>
 </ul>
                 
        </nav>
    </header>

 );
};
