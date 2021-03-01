import buttonImg from '../images/sort-down-solid 1.png'

const Button = ({onClick}) => {

    

    return (
        <>
            <button className='service-container-btn' onClick={onClick}> 
                <img src={buttonImg} alt='expand-services'/>
            </button>
        </>
    )
}

export default Button
