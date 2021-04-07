import ServiceCard from '../components/ServiceCard'
import {useState} from 'react'
import ButtonImg from '../images/sort-down-solid 1.png'
import PropTypes from 'prop-types'

const ServicesContainer = ({title}) => {

    const [isActive, setActive] = useState("false");
   

    


    const onClick = () => {
        setActive(!isActive);
    }
    
    return (
        <>
            <div onClick={onClick} className={isActive ? "service-container" : "service-container-expanded"}>
                <div className="service-container-header">
                    <h2>{title}</h2>
                    <button  className={isActive ? "service-container-btn" : "service-container-btn-expanded"} > 
                    <img src={ButtonImg} alt='expand-services'/>
                </button>
            </div>
                <div  className='service-container-content'>
                    <ServiceCard />
                    <ServiceCard />

                    <ServiceCard />

                    <hr></hr>
                </div>
            </div>
    </>
    )
}

ServicesContainer.defaultProps = {
    title: 'Service Category'
}

ServicesContainer.protoTypes = {
    title: PropTypes.string.isRequired,
}



export default ServicesContainer
// This is f
//  <div className="flex-item2">
//      <h3 className="card-title">Title of Service</h3>
//      <h4 className="card-time-price">(Time and Price)</h4>
//      <p className="card-description"></p>
// </div>