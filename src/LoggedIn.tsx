import { Button } from '@mui/material';

const LoggedIn = (props: { user: string, logOut: () => void }) => {
    return (<>
        <div>
            Hi {props.user}
        </div>
            <Button variant="text" onClick={props.logOut}>log out</Button>
    </>)
}

export default LoggedIn;