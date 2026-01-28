import { styled } from "styled-components"
import { Props } from "."
import { cores } from "../../styles"


export const Container = styled.section<Omit<Props, 'title' | 'games'>>`
  background-color: ${(props) =>
    props.background === 'black' ? cores.preta : cores.cinza};

    p{
        max-width: 640px;
        line-height: 22px;
        padding-bottom: 32px;
    }
`

export const TituloPromocao = styled.h2`
  padding-top: 32px;
  padding-bottom: 32px;
  font-size: 18px;
  font-weight: bold;
`