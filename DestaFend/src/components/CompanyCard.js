import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';

import {Button, CardActionArea, CardActions, Divider} from '@mui/material';

const useStyles = makeStyles({
    textContent: {
        wordWrap:"break-word"
    }
});

export default function CompanyCard({name,location,desc,click,id,textImage,company}) {
    const classes = useStyles();


    return (
        <Card sx={{ maxWidth: 345, marginRight: 2, width:245, marginBottom:7}}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={"data:image;base64,"+textImage}
                    alt="green iguana"
                    onClick={()=>click(company)}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" className={classes.textContent}>
                        {location}
                    </Typography>


                </CardContent>
            </CardActionArea>

            <Divider />

            <CardContent>
                <Typography variant="body2" color="text.secondary" className={classes.textContent}>
                    {desc}
                </Typography>

            </CardContent>


        </Card>
    );
}