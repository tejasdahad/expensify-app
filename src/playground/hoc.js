// HOC - A component(hoc) that renders another component.
// Reuse code
// Render Hijacking
// Prop manipulation
// Abstract state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>This info is : {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            { props.isAdmin && <p>This is private info. Do not share.</p>}
            <WrappedComponent {...props} />
        </div>
    );
}

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? <WrappedComponent {...props} /> : <p>User is not authenticated.</p>}
        </div>
    );
}

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

//ReactDOM.render(<AdminInfo isAdmin={true} info="Hey this is info" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={false} info="Hey this is info" />, document.getElementById('app'));