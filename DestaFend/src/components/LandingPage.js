import React, {useState, useEffect} from 'react'
import Tile from "./Tile";
import NavBar from './NavBar';
import axios from "axios";
import './LandingPage.css'


function LandingPage() {

    const [binfo, setBinfoState] = useState([])
    
    function getData() {
        axios.get("http://localhost:3003/getdata") //need to add the params later
        .then( res =>{ setBinfoState(res.data);})
        .catch( err => console.log(err))
    }

    useEffect(() => {
        getData();
    }, [])
    return(
        <>
        <NavBar />
        <div className="container2">
            {binfo.map(bis => <Tile key={bis.image} name={bis.businessName} 
            description={bis.description} image={bis.image} visible="green" />  )}            
        </div>
        
        </>
    );
}
export default LandingPage;