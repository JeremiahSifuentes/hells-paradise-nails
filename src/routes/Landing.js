import  { Link} from "react-router-dom";
import background from './images/BackgroundImage.jpg'
import backgroundTablet from './images/backgroundTablet.jpg';
import NavBar from '../components/NavBar/NavContainer'
import MainBtn from '../components/MainBtn/MainBtn';
const imageUrl = window.innerWidth >= 650 ? backgroundTablet : background;

export const Landing = ({history, location, match}) => {
    return (
        <div
        className="landing-wrapper"
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
       <div className="NavBar">
          <NavBar />
        </div>
        <div className="main-content">
                      <Link className="mainBtn" to='/Booking'><MainBtn  /></Link>
        </div>
      </div>
        )
}

export default Landing