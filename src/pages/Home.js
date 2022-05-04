import Countries from "../components/Countrie";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";


const Home = () => {
    return ( 
        <div className="home">
            <Navigation/>
            <Logo/>
            <Countries/>
        </div>
    );
}
 
export default Home;