import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Divider} from "@mui/material";

export default function CompanyPageCard({company,textImage}) {
    return (
        <Card sx={{ maxWidth: 800 }}>
            <CardMedia
                component="img"
                height="140"
                image={"data:image;base64,"+company.image}
                alt="place holder"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {company.businessName}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {company.address}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" variant="contained">Website</Button>
                <Button size="small" variant="outlined">Share</Button>
            </CardActions>

        </Card>
    );
}