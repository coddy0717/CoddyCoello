import React, {useState} from 'react'
const Cards = () => {
    const [celebridades, setcelebridades] = useState(null)
    const [error, seterror] = useState(false)
        const getUsuarios = async() =>{
            try {
                const res = await fetch("https://randomuser.me/api/?results=1")
                const data = await res.json()
                setcelebridades(data.results[0])
                seterror(false)
            } catch (error) {
                console.log(error)
                seterror(true)
            }
            
        }
    if (error){
        return <div class="alert alert-danger" role="alert">
                    Error a cargar el api Users! <a href='https://randomuser.me'>Revise el link</a>
               </div>
    }
    return ( 
                    
        <div className = "card postion-relative">
        <div className='position-sticky top-50 start-0 col-sm-20 cold-md-20 col-lg-20'> 
        <img src={celebridades?.picture?.large} className="card-img-top"/>
        <div className="card-body text-center">
            <h5 className="card-title">{celebridades?.name?.last}</h5>
            <button className='btn btn-dark fs-4'
            onClick={getUsuarios}> Cambie a cualquier persona del🌎
            </button>
        </div>        
        </div>
        </div>
        
    
)
    
}

export default Cards;

