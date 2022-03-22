import { useContext, createContext } from "react";

const UserContext = createContext(null);

function Deposit() {
    const ctx = useContext(UserContext);
    return(
        <h1>Deposit<br/>
            {JSON.stringify(ctx)}
        </h1>
    );
}

export default Deposit;