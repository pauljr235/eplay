import bannerImg from '../../assets/images/harryPotter.png'
import { Game } from '../../pages/Home'
import Button from '../Button'
import Tag from '../Tags'
import { Banner, BannerInfo, Price, Title } from './styles'

type Props = {
    game: Game
}

const Hero = ({game}: Props) => 
<Banner style={{backgroundImage: `url(${game.media.cover})`}}>
    <div className='container'>
        <div>
            <Tag>{game.details.category}</Tag>
            <Tag>{game.details.system}</Tag>
        </div>
        <BannerInfo>
            <Title>{game.name}</Title>
            <Price><span>De R$ {game.prices.old}</span><br />Por R$ {game.prices.current}</Price>
            <Button variant='primary' title='Clique aqui' type='button'>Adicionar ao carrinho</Button>
        </BannerInfo>
    </div>
</Banner>

export default Hero
