import './App.css';
import './index.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {Booking} from './routes/Booking'
import {Landing} from './routes/Landing'
import {Policy} from './routes/Policy'


const App = () => {
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

