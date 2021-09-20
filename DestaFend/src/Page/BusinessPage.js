import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CompanyPageCard from "../components/CompanyPageCard";
import Overview from "../components/Overview";
import SimilarCompanyStack from "../components/SimilarCompanyStack";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";


export default function BusinessPage(props) {
    return (
        <Box sx={{ flexGrow: 1 }} m={4}>
            <Grid container spacing={2}>
                <Grid item xs={6} md={8}>
                    <CompanyPageCard company={props.company}/>
                    <Overview id={props.id} company_selected={props.company}/>
                </Grid>

                <Grid item xs={6} md={4}>
                    <Card sx={{padding:2}}>
                        <Typography variant="h4" align="center" mb={2}>
                            Related companies
                        </Typography>
                        <SimilarCompanyStack/>
                    </Card>
                </Grid>

            </Grid>
        </Box>
    );
}
