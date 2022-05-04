import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="pageNotFound">
            <h3 align="center">Page 404</h3>
            <Link to="/">Revenir sur la page d'accueil</Link>
        </div>
    );
}
 
export default NotFound;