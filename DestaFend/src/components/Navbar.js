import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import SearchBar from "./SearchBar";

function LinkTab(props) {
    return (
        <Tab
            component="a"
            onClick={(event) => {
                event.preventDefault();
            }}
            {...props}
        />
    );
}

export default function Navbar(){
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%', display:"flex", flexDirection:"row",backgroundColor:"darkgrey",flexWrap:"wrap" }}>
            <SearchBar/>
            <Tabs value={value} onChange={handleChange} aria-label="nav tabs example">
                <LinkTab label="Page One" href="/drafts" />
                <LinkTab label="Page Two" href="/trash" />
                <LinkTab label="Page Three" href="/spam" />
                <LinkTab label="Page four" href="/spam" />
                <LinkTab label="Page five" href="/spam" />
                <LinkTab label="Page six" href="/spam" />
                <LinkTab label="Page seven" href="/spam" />


            </Tabs>
        </Box>
    );

}