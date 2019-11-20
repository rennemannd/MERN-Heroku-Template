import React from "react";
import { Redirect } from "react-router-dom";

const Dashboard = ({ user }) => {
    return (
        <>
            <div className="dashboard-view-container">
                <div className="dashboard-container">
                    <h1>Dashboard</h1>
                    <p>Hello, {user.name}!</p>
                    <br />
                    {Object.keys(user).map((k, index) => (
                        <p
                            key={index}
                            className="dashboard-json-info"
                        >{`${k}: ${user[k]}`}</p>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Dashboard;
