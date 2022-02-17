import React, { useMemo } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { getHeroById } from '../../selectors/getHeroById';

export const HeroScreen = () => {
    
    const {heroid} = useParams();

    const hero = useMemo(()=> getHeroById(heroid), [ heroid ]) ;

    const imagePath = `/assets/heroes/${hero.id}.jpg`

    const navigate = useNavigate();

    const handleReturn = () => {
        navigate(-1)
    }

    if (!hero) {
        return <Navigate to="/" />
    }

    const {superhero, publisher, alter_ego, first_appearance, characters} = hero;
    
    return (
        <div className='row mt-5'>
            <div className='col-4'>
                <img
                    src={imagePath} alt={superhero}
                    className='img-thumbnail animate__animated animate__fadeInLeft'
                ></img>
            </div>
            <div className='col-8 animate__animated animate__fadeInRight'>
                    <h2>{superhero}</h2>
                    <hr/>
                    <h4>{publisher}</h4>
                    <b>Personajes: </b><p>{characters}</p>
                    <b>Alter ego: </b><p>{alter_ego}</p>
                    <b>Primera Aparición: </b><p>{first_appearance}</p>

                    <button 
                        className='btn btn-outline-danger'
                        onClick={handleReturn}
                    > Regresar </button>
                

            </div>
            
        </div>
    )
}
