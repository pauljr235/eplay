import { createGlobalStyle } from 'styled-components'

export const cores = {
  branca: '#eee',
  preta: '#111',
  cinza: '#333',
  verde: '#10ac84',
  cinzaClaro: '#A3A3A3'
}

export const GlobalCss = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
    text-decoration: none;
}
  .container{
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
    }

  body{
    background-color: ${cores.preta};
    color: ${cores.branca};
    padding-top: 40px;
  }

`
