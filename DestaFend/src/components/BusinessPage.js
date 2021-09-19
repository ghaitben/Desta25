import axios from 'axios';
import './BusinessPage.css'
import NavBar from './NavBar';
import React, {useState, useEffect} from 'react'

function BusinessPage({props}) {
    
    let _id = props.match.params.id; 
    const [binfo, setBState] = useState([])
    const [tags, setTags] = useState([])
    const [neighbourhoods, setNeighbourhoods] = useState([])
    const [industry, setIndustry] = useState([])
    
    function handleClick(e) {
        if(e.target.value === "Connect To This Business") {
            e.target.value = "Business Contact: " + binfo.businessContact;
        }
        else {
            e.preventDefault();
        }
    }




    async function fetchUser() {
        await axios.get("http://localhost:3003/getuser", {
            params: {
                _id:_id
            }
        })
        .then( res => {
            setBState(res.data);
            setTags(res.data.tags);
            setNeighbourhoods(res.data.neighbourhoods);
            setIndustry(res.data.industries);
        })
        .catch(err => console.log(err))
    }
    useEffect(() => {
        fetchUser();
    }, [])
    
    return(
        <>
            <NavBar />
            <div className="container3">
                <div className="bgpicture">
                    <img src={"data:image;base64,"+ binfo.image} alt="bpic" className="picture" />
                </div>
                <div className="Bname white">
                    {binfo.businessName}
                </div>
                <div className="overview white">
                    {binfo.description} jsqlmkqjdsmlkjsmldfkjlkdjsfmlqksjdmlfkqjsdlfkjsqdklf{binfo.description} jsqlmkqjdsmlkjsmldfkjlkdjsfmlqksjdmlfkqjsdlfkjsqdklf{binfo.description} jsqlmkqjdsmlkjsmldfkjlkdjsfmlqksjdmlfkqjsdlfkjsqdklf{binfo.description} jsqlmkqjdsmlkjsmldfkjlkdjsfmlqksjdmlfkqjsdlfkjsqdklf{binfo.description} jsqlmkqjdsmlkjsmldfkjlkdjsfmlqksjdmlfkqjsdlfkjsqdklf{binfo.description} jsqlmkqjdsmlkjsmldfkjlkdjsfmlqksjdmlfkqjsdlfkjsqdklf{binfo.description} jsqlmkqjdsmlkjsmldfkjlkdjsfmlqksjdmlfkqjsdlfkjsqdklf{binfo.description} jsqlmkqjdsmlkjsmldfkjlkdjsfmlqksjdmlfkqjsdlfkjsqdklf{binfo.description} jsqlmkqjdsmlkjsmldfkjlkdjsfmlqksjdmlfkqjsdlfkjsqdklf{binfo.description} jsqlmkqjdsmlkjsmldfkjlkdjsfmlqksjdmlfkqjsdlfkjsqdklf{binfo.description} jsqlmkqjdsmlkjsmldfkjlkdjsfmlqksjdmlfkqjsdlfkjsqdklf{binfo.description} jsqlmkqjdsmlkjsmldfkjlkdjsfmlqksjdmlfkqjsdlfkjsqdklf{binfo.description} jsqlmkqjdsmlkjsmldfkjlkdjsfmlqksjdmlfkqjsdlfkjsqdklf{binfo.description} jsqlmkqjdsmlkjsmldfkjlkdjsfmlqksjdmlfkqjsdlfkjsqdklf{binfo.description} jsqlmkqjdsmlkjsmldfkjlkdjsfmlqksjdmlfkqjsdlfkjsqdklf{binfo.description} jsqlmkqjdsmlkjsmldfkjlkdjsfmlqksjdmlfkqjsdlfkjsqdklf
                </div>
                <div className="address white">
                    {binfo.address}
                </div>
                <div className="tags white">
                    {neighbourhoods.map(neigh => <div className="Box blue">{neigh}</div>  )}
                </div>
                <div className="tags white">
                    {tags.map(tag => <div className="Box green">#{tag}</div>  )}
                </div>
                <div className="tags white">
                    {industry.map(ind => <div className="Box violet">#{ind}</div> )}
                </div>
                <input type="button" className="connectButton white" value="Connect To This Business" 
                onClick={(e) => handleClick(e)} />
                
            </div>
        </>
    );
}
export default BusinessPage;