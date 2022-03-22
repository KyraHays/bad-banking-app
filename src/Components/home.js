import React from "react";
import Card from "./context";
import 'bootstrap/dist/css/bootstrap.css';

function Home() {
    return(
        <Card 
        bgcolor="primary"
        txtcolor="white"
        header="BadBank landing page"
        title="Welcome to the bank"
        text="You can use this bank"
        body={(<img src="bank.png" className="img-fluid" alt="Responsive"/>)}
        />
    );
}

export default Home;