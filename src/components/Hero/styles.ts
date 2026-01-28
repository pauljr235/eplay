import styled from 'styled-components'
import { TagContainer } from '../Tags/styles'

export const Banner = styled.div`
  position: relative;
  display: block;
  height: 480px;
  width: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;

  &::after{
    position: absolutes;
    background-color: #000;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    content: '';
    opacity: 0.56;
  }

  ${TagContainer}{
    padding: 4px 6px;
    font-size: 10px;
    margin-right: 8px;
    margin-top: 21px;
  }
`

export const BannerInfo = styled.div`
  padding: 16px;
  background-color: #000;
  max-width: 285px;
  position: absolute;
  bottom: 0;
`
export const Title = styled.h1`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 16px;
`
export const Price = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 16px;

  span{
    text-decoration: line-through;
  }
`
