
import ServiceContainerContent from './ServiceContainerContent'
import ButtonImg from "../images/sort-down-solid 1.png";
import ServiceContainerHeader from "../components/ServiceContainerHeader";
import { useState } from "react";

const ServicesContainer = ({ title }) => {
  const [showServices, setShowServices] = useState(false)
  const [isActive, setActive] = useState(true);

  const animateServiceContainer = () => {
    setActive(!isActive);
  };

  const toggleServices = () => {
      setShowServices(!showServices);
      animateServiceContainer();
  }
  // onClick={animateServiceContainer}

  return (
    <>
     <div onClick={() => {
            toggleServices();
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
// This is f
//  <div className="flex-item2">
//      <h3 className="card-title">Title of Service</h3>
//      <h4 className="card-time-price">(Time and Price)</h4>
//      <p className="card-description"></p>
// </div>
