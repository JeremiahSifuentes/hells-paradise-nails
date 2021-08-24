import NavBar from '../components/NavBar/NavContainer'
import ServiceContainer from '../components/ServiceContainer/ServicesContainer'
import Footer from '../components/Footer'
import Flames from './images/Flames.png'
export const Booking = () => {
    return (
            
            <div style={{backgroundColor: '#EBD4DF'}}>
              
        <NavBar/>
            <div className="booking-containers">
              <ServiceContainer />
              <ServiceContainer />
              <ServiceContainer />
            </div>

            <div className="flaming-footer">
              <img alt="flame design" src={Flames} />
            </div>
            <Footer/>
           
            
              </div>
            

      
    )
}

export default Booking
