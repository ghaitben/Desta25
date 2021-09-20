import * as React from 'react';
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import SpecificInfoStack from "./SpecificInfoStack";
import Card from "@mui/material/Card";

export default function  Overview(props){
    return(
        <Card sx={{marginTop:2, padding:2}}>
            <Box sx={{ fontWeight: 'bold', m: 1 }}>Overview</Box>
            <Typography variant="body2" color="text.secondary" sx={{wordWrap:"break-word"}}>
                {props.company_selected.description}
            </Typography>

            <SpecificInfoStack id={props.id} company={props.company_selected}/>

        </Card>

    )
}