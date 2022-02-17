import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string'
import { useForm } from '../../hooks/useForm'
import { getHeroesByName } from '../../selectors/getHeroesByName';
import { HeroCard } from '../hero/HeroCard';
import { useMemo } from 'react';

export const SearchScreen = () => {
   
    const navigate = useNavigate();
    const location = useLocation();
    const { q = '' } = queryString.parse(location.search);
    
    const [formValues, handleInputChange] = useForm({
        searchText: q,
    });
    
    const {searchText} = formValues;


    const heroesFilter = useMemo(()=> getHeroesByName(q),[q]) ;
    

    const handleSearch = (e) => {
        e.preventDefault();
        navigate(`?q=${ searchText }`);
    }

    return (
        
        <>
            <h1>Buscar</h1>
            <hr/>
            <div className='row'>
                <div className='col-5'>
                <form onSubmit={ handleSearch }>
                    <input
                        type="text"
                        placeholder='Buscar héroe...'
                        className='form-control'
                        name='searchText'
                        value= { searchText }
                        onChange={ handleInputChange }
                        />

                    <button
                        type='submit'
                        className='btn btn-outline-primary mt-1'
                    >
                        Buscar
                    </button>

                </form>
                </div>
                <div className='col-7'>
                    <h4>Resultados:</h4>
                    <hr/>
                    
                    {
                        (q ==='')
                            ? <div className="alert alert-info">Buscar un héroe</div>
                            : (heroesFilter.length === 0 )
                                && <div className= "alert alert-danger"> No hay resultados para: {q}</div>
                    }


                    {
                        heroesFilter.map(hero => (
                            <HeroCard
                            key={hero.id}
                            {...hero}
                            />
                            ))
                            
                    }
                
                </div> 
               
            </div>
        </>
    )
}

