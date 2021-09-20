import logo from './logo.svg';
import './App.css';
import './Form.css';
import Navbar from "./components/Navbar";
import { Route, Switch, Redirect, BrowserRouter as Router } from "react-router-dom";

import CompanyCardLayout from "./components/CompanyCardLayout";
import RecentInfoStack from "./components/RecentInfoStack";
import CompanyPageCard from "./components/CompanyPageCard";
import SimilarCompanyStack from "./components/SimilarCompanyStack";
import SpecificInfoStack from "./components/SpecificInfoStack";
import BusinessPage from "./Page/BusinessPage";
import Form from "./components/Form";

function App() {
  return (
      <>
          {window.location.href != 'http://localhost:3000/form' && <Navbar/> }
          {/* <CompanyCardLayout/> */}
          <Router>
              <Switch>
                  <Route path="/home">
                      <CompanyCardLayout />
                  </Route>

                  <Route path="/form">
                      <Form />
                  </Route>
              </Switch>
          </Router>

      </>

  );
}

export default App;
