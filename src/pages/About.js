import Logo from "../components/Logo";
import Navigation from "../components/Navigation";

const About = () => {
    return ( 
        <div className="about">
            <Navigation/>
            <Logo/>
            <h3>A propos</h3>
            <p>
                loremloremloremloremloremloremloremloremlorem
                loremloremloremloremloremloremloremloremlorem
                loremloremloremloremloremloremloremloremlorem
                loremloremloremloremloremloremloremloremlorem
            </p>
        </div>
    );
}
 
export default About;