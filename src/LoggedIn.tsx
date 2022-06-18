import { Button } from '@mui/material';
import { useEffect, useState } from 'react';
import { ChromeMessage, Sender } from "./types";

const LoggedIn = (props: { user: string, logOut: () => void }) => {
    
    return (<>
        <div>
            Hi {props.user}
        </div>
            <Button variant="text" onClick={props.logOut}>log out</Button>
    </>)
}

export default LoggedIn;