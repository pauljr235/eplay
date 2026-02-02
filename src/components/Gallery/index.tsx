import Section from "../Section"
import { Action, Item, Items, Modal, ModalItem } from "./styles"

import aranha from '../../assets/images/banner-homem-aranha.png'
import zoom from '../../assets/images/zoom.png'
import play from '../../assets/images/play.png'
import fechar from '../../assets/images/fechar.png'
import hogwarts from '../../assets/images/harryPotter.png'

type GalleryItem = {
  type: 'image' | 'video',
  url: string
}

const mock: GalleryItem[] = [
  {
    type: 'image',
    url: aranha
  },
  {
    type: 'image',
    url: hogwarts
  },
  {
    type: 'video',
    url: 'https://www.youtube.com/embed/zw47_q9wbBE?si=KlQ9_vv0EtYDTTEo'
  }
]

type Props = {
  defaultCover: string,
  name: string
}

const Gallery = ({defaultCover, name}: Props) => {
  const getImageCover = (item: GalleryItem) => {
    if (item.type === 'image') return item.url
    return defaultCover
  }

    const getImageIcon = (item: GalleryItem) => {
    if (item.type === 'image') return zoom
    return play
  }

  return(
    <>
<Section title='Galeria' background='black'>
    <div className='container'>
      <Items>
        {mock.map((media, index) => (
        <Item key={media.url}>
          <img src={getImageCover(media)} alt={`Media ${index + 1} de ${name}`} />
          <Action>
            <img src={getImageIcon(media)} alt="play" />
          </Action>
        </Item>
        ))}
      </Items>
    </div>
</Section>
    <Modal>
      <ModalItem className="container">
        <header>
          <h4>{name}</h4>
          <img src={fechar} alt="Botao fechar" />
        </header>
        <img src={aranha} alt="foto teste" />
      </ModalItem>
      <div className="overlay"></div>
    </Modal>
  </>
  )
}

export default Gallery