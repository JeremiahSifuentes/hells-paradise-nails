import ContainerContent from './ContainerContent'
import NavIcon from './NavIcon'
import { useState } from "react";

const NavContainer = () => {

    const [isActive, setActive] = useState(true);
const animateServiceContainer = () => {
    setActive(!isActive);
}
    return (
        <div onClick={animateServiceContainer} className={
            isActive
              ? "nav-container"
              : "nav-container-expanded"
          }>
            <div >
            < NavIcon />
        </div>
        <div  className={
            isActive
              ? "nav-content"
              : "nav-content-expanded"
          }>
                <ContainerContent />
            </div>
            
     
        </div>
        
    )
}

export default NavContainer
