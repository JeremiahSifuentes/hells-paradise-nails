import {ReactComponent as Instagram} from '../images/instagram-square-brands.svg'
import {ReactComponent as TikTok} from '../images/tiktok-brands.svg'

const Footer = () => {
    return (
        <div className="footer">
            <div className="left-side"> 
                <a href="">About</a>
                <a href="">Policies</a>
                <a href="">Book Now</a>
            </div>
            <div className="right-side">
                <a href="https://www.instagram.com/nail.demon/?hl=en">< Instagram className="instagram-icon" /></a>
                <TikTok />
            </div>
        </div>
    )
}

export default Footer
