import React from "react";

const Logout = props => {
    const onSubmit = event => {
        event.preventDefault();
        props.logout();
    };
    return (
        <div className="nav-item">
            <form onSubmit={onSubmit}>
                <button className="nav-link" type="submit">
                    Logout
                </button>
            </form>
        </div>
    );
};

export default Logout;