import  { Link, RouteComponentProps } from "react-router-dom";

interface Props extends RouteComponentProps {}
// We have access to history because it was passed in from ROUTE in App.js
// location.search parses out whatever is in the link address after the /
// Match is used for parameters in the route
export const Home: React.FC <Props> = ({history, location, match}) => {
    return (
        <div>
            <h1>React Router</h1>
            <Link to="/about">
                go to about
            </Link>
            <button onClick={() => {
                // API Call
                // change page
                history.push('/about')
            }}>Click me</button>
        </div>
    )
}

export default Landing