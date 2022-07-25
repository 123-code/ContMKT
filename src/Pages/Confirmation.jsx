import React,{useState} from "react";

let[Confirmed,setConfirmed] = useState(false);
let[info,setinfo] = useState(' ');


const Confirmation = ()=>{
return(
    <>
    <h1> Your Payment has been processed!</h1>

    <p>
        Your order for { info } has been placed! 



    </p>

    <button> Confirm </button>
    </>
)
}
export default Confirmation;
