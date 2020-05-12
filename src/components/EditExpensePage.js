import React from 'react';

const EditExpensePage = (props) => {
    return (
        <div>
            Editing information of {props.match.params.id} 
        </div>
    );
}

export default EditExpensePage;