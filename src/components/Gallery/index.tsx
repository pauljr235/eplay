import Section from "../Section"

import aranha from '../../assets/images/banner-homem-aranha.png'
import zoom from '../../assets/images/zoom.png'
import { Action, Item, Items } from "./styles"

const Gallery = () => (
<Section title='Galeria' background='black'>
    <div className='container'>
      <Items>
        <Item>
          <img src={aranha} alt="Minha pica" />
          <Action>
            <img src={zoom} alt="play" />
          </Action>
        </Item>
        <Item>
          <img src={aranha} alt="Minha pica" />
        </Item>
        <Item>
          <img src={aranha} alt="Minha pica" />
        </Item>
        <Item>
          <img src={aranha} alt="Minha pica" />
        </Item>
      </Items>
    </div>
</Section>
)

export default Gallery