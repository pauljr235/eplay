import bannerImg from '../../assets/images/harryPotter.png'
import Button from '../Button'
import Tag from '../Tags'
import { Banner, BannerInfo, Price, Title } from './styles'

const Hero = () => 
<Banner style={{backgroundImage: `url(${bannerImg})`}}>
    <div className='container'>
        <div>
            <Tag>RPG</Tag>
            <Tag>PS5</Tag>
        </div>
        <BannerInfo>
            <Title>Hogwarts Legacy</Title>
            <Price><span>De R$ 290,90</span><br />Por R$ 190,90</Price>
            <Button variant='primary' title='Clique aqui' type='button'>Adicionar ao carrinho</Button>
        </BannerInfo>
    </div>
</Banner>

export default Hero
