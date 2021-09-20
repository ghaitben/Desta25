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
        <Box sx={{ width: '100%', display:"flex", flexDirection:"row",backgroundColor:"rgb(102,162,186)",flexWrap:"wrap" }}>
            <img src={require("./logo.png").default} className="logo"/>
            <Tabs Tabs value={false} selectionFollowsFocus onChange={handleChange} aria-label="nav tabs example">   
                
                <Tab label="Home" href="/home" style={{marginTop:"20px", marginLeft: "15px", color:"white", fontSize:"20px", fontWeight:"bold"}} />
                <Tab label="About" href="/about" style={{marginTop:"20px", marginLeft: "15px", color:"white", fontSize:"20px", fontWeight:"bold"}} />
                <Tab label="Register" href="/form/" style={{marginTop:"20px", marginLeft: "15px", color:"white", fontSize:"20px", fontWeight:"bold"}} />
            </Tabs>
        </Box>
    );

}