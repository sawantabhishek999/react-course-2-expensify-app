//HOC - a component that renders another component
//Reuse Code
//Render hijacking
//prop manipulations
//Abstract state

import React from 'react';
import ReactDOM from 'react-dom';


const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin  && <p>This is private Info. Please don't share</p>}
            <WrappedComponent {...props}/>  
        </div>
    );//spread operator is used to spread out all key value pairs availble to the component
};

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated == true ? (<WrappedComponent {...props}/>) : (<p>Please login to view the info</p>)}
              
        </div>
    );//spread operator is used to spread out all key value pairs availble to the component
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={true} info="These are the details"/>, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={true} info="These are the details"/>, document.getElementById('app'));