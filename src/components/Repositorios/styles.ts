import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    padding: 2rem;
    margin-bottom: 1rem;
    color: #2E2312;

    display: flex;
    justify-content: space-between;
    align-items: center;

    background: var(--color-bg-Two);
    border-radius: 0.3rem;
    box-shadow: 4px 4px 12px 0px rgba(187, 195, 206, 0.60), -4px -4px 12px 0px rgba(253, 255, 255, 0.80);

    .itensRepo {
        display: flex;
        gap: 2rem;
    }

    .btnRepo {
        width: 15rem;
        height: 4rem;
        margin-top: 0;
        background: var(--color-bg-secundary);
        border-radius: 1rem;
        color: var(--color-text-light);

        font-size: 1.6rem;
        font-weight: 400;
        transition: transform 0.3s ease;
    }

    .btnRepo:hover{
        transform: scale(1.05);
        color: #FFF;
    }
`;