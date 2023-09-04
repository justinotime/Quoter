import React from "react";

function Alert({ alert }) {
    return (
        <div className={alert ? 'alert' : 'alert hidden'}>
            <h3>Type a word before searching</h3>
        </div>
    )
}

export default Alert