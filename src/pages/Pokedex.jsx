import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import FormPoke from '../components/Pokedex/FormPoke'
import PokeContainer from "../components/Pokedex/PokeContainer"
import HeaderPoke from '../components/Header/HeaderPoke';
import "./styles/pokedex.css"


const Pokedex = () => {
  const url = "https://pokeapi.co/api/v2/pokemon?limit=10&offset=0"
  const [FormUrl, setFormUrl] = useState(url)
  const { trainerName } = useSelector(state => state)
  return (
    <div className='container-pokedex'>
      <HeaderPoke />
      <p className='parrafo-pokedex'>Welcome <span className='span-pokedex'>{trainerName}</span>, here you can find your favourite pokemon</p>
      <div>
        < FormPoke url1={url} setFormUrl={setFormUrl} />
      </div>
      <PokeContainer FormUrl={FormUrl}/> 
    </div>
  )
}

export default Pokedex