import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { cores } from '../../styles'

import { Props } from '.'

export const ButtonContainer = styled.div<Props>`
  border: 2px solid ${cores.branca};
  color: ${(props) => (props.variant === 'primary' ? cores.branca : cores.cinza)};
  background-color: ${(props) => (props.variant === 'primary' ? cores.verde : 'transparent')};
  font-size: 16px;
  font-weight: bold;
  padding: 8px 16px;
  border-radius: 8px;
  border: none;
`
export const ButtonLink = styled(Link)`
  border: 2px solid ${cores.branca};
  color: ${cores.branca};
  background-color: transparent;
  font-size: 16px;
  font-weight: bold;
  padding: 8px 16px;
  text-decoration: none;
  border-radius: 8px;
`
