import { Game } from '../../pages/Home'
import Product from '../Product'
import { Container, Lista, TituloPromocao } from './styles'

export type Props = {
  title: string
  background: 'gray' | 'black'
  games: Game[]
}

const ProductsList = ({ background, title, games }: Props) => {

  const getGameTags = (game: Game) => {
    const tags = []

    if (game.release_date){
      tags.push(String(game.release_date))
    }

    if (game.prices.discount){
      tags.push(String(`${game.prices.discount}%`))
    }

    if(game.prices.current){
      tags.push(String(`R$ ${game.prices.current}`))
    }

    return tags

  }

  return(
  <Container background={background}>
    <div className="container">
      <TituloPromocao>{title}</TituloPromocao>
      <Lista>
        {games.map((game) => (
          <Product
            key={game.id}
            category={game.details.category}
            description={game.description}
            image={game.media.thumbnail}
            infos={getGameTags(game)}
            system={game.details.system}
            title={game.name}
          />
        ))}
      </Lista>
    </div>
  </Container>
  )

}


export default ProductsList
