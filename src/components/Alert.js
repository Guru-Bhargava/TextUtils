import React from 'react'

export default function Alert(props) {
    
    const capitalize_first_letter_of_alert=(word)=>{
        const lower=word.toLowerCase();
        return lower.charAt(0).toUpperCase()+lower.slice(1);
    }

    return (
        // props.alert && -- basically evaluates the alert msg if its empty then we dont have 'type' and 'msg' and can give us an error
        props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{capitalize_first_letter_of_alert(props.alert.type)}</strong>:{props.alert.msg}
            {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
        </div>
    )
}
