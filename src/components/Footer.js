import  { Link, RouteComponentProps } from "react-router-dom";
import {ReactComponent as Instagram} from '../routes/images/instagram-square-brands.svg'
import {ReactComponent as TikTok} from '../routes/images/tiktok-brands.svg'

export const Footer = () => {
    return (
        <div className="footer">
            <div className="left-side"> 
                <p>About</p>
                <Link to='/Policy'><p>Policies</p></Link>
                <Link to='/Booking'><p>Book Now</p></Link>
            </div>
            <div className="right-side">
                <a href="https://www.instagram.com/nail.demon/?hl=en">< Instagram className="instagram-icon" /></a>
                <TikTok />
            </div>
        </div>
    )
}

export default Footer
