import * as React from "react";
import RecentInfo from "./RecentInfo";
import {Divider, Stack} from "@mui/material";

export default function RecentInfoStack ( ){
    return(
        <div>
            <Stack spacing={2}
                   divider={<Divider orientation="horizontal" flexItem />}
            >
                <RecentInfo/>
                <RecentInfo/>
                <RecentInfo/>
                <RecentInfo/>
            </Stack>
        </div>
    )
}