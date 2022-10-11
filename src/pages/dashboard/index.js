import React from "react";
import Head from "../../componentres/Head";
import Menu from "../../componentres/Menu";

export default function Dashboard(){
    return(
        
        <div className="dashboard-container">
            <Menu/>
            <div className="principal">
                <Head title="estou no Dashboard"/>
                <h1>estou no Dashboard</h1>
            </div>
        </div>
    )
}