import Cards from "./cards"
import React, { useEffect, useState } from 'react'
import celebridades from '../helpers/Usuarios'

const Listcards = () => {
    

    return (
        <div className="container">
            <div className="row ">
            { celebridades.map(user => (
                <div className="col-sm-4" key={user.login.uuid}>
                    <Cards user={user}/>
                </div> 
            ))}   
        </div>
        </div>
    )
}

export default Listcards
