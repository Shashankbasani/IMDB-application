import React from "react";

function Callback({count,func}){
    return(
        <>
        <button onClick={func}>inchgh</button>
        <h3>count:{count}</h3>
        </>
    )
}
export default React.memo(Callback);