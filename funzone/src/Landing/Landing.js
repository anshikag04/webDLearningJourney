import './Landing.css'
import landing from '../Images/landing.jpg'
import gaming from '../Images/gaming.png'
function Landing() {
    return(
        <div className="landing">
            <div className="left-landing">
                <div className="hero-landing-text">WELCOME TO <br />  FUNZONE</div>
                <div className="hero-landing-subtext">FUN BEGINS HERE</div>
                <button className="landing-button">Get Started</button>
            </div>
            <div className="right-landing">
                <img src={gaming} height="400px" />
            </div>
        </div>
    )
}
export default Landing;