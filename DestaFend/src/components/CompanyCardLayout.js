import * as React from 'react';
import {useState,useEffect} from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CompanyCard from "./CompanyCard";
import BusinessPage from "../Page/BusinessPage";
import SearchBar from './SearchBar';
import { IoSearch } from "react-icons/io5"
import { IoClose } from "react-icons/io5";
import './search.css'
import { v4 as uuidv4 } from 'uuid';


const axios = require('axios').default;

export default function CompanyCardLayout() {

    const[companyInfo,setCompanyInfo] = useState([]);
    const [selectedCompany, setSelectedCompany] = useState(null);
    const [company, setCompany] = useState({});
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
  
      const newFilter = companyInfo.filter((value) => {
          return value.businessName.toLowerCase().includes(searchWord.toLowerCase());
      }
      );
      const newIndustryFilter = companyInfo.filter((value) => {
        return value.industries.some((e => e.toLowerCase().includes(searchWord.toLowerCase())));
        
      }
      );
      const newNeighbourhoodFilter = companyInfo.filter((value) => {
        return value.neighbourhoods.some((e => e.toLowerCase().includes(searchWord.toLowerCase())));
      }
      );
      const newTagsFilter = companyInfo.filter((value) => {
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
      setCloneBinfo(companyInfo);
      setWordEntered("");
      setFlag(true)
    };
    
    const onsubmit = (event) => {
      event.preventDefault();
      let newMaster = []
      var masterList = filteredData.concat(filteredDataIndustry,filteredDataNeighbourhood,filteredDataTags);
      for(var i = 0; i < masterList.length; i++) {
          let tmp = masterList[i];
          let canPush = true;
          for(var j = i + 1; j < masterList.length; j++) {
              if(masterList[j] === tmp){
                  canPush = false;
              }
          }
          if(canPush) {
              newMaster.push(tmp);
          }
      }


      setCloneBinfo(newMaster);
      /* instead of logging, we can output every business in this list as tiles on the users screen */
      //setCompanyInfo(masterList);
      
    }
      function getData() {
          axios.get("http://localhost:3003/getdata") //need to add the params later
          .then( res =>{ setCompanyInfo(res.data); setCloneBinfo(res.data); })
          .catch( err => console.log(err))
      }
  
      useEffect(() => {
          getData();
      }, [])    

      const getCompanyInfo = async () => {
        //try{
            const response = await axios.get("http://localhost:3003/getdata");
            setCloneBinfo(response.data);
            //setCloneBinfo(response.data);
            //console.log(selectedCompany);

        }

    //useEffect(() =>{getCompanyInfo();},[selectedCompany]);


    const show = (id) => {
        console.log(id);
    }

    
        //catch(err) {
            //console.log(err);
        //}
    //}



            if(selectedCompany == null) {
                return (
                    <>
        <div className="search">
        <div className="searchInputs">
            <form onSubmit={onsubmit} className="searchBox">
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





                    <Box sx={{flexGrow: 1, margin: 5}}>
                        <Grid container spacing={{xs: 2, md: 3}} columns={{xs: 4, sm: 8, md: 12}}>
                            {cloneBinfo.map(
                                item => <CompanyCard
                                    key={uuidv4()}
                                    id={item._id.$oid}
                                    name={item.businessName}
                                    location={item.address}
                                    desc={item.description}
                                    company={item}
                                    textImage={item.image}
                                    click={setSelectedCompany}/>)}
                        </Grid>
                    </Box></>);
            } else{
                return <BusinessPage id={selectedCompany._id} company={selectedCompany}  />
            }

        }

