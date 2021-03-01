import Button from '../components/Button';
import ServiceCard from '../components/ServiceCard'
import {useState} from 'react';

import React from 'react'

const ServicesContainer = () => {

    const [isActive, setActive] = useState("false");
    
    const onClick = () => {
        console.log('Clicked first event handled!')
        setActive(!isActive);
    }

    return (
        <>
            <div onClick={onClick} className={isActive ? "service-container" : "service-container-expanded"}>
                <div className="service-container-header">
                    <h2>Service Category</h2>
                     <Button/> 
                </div>
                <div className='service-container-content'>
                    <ServiceCard />
                </div>
            </div>
    </>
    )
}




export default ServicesContainer
// This is f
//  <div className="flex-item2">
//      <h3 className="card-title">Title of Service</h3>
//      <h4 className="card-time-price">(Time and Price)</h4>
//      <p className="card-description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit id vitae quam porro deleniti tenetur cumque fuga corporis sit ad libero eos saepe repudiandae voluptatum facere ab maiores molestias accusantium doloribus nihil nostrum reprehenderit, molestiae harum. Corrupti ab quod impedit, odit esse minus consectetur ut, fuga, tenetur eveniet exercitationem. Nam vero iste corrupti beatae natus.</p>
// </div>