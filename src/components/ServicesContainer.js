import ServiceCard from '../components/ServiceCard'
import {useState} from 'react';
import ButtonImg from '../images/sort-down-solid 1.png'
import PropTypes from 'prop-types'
import React from 'react'

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
                <div className='service-container-content'>
                    <ServiceCard />
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
//      <p className="card-description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit id vitae quam porro deleniti tenetur cumque fuga corporis sit ad libero eos saepe repudiandae voluptatum facere ab maiores molestias accusantium doloribus nihil nostrum reprehenderit, molestiae harum. Corrupti ab quod impedit, odit esse minus consectetur ut, fuga, tenetur eveniet exercitationem. Nam vero iste corrupti beatae natus.</p>
// </div>