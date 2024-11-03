import React from "react";

function UpdateButton({id, onUpdate}) {
    return (
        <button className='contact-item__update' onClick={() => onUpdate(id)}>Update</button>
    )
}

export default UpdateButton;