import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 8rem;
    display: flex;
    gap: 1rem;
    
    padding: 2rem 2rem;
    justify-content: center;
    justify-content: space-between;

    .logo {
        display: flex;
        align-items: center;
        gap: 2rem;
        margin-left: 4rem;
    }

    img {
    width: 50px;
    }

    .nameRepo {
        font-size: 2rem;
        font-weight: 600;
    }

    .logout {
        width: 100px;
        height: 4rem;
        font-size: 1.6rem;
        font-weight: 400;

        margin-top: 0;
        margin-right: 5rem;
    }
    
`;
