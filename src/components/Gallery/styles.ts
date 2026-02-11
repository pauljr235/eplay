import styled from "styled-components";



export const Items = styled.ul`
    display: flex;
    padding-bottom: 72px;
`
export const Action = styled.div`
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.73);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
`

export const Item = styled.li`
    margin-right: 16px;
    position: relative;

    > img{
        width: 150px;
        height: 150px;
        object-fit: cover;
        border: 2px solid #fff;
        border-radius: 8px;
    }

    &:hover{
        ${Action}{
            opacity: 1;
            transition: opacity 0.5s ease;
        }
    }
`

export const Modal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: none;
    align-items: center;
    justify-content: center;

    &.visivel {
        display: flex;
    }

    .overlay{
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.73);
    }
`

export const ModalItem = styled.div`
    max-width: 960px;
    position: relative;
    z-index: 1;

    header{
        display: flex;
        margin-bottom: 24px;
        justify-content: space-between;
    }

    h4{
        font-size: 18px;
        font-weight: bold;
    }

    img,
    iframe{
        max-width: 100%;
        display: block
    }

    iframe{
        width: 100%;
        height: 480px;
    }
`



