import { useContext, createContext } from "react";

const UserContext = createContext(null);

function Login() {
    const ctx = useContext(UserContext);
    return(
        <h1>Login<br/>
            {JSON.stringify(ctx)}
        </h1>
    );
}

export default Login;