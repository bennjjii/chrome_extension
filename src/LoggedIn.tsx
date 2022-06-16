import { Button } from '@mui/material';
import { useEffect, useState } from 'react';
import { ChromeMessage, Sender } from "./types";

const LoggedIn = (props: { user: string, logOut: () => void }) => {

    const [idleState, setIdleState] = useState(false);

    useEffect(() => {
        chrome.idle.setDetectionInterval(15); //15 seconds is minimum permitted by API
        chrome.idle.onStateChanged.addListener(newState => {
            switch (newState) {
                case 'active':
                    setIdleState(false);
                    break;
                case 'idle':
                    setIdleState(true)
                    sendIdleMessage(props.user);
                    break;
            }
        })
    }, [])

    const sendIdleMessage = (name: string) => {
        const message: ChromeMessage = {
            from: Sender.Extension,
            message: name,
        }

        const queryInfo: chrome.tabs.QueryInfo = {
            active: true,
            currentWindow: true
        };

        chrome.tabs && chrome.tabs.query(queryInfo, tabs => {
            const currentTabId = tabs[0].id;
            if (currentTabId) {
                chrome.tabs.sendMessage(
                    currentTabId,
                    message,
                    () => { }
                );
            }
        });
    }
    
    return (<>
        <div>
            Hi {props.user}
        </div>
            <Button variant="text" onClick={props.logOut}>log out</Button>
    </>)
}

export default LoggedIn;