import {useState} from 'react'
import { CarouselData } from './CarouselData'
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'

const ServiceCarousel = (slides) => {
    const [current, setCurrent] = useState(0)
    const length = slides.length



    return (
        <section className="slider">
            <FaArrowAltCircleLeft className='left-arrow' ></FaArrowAltCircleLeft>
            <FaArrowAltCircleRight className='left-arrow' ></FaArrowAltCircleRight>
            {/* Using the data from the data component to map through and display different images. */}
            {CarouselData.map((slide, index) => {
                return (
                    // Set the src as the image that is mapped out
                    <img src={slide.image} alt="nailset image"></img> 
                )
            })}
        </section>
    )
}

export default ServiceCarousel
