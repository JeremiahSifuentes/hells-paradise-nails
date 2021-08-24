
import ServiceContainerContent from '../ServiceContainer/ServiceContainerContent'
import ButtonImg from "../Images/sort-down-solid 1.png";
import ServiceContainerHeader from "../ServiceContainer/ServiceContainerHeader";
import { useState } from "react";

const ServicesContainer = ({ title }) => {
  const [isActive, setActive] = useState(true);

  const animateServiceContainer = () => {
    setActive(!isActive);
  };

  return (
    <>
     <div onClick={() => {
            animateServiceContainer();
          }} className="service-container-header">
         < ServiceContainerHeader />
          <button  
          
          className={
            isActive
              ? "service-container-btn"
              : "service-container-btn-expanded"
          }
        >
          <img  src={ButtonImg} alt="expand-services" />
        </button >
    </div>
    
      <div
       
        className={
          isActive ? "service-container" : "service-container-expanded"
        }
      >
       
        < ServiceContainerContent />
        
      </div>
    </>
  );
};

export default ServicesContainer;
