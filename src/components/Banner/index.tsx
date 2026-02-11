import { Imagem, Titulo, Precos } from './styles'
import bannerImg from '../../assets/images/banner-homem-aranha.png'
import Tag from '../Tags'
import Button from '../Button'
import { useEffect, useState } from 'react'
import { Game } from '../../pages/Home'

const Banner = () =>{

  const [destaque, setDestaque] = useState<Game>()

    useEffect(() => {
      fetch('https://api-ebac.vercel.app/api/eplay/destaque')
      .then(res => res.json())
      .then(resJson => {
        setDestaque(resJson)
      })
    }, [])
  return(
  <Imagem style={{ backgroundImage: `url(${destaque?.media.cover})` }}>
    <div className="container">
      <div>
        <Tag>Destaque do dia</Tag>
        <Titulo>{destaque?.name}</Titulo>
        <Precos>
          De <span>{`R$ ${destaque?.prices.old}0`}</span> <br />
          por apenas {`R$ ${destaque?.prices.current}0`}
        </Precos>
      </div>
      <Button
        variant='secondary'
        type="link"
        to="/produto"
        title="Clique aqui para aproveitar esta oferta"
      >
        Aproveitar
      </Button>
    </div>
  </Imagem>
  )
}


export default Banner
