import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import ProgressBar from "@ramonak/react-progress-bar";
import HeaderPoke from "../components/Header/HeaderPoke";
import "./styles/pokeInfo.css"


const PokeInfo = () => {
  
  const {name} = useParams()

  const url = `https://pokeapi.co/api/v2/pokemon/${name}`

  const [pokemon, getPokemonByName, haserror] = useFetch(url)
  
  useEffect(() => {
    getPokemonByName()
  }, [name])
  
  return (
    <div>
      {haserror ? (
        <h1>this pokemon not exist</h1>
      ) : (
        <>
          <HeaderPoke />
         
          <header className="header"></header>
          <div className="pokemon__info__container">
            <article className={`pokemon__info border-${pokemon?.types[0].type.name}`}>
              <img className="pokemon__info__sprite"src={pokemon?.sprites.other["official-artwork"].front_default} alt=""/>
              <header className={`pokemon__info__header bg-${pokemon?.types[0].type.name}`}></header>
              <section className="pokemon__info__body">
                <div className="pokemon__info__br">
                  <hr className="pokemon__info__hr" />
                  <h3 className={`pokemon__info__name color-${pokemon?.types[0].type.name}`}>
                    {pokemon?.name}
                  </h3>
                  <hr className="pokemon__info__hr" />
                </div>
                <ul className="pokemon__info__ul">
                  <li className="pokemon__adj">height</li>
                  <li className="pokemon__adj">weight</li>
                  <span className="pokemon__span">{pokemon?.height}</span>
                  <span className="pokemon__span">{pokemon?.weight}</span>
                </ul>
                <div className="pokemon__info__uls">
                  <div>
                    <span className="pokemon__info__span__li">Type</span>
                    <ul className="pokemon__info__types">
                      {pokemon?.types.map((objType) => (
                        <li
                          className="pokemon__info__type-specific"
                          key={objType.type.url}
                        >
                          {objType.type.name}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <span className="pokemon__info__span__li">Hability</span>
                    <ul className="pokemon__info__hab">
                      {pokemon?.abilities.map((objType) => (
                        <li
                          className="pokemon__info__hab__li"
                          key={objType.ability.url}
                        >
                          {objType.ability.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <ul className="pokemon__info__stats">
                  {pokemon?.stats.map((objStat) => (
                    <li
                      className="pokemon__info__stats-specific"
                      key={objStat.stat.url}
                    >
                      <div className="pokemon__info__container">
                        <span className="pokemon__info__stats-label">
                          {objStat.stat.name}
                        </span>
                        <span className="pokemon__info__stats-label">{objStat.base_stat} /150</span>
                      </div>
                      <ProgressBar
                        className="wrapper"
                        barContainerClassName="container"
                        completed={objStat.base_stat}
                        maxCompleted={150}
                      />
                      <span
                        className={`pokemon__info__stats-value color-${pokemon?.types[0].type.name}`}
                      ></span>
                    </li>
                  ))}
                </ul>
              </section>
            </article>
          </div>
        </>
      )}
    </div>
  )
}

export default PokeInfo