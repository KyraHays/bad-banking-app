import { useContext } from 'react';
import { createContext } from 'react';

const UserContext = createContext(null);

function AllData() {
    const ctx = useContext(UserContext);
    return(
        <h1>AllData<br/>
            {JSON.stringify(ctx)}
        </h1>
    );
}

export default AllData;

