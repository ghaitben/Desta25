import * as React from 'react';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import {OutlinedInput} from "@mui/material";
import {useState, useEffect} from 'react'
import axios from 'axios'
import { IoSearch } from "react-icons/io5"
import { IoClose } from "react-icons/io5";


export default function SearchBar(){
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
          axios.get("http://localhost:3003/getdata") //need to add the params later
          .then( res =>{ setBinfoState(res.data); setCloneBinfo(res.data); })
          .catch( err => console.log(err))
      }
  
      useEffect(() => {
          getData();
      }, [])
    return(
        //<Box sx={{ '& > :not(style)': { m: 1,width: '25ch'} }}>
            //<FormControl variant="outlined">
                //<OutlinedInput
                    //sx={{height:'5ch'}}
                    //id="input-with-icon-adornment"
                    //startAdornment={
                        //<InputAdornment position="start">
                            //<SearchIcon />
                        //</InputAdornment>
                    //}
                ///>
            //</FormControl>
        //</Box>
        <>
    
        
        </>
        

    );
}