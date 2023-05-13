import React, { useEffect } from 'react'
import useFetch from '../../hooks/useFetch'
import { useNavigate } from 'react-router-dom';
import "./styles/pokecard.css"

const PokeCard = ({url}) => {
  
  const [ pokemon , getPokeById] = useFetch(url)
  useEffect(() => {
    getPokeById()
  }, [])

  const navigate = useNavigate()
  const handleClick = () =>{
    navigate(`/pokedex/${pokemon.name}`)
  }
  
  return (
    <article  onClick={handleClick} className={`pokemon border-${pokemon?.types[0].type.name}`}>
      <header className={`pokemon_header bg-${pokemon?.types[0].type.name}`}>
        <img className='pokemon_sprite' src={pokemon?.sprites.other["official-artwork"].front_default} alt="" />
      </header>
      <section className='pokemon_body'>
        <h3 className='pokemon_name'>{pokemon?.name}</h3>
        <ul className='pokemon_type'>
          {pokemon?.types.map(objType =>(
            <li className='pokemon_type_specifit' key={objType.type.url}>{objType.type.name}</li>
          ))}
        </ul>
        <ul className='pokemon_stats'>
          {
            pokemon?.stats.map(objStats => (
              <li className='pokemon_stats_specifit' key={objStats.stat.url}>
                <span className='pokemon_stats_name'>{objStats.stat.name}</span>
                <span className='pokemon_stats_value'>{objStats.base_stat}</span>
              </li>
            ))
          }
        </ul>
      </section>
    </article>
  )
}

export default PokeCard