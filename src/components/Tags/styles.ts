import styled from 'styled-components'
import { cores } from '../../styles'

import { Props } from '.'

export const TagContainer = styled.div<Props>`
  background-color: ${cores.verde};
  color: ${cores.branca};
  font-size: ${(props) => (props.size === 'big' ? '16px' : '10px')}
  font-weight: bold;
  padding: 8px 16px;
  border-radius: 8px;
  display: inline-block;
`
