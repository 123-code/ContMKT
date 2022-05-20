import React from 'react';

const Form =(props)=>{
return(
    <>
    {props==="Comprar"?<Formcomprar/>:<Formvender/>}
    </>

)
} 
export default Form;

 export const Formcomprar = ()=>{
    return(
        <div className='form'>
            <h1>Comprar</h1>

        </div>
    )
}

 export const Formvender=()=>{
    return(
        <>
        <h1> Vender </h1>
        </>
    )
}