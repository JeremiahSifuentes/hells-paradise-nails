import {FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {useState} from 'react';

const LeftBtn = () => {

    // Handler to change position onClick
    const [animate, setAnimate] = useState(false)
    
    const animateIcon = () => {
        setAnimate(!animate)
    }

    return (
        <div>
            <FontAwesomeIcon onClick={animateIcon} color='black' icon="chevron-left" size="2x" className= {setAnimate
              ? "iconButton"
              : "iconButtonAnimated"}/>
        </div>
    )
}

export default LeftBtn