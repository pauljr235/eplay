import Section from "../Section"
import { Action, Item, Items, Modal, ModalItem } from "./styles"

import aranha from '../../assets/images/banner-homem-aranha.png'
import zoom from '../../assets/images/zoom.png'
import play from '../../assets/images/play.png'
import fechar from '../../assets/images/fechar.png'
import hogwarts from '../../assets/images/harryPotter.png'
import { useState } from "react"
import { GalleryItem } from "../../pages/Home"



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
  items: GalleryItem[]
}

interface ModalState extends GalleryItem {
  isVisible: boolean
}

const Gallery = ({defaultCover, name, items}: Props) => {
  const [modal, setModal] = useState<ModalState>({
    isVisible: false,
    type: 'image',
    url: ''
  })

  const getImageCover = (item: GalleryItem) => {
    if (item.type === 'image') return item.url
    return defaultCover
  }

    const getImageIcon = (item: GalleryItem) => {
    if (item.type === 'image') return zoom
    return play
  }

  const closeModal = () => {
          setModal({
            isVisible: false,
            type: 'image',
            url: ''
          })
  }

  return(
    <>
<Section title='Galeria' background='black'>
    <div className='container'>
      <Items>
        {items.map((media, index) => (
        <Item key={media.url} onClick={() => {
          setModal({
            isVisible: true,
            type: media.type,
            url: media.url
          })

        }}>
          <img src={getImageCover(media)} alt={`Media ${index + 1} de ${name}`} />
          <Action>
            <img src={getImageIcon(media)} alt="play" />
          </Action>
        </Item>
        ))}
      </Items>
    </div>
</Section>
    <Modal className={modal.isVisible ? 'visivel' : ''}>
      <ModalItem className="container">
        <header>
          <h4>{name}</h4>
          <img 
          src={fechar}
          alt="Botao fechar" 
          onClick={() => {
            closeModal()
          }} />
        </header>
        {modal.type === 'image' ? (
          <img src={modal.url}/>
        ):(
          <iframe src={modal.url} />
        )}
      </ModalItem>
      <div
      onClick={() => {
        closeModal()
      }} 
      className="overlay"></div>
    </Modal>
  </>
  )
}

export default Gallery