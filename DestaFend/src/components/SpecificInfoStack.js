import * as React from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Typography from "@mui/material/Typography";
import {useState,useEffect} from 'react';
import {default as axios} from "axios";
import CompanyCard from "./CompanyCard";



function  SpecificInfo({name,title}){

    return(
        <Typography variant="div"
                    mt={3}
                    sx={{display:"flex", flexWrap:"wrap",flexDirection:"row", alignItems:"center", justifyContent:"space-between" , width:"45%"}}>
            <Typography variant="h6">
                {title}:
            </Typography>
            <Typography variant="body2">
                {name}
            </Typography>
        </Typography>
    )

}

export default function SpecificInfoStack({id,company}) {
    id='614683a2d2a2a5d868cd1520';
    function checkID(compId) {
        return compId == id;
    }

    const[companyInfo,setCompanyInfo] = useState([]);
    const[selectedCompany, setSelectedCompany] = useState(company);
    const[companyData, setCompanyData] = useState(null);


    useEffect(() =>{getCompanyInfo();},[]);

    const businessInfo = {
        "businessName": company.businessName,
        "businessOwnerName": company.businessOwnerName,
        "address": company.address,
        "businessContact": company.businessContact,
        "publicContact": company.publicContact,
        "industries": company.industries[0]
    }

    const keys = Object.keys(businessInfo);


    const getCompanyInfo = async () => {
        try{
            const response = await axios.get("http://143.198.37.59:3003/");
            console.log(response.data);
            setCompanyInfo(response.data);

            console.log(response.data);
            console.log(selectedCompany);


        }
        catch(err) {
            console.log(err);
        }

    }


    return (
        <div>
               <Stack spacing={2}>
                   {
                      keys.map(item=><SpecificInfo title={item} name={businessInfo[item]}/>)
                   }

                </Stack>

        </div>
    );
}