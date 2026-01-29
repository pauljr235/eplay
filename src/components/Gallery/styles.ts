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



