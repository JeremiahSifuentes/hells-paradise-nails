import './App.css';
import './index.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {Booking} from './routes/Booking'
import {Landing} from './routes/Landing'
import {Policy} from './routes/Policy'


const App: React.FC = () => {
  return (
    <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Landing} />
      <Route path="/booking" exact component={Booking} />
      <Route path="/policy" exact component={Policy} />
      <Route path="/" render={() => <div>404</div>} />
    </Switch>
    </BrowserRouter>
    
     
  )
}

export default App;

// import background from '../src/images/BackgroundImage.jpg';
// import backgroundTablet from '../src/images/backgroundTablet.jpg';
// import NavBar from './components/NavBar/NavContainer'
// import MainBtn from './components/MainBtn/MainBtn';
// const imageUrl = window.innerWidth >= 650 ? backgroundTablet : background;
// <div className="container">
//         {/* Background Image */}
//         <div
//           className="landing-wrapper"
//           style={{
//             backgroundImage: `url(${imageUrl})`,
//             backgroundSize: "cover",
//             backgroundRepeat: "no-repeat",
//           }}
//         >
//           <div className="NavBar">
//             <NavBar />
//           </div>
//           <div className="main-content">
            
//             <MainBtn to="/booking"/>
//           </div>
//         </div>
//       </div>