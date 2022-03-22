import { useContext } from "react";
import { createContext } from "react";

const UserContext = createContext(null);

function Withdraw() {
    const ctx = useContext(UserContext);
    return(
        <h1>Withdraw<br/>
            {JSON.stringify(ctx)}
        </h1>
    );
}

export default Withdraw