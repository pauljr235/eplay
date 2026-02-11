import styled from 'styled-components'

import { Props } from './index'
import { cores } from '../../styles'
import { Card } from '../Product/styles'

export const Container = styled.section<Omit<Props, 'title' | 'games'>>`
  background-color: ${(props) =>
    props.background === 'black' ? cores.preta : cores.cinza};

  ${Card} {
    background-color: ${(props) =>
      props.background === 'black' ? cores.cinza : cores.preta};
  }
`

export const Lista = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 24px;
  padding-bottom: 32px;
`

export const TituloPromocao = styled.h2`
  padding-top: 32px;
  padding-bottom: 32px;
  font-size: 18px;
  font-weight: bold;
`
