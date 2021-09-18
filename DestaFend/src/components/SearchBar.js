import * as React from 'react';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import {OutlinedInput} from "@mui/material";

export default function SearchBar(){
    return(
        <Box sx={{ '& > :not(style)': { m: 1,width: '25ch'} }}>
            <FormControl variant="outlined">
                <OutlinedInput
                    sx={{height:'5ch'}}
                    id="input-with-icon-adornment"
                    startAdornment={
                        <InputAdornment position="start">
                            <SearchIcon />
                        </InputAdornment>
                    }
                />
            </FormControl>
        </Box>

    );
}