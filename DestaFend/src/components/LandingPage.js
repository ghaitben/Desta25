import React, {useState, useEffect} from 'react'
import Tile from "./Tile";
import NavBar from './NavBar';
import axios from "axios";
import './LandingPage.css'
import "./SearchBar.css";
import { IoSearch } from "react-icons/io5"
import { IoClose } from "react-icons/io5";



function LandingPage() {
  
  const [binfo, setBinfoState] = useState([]);
  const [cloneBinfo, setCloneBinfo] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [filteredDataIndustry, setFilteredDataIndustry] = useState([]);
  const [filteredDataNeighbourhood, setFilteredDataNeighbourhood] = useState([]);
  const [filteredDataTags, setFilteredDataTags] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  const [flag, setFlag] = useState(true);


  const handleFilter = (event) => {
    const searchWord = event.target.value;
    
    if(searchWord.length != 0){
      setFlag(false);
    }else{
      setFlag(true);
      clearInput();
    }

    setWordEntered(searchWord);

    const newFilter = binfo.filter((value) => {
        return value.businessName.toLowerCase().includes(searchWord.toLowerCase());
    }
    );
    const newIndustryFilter = binfo.filter((value) => {
      return value.industries.some((e => e.toLowerCase().includes(searchWord.toLowerCase())));
      
    }
    );
    const newNeighbourhoodFilter = binfo.filter((value) => {
      return value.neighbourhoods.some((e => e.toLowerCase().includes(searchWord.toLowerCase())));
    }
    );
    const newTagsFilter = binfo.filter((value) => {
      return value.tags.some((e => e.toLowerCase().includes(searchWord.toLowerCase())));
    }
    );

    if (searchWord === "") {
      setFilteredData([]);
      setFilteredDataIndustry([]);
      setFilteredDataNeighbourhood([]);
      setFilteredDataTags([]);
    } else {
      
      setFilteredData(newFilter);
      setFilteredDataIndustry(newIndustryFilter);
      setFilteredDataNeighbourhood(newNeighbourhoodFilter);
      setFilteredDataTags(newTagsFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setFilteredDataIndustry([]);
    setFilteredDataNeighbourhood([]);
    setFilteredDataTags([]);
    setCloneBinfo(binfo);
    setWordEntered("");
    setFlag(true)
  };

  const onsubmit = (event) => {
    event.preventDefault();
    var masterList = filteredData.concat(filteredDataIndustry,filteredDataNeighbourhood,filteredDataTags);
    setCloneBinfo(masterList);
    /* instead of logging, we can output every business in this list as tiles on the users screen */
    console.log(masterList);
    
  }
    function getData() {
        axios.get("http://143.198.37.59:3003/getdata") //need to add the params later
        .then( res =>{ setBinfoState(res.data); setCloneBinfo(res.data); })
        .catch( err => console.log(err))
    }

    useEffect(() => {
        getData();
    }, [])
    return(
        <>
        <div className="lastContainer">
        <NavBar />
            <div className="search">
        <div className="searchInputs">
            <form onSubmit={onsubmit}>
            <input
            type="text"
            placeholder="Find a business"
            value={wordEntered}
            onChange={handleFilter}
            />
            </form>
            <div className="searchIcon">
            {flag ? (
                <IoSearch />
            ) : (
                <IoClose id="clearBtn" onClick={clearInput} />
            )}
            </div>
        </div>
        {(
            <div className="dataResult">
            {filteredData.slice(0, 15).map((value, key) => {
                return (
                <a className="dataItem" href={value.link} target="_blank">
                    <p>{value.businessName} </p>
                </a>
                );
            })}
            {filteredDataIndustry.slice(0, 15).map((value, key) => {
                return (
                <a className="dataItem" href={value.link} target="_blank">
                    <p>{value.businessName} </p>
                </a>
                );
            })}
            {filteredDataNeighbourhood.slice(0, 15).map((value, key) => {
                return (
                <a className="dataItem" href={value.link} target="_blank">
                    <p>{value.businessName} </p>
                </a>
                );
            })}
            {filteredDataTags.slice(0, 15).map((value, key) => {
                return (
                <a className="dataItem" href={value.link} target="_blank">
                    <p>{value.businessName} </p>
                </a>
                );
            })}
            </div>
        )}
        </div>
        </div>
        <div className="container2">
            {cloneBinfo.map(bis => <a href={"/getuser/"+bis._id}> <Tile key={bis._id} name={bis.businessName} 
            description={bis.description} image={bis.image} visible="green" /> </a> )}            
        </div>
        
        </>
    );
}
export default LandingPage;