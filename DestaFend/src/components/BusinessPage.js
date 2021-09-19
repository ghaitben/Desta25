import axios from 'axios';
import './BusinessPage.css'
import React, {useState, useEffect} from 'react'

function BusinessPage({props}) {
    
    let _id = props.match.params.id; 
    const [binfo, setBState] = useState([])
    
    function fetchUser() {
        axios.get("http://143.198.37.59:3003/getuser", {
            params: {
                _id:_id
            }
        })
        .then( res => setBState(res.data) )
        .catch(err => console.log(err))
    }
    useEffect(() => {
        fetchUser();
    }, [])
    console.log(binfo)
    return(
        <>
            <div className="container3">
                <div className="bgpicture">
                    <img src={"data:image;base64,"+ binfo.image} alt="bpic" className="picture" />
                </div>
                <div className="Bname white">
                    Business Title:  {binfo.businessName}
                    
                </div>
                <div className="overview white">
                    Overview: {binfo.description}
                </div>
                <div className="address white">
                    {binfo.address}
                </div>
                <div className="pcontact white">

                </div>
                
            </div>
        </>
    );
}
export default BusinessPage;