import Game from '../../models/Game'
import Product from '../Product'
import { Container, Lista, TituloPromocao } from './styles'

export type Props = {
  title: string
  background: 'gray' | 'black'
  games: Game[]
}

const ProductsList = ({ background, title, games }: Props) => (
  <Container background={background}>
    <div className="container">
      <TituloPromocao>{title}</TituloPromocao>
      <Lista>
        {games.map((game) => (
          <Product
            key={game.id}
            category={game.category}
            description={game.description}
            image={game.image}
            infos={game.infos}
            system={game.system}
            title={game.title}
          />
        ))}
      </Lista>
    </div>
  </Container>
)

export default ProductsList
