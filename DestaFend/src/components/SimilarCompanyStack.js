import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import CompanyCard from "./CompanyCard";
import {CardActionArea} from "@mui/material";


 function SimilarCompany() {

    return (
        <Card sx={{ display: 'flex' }}>
            <CardActionArea>

                <Box sx={{ display: 'flex', flexDirection: 'column'}}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography component="div" variant="h5">
                            Company Name
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div">
                            Sector
                        </Typography>
                    </CardContent>
                </Box>

            </CardActionArea>

            <CardMedia
                component="img"
                sx={{ width: 200 }}
                image="https://www.nomadfoods.com/wp-content/uploads/2018/08/placeholder-1-e1533569576673-960x960.png"
                alt="company logo"
            />

        </Card>
    );
}

export default  function SimilarCompanyStack(){
     return(
         <Stack spacing={2}>
             {Array.from(Array(6)).map((_, index) => (
                 <SimilarCompany/>
             ))}
         </Stack>

     )
}