import React,{useState} from "react";
import {Sales,salesabi} from "../../artifacts/contracts/Sales.sol/Sales.json";





const Confirmation = ()=>{

let[Confirmed,setConfirmed] = useState(false);
let[info,setinfo] = useState(' ');
let[buttontext,setbuttontext] = useState('Confirm');

setConfirmed = ()=>{
    Confirmed = true;
    setbuttontext('Confirmed');


}

return(
    <>
    <h1> Your Payment has been processed!</h1>

    <p>
     
        Your order for { info } has been placed! 

        Once your order arrives, click the button below:



    </p>

    <button onClick={{setConfirmed}}> {buttontext}</button>
    </>
)
}
export default Confirmation;
