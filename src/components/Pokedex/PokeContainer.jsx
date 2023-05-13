import { useEffect } from 'react'
import useFetch from '../../hooks/useFetch'
import PokeCard from './PokeCard'
import "./styles/pokeContainer.css"


const PokeContainer = ({FormUrl}) => {

  
  
  const [pokemons,getAllPokemons] = useFetch(FormUrl)

  useEffect(() => {
    getAllPokemons()
  }, [FormUrl])
  
  console.log(pokemons)

  return (
    <div className='poke-container'>
      {
        pokemons?.results
        ?(
          pokemons?.results.map(pokemon => (
            <PokeCard
              key={pokemon.url}
              url={pokemon.url}
            />
         ))
        ) 
        : (
          pokemons?.pokemon.map(objPoke =>(
            <PokeCard 
              key={objPoke.pokemon.url}
              url={objPoke.pokemon.url}
            />
          ))
        )  
        
      }
    </div>
  )
}

export default PokeContainer