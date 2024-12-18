import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tags/styles'

export const Card = styled.div`
  background-color: ${cores.cinza};
  border-radius: 8px;
  padding: 8px;
  position: relative;

  ${TagContainer} {
    padding: 4px;
    font-size: 10px;
    margin-right: 4px;
  }
`

export const Titulo = styled.h3`
  font-weight: bold;
  font-size: 20px;
  display: block;
  margin-top: 16px;
  margin-bottom: 8px;
`

export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin-top: 16px;
`

export const InfosD = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`
