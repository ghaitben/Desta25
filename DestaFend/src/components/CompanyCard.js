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

export default function CompanyCard() {
    const classes = useStyles();


    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image="https://www.nomadfoods.com/wp-content/uploads/2018/08/placeholder-1-e1533569576673-960x960.png"
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Company Name
                    </Typography>
                    <Typography variant="body2" color="text.secondary" className={classes.textContent}>
                       Company location ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssd;d;ffffgjgvcksdmkfmdkfmsdlfdlfkdlfkdslklfkdslfkdlfkslfkdslfkdlsfk
                    </Typography>


                </CardContent>
            </CardActionArea>

            <Divider />

            <CardContent>
                <Typography variant="body2" color="text.secondary" className={classes.textContent}>
                    small company description
                </Typography>

            </CardContent>


        </Card>
    );
}