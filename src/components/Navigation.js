import { Link } from "react-router-dom";

const Navigation = () => {
    return ( 
        <div className="navigation">
            <Link 
                className="nav-active"
                to="/"
            >
                Accueil
            </Link>
            <Link 
                className="nav-active"
                to="/about" 
            >
                A propos
            </Link>
        </div>
    );
}
 
export default Navigation;