import App from "./components/App";
import LandingPage from "./components/LandingPage"
import {BrowserRouter, Route, Switch} from 'react-router-dom'

function mainApp() {
    return(
        <>
            <BrowserRouter>
            <Switch>
                <Route path="/register">
                    <App />
                </Route>
                <Route path="/">
                    <LandingPage />
                </Route>
            </Switch> 
            </BrowserRouter>
        </>
    );
    
}
export default mainApp;