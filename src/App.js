import './App.css';
import background from '../src/images/BackgroundImage.jpg';
import backgroundTablet from '../src/images/Tablets.jpg';
import ServicesContainer from './components/ServicesContainer';




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
          <div className='main-content'>
            <ServicesContainer />
            <ServicesContainer />
          </div>
      </div>
        
        
    </div>
  );
}

export default App;
