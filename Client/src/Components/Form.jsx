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
            
            <h2>Buscar por Marca</h2>
         


        </div>
    )
}

 export const Formvender=()=>{
    return(
        <>
        <h1> Vender </h1>

        <div>
            <h2>Marca</h2>
            <input type="text" placeholder="Marca"/>
            </div>
           
            <div>
            <h2>Precio</h2>
            <input type="text" placeholder="Precio"/>
            </div>

            <div>
            <h2>Placa</h2>
            <input type="text" placeholder="Precio"/>
            </div>


        </>
    )
}