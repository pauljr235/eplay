import { useEffect, useState } from 'react'
import ProductsList from '../../components/ProductsList'
import { Game } from '../Home'


const Categories = () => {

  const [gamesAcao, setGamesAcao] = useState<Game[]>([])
  const [gamesEsportes, setGamesEsportes] = useState<Game[]>([])
  const [gamesLuta, setGamesLuta] = useState<Game[]>([])
  const [gamesRpg, setGamesRpg] = useState<Game[]>([])
  const [gamesSimulacao, setGamesSimulacao] = useState<Game[]>([])

  useEffect(() =>{
    fetch('https://api-ebac.vercel.app/api/eplay/acao')
    .then((res) => res.json())
    .then(resJson =>{
      setGamesAcao(resJson)
    })
  }, [])

    useEffect(() =>{
    fetch('https://api-ebac.vercel.app/api/eplay/esportes')
    .then((res) => res.json())
    .then(resJson =>{
      setGamesEsportes(resJson)
    })
  }, [])

      useEffect(() =>{
    fetch('https://api-ebac.vercel.app/api/eplay/luta')
    .then((res) => res.json())
    .then(resJson =>{
      setGamesLuta(resJson)
    })
  }, [])

      useEffect(() =>{
    fetch('https://api-ebac.vercel.app/api/eplay/rpg')
    .then((res) => res.json())
    .then(resJson =>{
      setGamesRpg(resJson)
    })
  }, [])

      useEffect(() =>{
    fetch('https://api-ebac.vercel.app/api/eplay/simulacao')
    .then((res) => res.json())
    .then(resJson =>{
      setGamesSimulacao(resJson)
    })
  }, [])

  return(
  <>
    <ProductsList games={gamesAcao} title="Ação" background="black" />
    <ProductsList games={gamesEsportes} title="Esportes" background="gray" />
    <ProductsList games={gamesLuta} title="Luta" background="black" />
    <ProductsList games={gamesRpg} title="RPG" background="gray" />
    <ProductsList games={gamesSimulacao} title="Simulação" background="black" />
  </>
  )
}


export default Categories
