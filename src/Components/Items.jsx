import React from 'react'


const Items = ({cardText, cardTitle, img, setItems, items}) => {
    
   
    
    return (

    <div  className="row">
        <div  className="col-sm-3">
             <div className="card">
                <div  className="card-body">
                    <img src={img}  className="card-img-top" alt="..."/>
                    <h5  className="card-title">{cardTitle}</h5>
                    <p  className="card-text">{cardText}</p>
                    <button href="./index.js"   className="btn btn-primary  d-grid gap-3" onClick={()=>setItems (items+1) }> Añadir </button>
                    <p></p>
                    <button href="./index.js"   className="btn btn-primary  " onClick={()=>setItems (items-1) }> Quitar </button>
                    
                </div>
            </div>
        </div>
     </div> 
    )
}

export default Items
