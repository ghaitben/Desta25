import App from "./components/App";
import LandingPage from "./components/LandingPage"
import BusinessPage from "./components/BusinessPage";
import {BrowserRouter, Route, Switch} from 'react-router-dom'

function mainApp() {
    return(
        <>
            <BrowserRouter>
            <Switch>
                <Route path="/register">
                    <App />
                </Route>
                <Route exact path="/">
                    <LandingPage />
                </Route>
                <Route path="/getuser/:id" render={(props) => <BusinessPage props={props} />}/> 
            </Switch> 
            </BrowserRouter>
        </>
    );
    
}
export default mainApp;