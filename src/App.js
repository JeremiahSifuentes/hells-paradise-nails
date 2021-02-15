import './App.css';
import background from '../src/images/BackgroundImage.jpg';
import backgroundTablet from '../src/images/Tablets.jpg';

function App() {

  const imageUrl = window.innerWidth >= 650 ? backgroundTablet : background;

  return (
    <div className='container'>
      <div className='landing-wrapper' style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        }}>
      
      </div>
    </div>
  );
}

export default App;

// // <div className='title-text'>
// {/* <h1 className='top'>Hells</h1>
// <h1>Paradise</h1>
// <h1 className='bottom'>Nails</h1>
// </div> */}