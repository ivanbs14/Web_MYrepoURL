import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
    height: 3rem;
    border-radius: 0.5rem;
    background: var(--color-bg-secundary);
    box-shadow: 4px 4px 12px 0px rgba(40, 125, 63, 0.6), -4px -4px 12px 0px rgba(253, 255, 255, 0.80);
    
    color: #FFF;
    font-size: 1.6rem;
    font-weight: 600;

    border: 0;
    padding: 0 1.6rem;

    cursor: pointer;
    transition: transform 0.3s ease;

    &:hover{
        transform: scale(1.05);
        color: #FFF;
    }

    @media screen and (min-width: 1920px) and (max-width: 2560px) {
        height: 5rem;
        font-size: 2rem;
    }
`;