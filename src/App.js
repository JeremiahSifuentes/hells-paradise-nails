import './App.css';
import background from '../src/images/BackgroundImage.jpg';
import backgroundTablet from '../src/images/backgroundTablet.jpg';
import ServicesContainer from '../src/components/ServiceContainer/ServicesContainer';
import Footer from './components/Footer';
import NavBar from './components/NavBar/NavContainer'




function App() {
  // Logic to allow for different background image sizes depending on screen size
  const imageUrl = window.innerWidth >= 650 ? backgroundTablet : background;

  return (
    <div className='container'>
      {/* Background Image */}
      <div className='landing-wrapper' style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        }}>
          <div className="NavBar">
            <NavBar />
          </div>
          <div className='main-content'>
            
            <ServicesContainer />
            <ServicesContainer />
            <ServicesContainer />
          </div>
          <Footer />
      </div>
     
    
    </div>
    
  );
}

export default App;
