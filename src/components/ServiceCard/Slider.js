import React,  { useState } from "react"
// import '../slider.scss'
import ImgComp from './ImgComp'
import i1 from "../Images/1.jpg"
import i2 from "../Images/2.jpg"
import i3 from "../Images/3.jpg"
import i4 from "../Images/4.jpg"
import i5 from "../Images/5.jpg"
import {ReactComponent as LeftBtn} from '../Images/startLeft.svg'
import {ReactComponent as RightBtn} from '../Images/startRight.svg'



const Slider = () => {
    //Array for component to show inside slider
    let sliderArr = [<ImgComp src={i1}/>,<ImgComp src={i2}/>,<ImgComp src={i3}/>,<ImgComp src={i4}/>,<ImgComp src={i5}/>]; //numbers for testing
    const [x, setX] = useState(0);
    // to navigate between array items */}
    const goLeft  = () => {
        console.log(x)
        x=== 0 ? setX(-100 * (sliderArr.length-1)) : setX(x+100);
    }
    const goRight = () => {
        console.log(x)
        x=== -100* (sliderArr.length-1) ? setX(0) : setX (x-100);
    }

    return (
        <div className="carousel">
            <button className="left-button ripple"  onClick={goLeft}><LeftBtn /></button>
            <div className="slider">
                {
                    //map is listing over each item in array and displaying it
                    sliderArr.map((item, index) => {
                        return(
                            <div className='slide' key={index} style={{transform: `translateX(${x}%)`}}>
                                {item}
                            </div>
                        )
                    })
                }
            </div>
            
            <button className="right-button ripple"  onClick={goRight}><RightBtn/></button>
        </div>
    )
}

export default Slider
