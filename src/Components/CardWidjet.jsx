import React from 'react'
//import Items from './Items'


const CardWidjet = ({items}) => {
    return (
        <div className="d-flex">
            <i className="bi bi-cart2 text-light">{items}</i>
        </div>
    )
}

export default CardWidjet
