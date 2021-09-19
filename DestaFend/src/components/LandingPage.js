import React, {useState, useEffect} from 'react'
import Tile from "./Tile";
import NavBar from './NavBar';
import axios from "axios";
import './LandingPage.css'


function LandingPage() {

    const [binfo, setBinfoState] = useState([])
    
    function getData() {
        axios.get("http://143.198.37.59:3003/getdata") //need to add the params later
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
            {binfo.map(bis => <a href={"/getuser/"+bis._id}> <Tile key={bis._id} name={bis.businessName} 
            description={bis.description} image={bis.image} visible="green" /> </a> )}            
        </div>
        
        </>
    );
}
export default LandingPage;