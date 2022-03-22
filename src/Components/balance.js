import { useContext } from "react";
import { createContext } from "react";

const UserContext = createContext(null);

function Balance() {
    const ctx = useContext(UserContext);
    return(
        <h1>Balance<br/>
            {JSON.stringify(ctx)}
        </h1>
    );
}

export default Balance;