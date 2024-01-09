import styled from "styled-components";

export const Container = styled.div`
        width: 100%;
        margin-top: 2rem;
        padding: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 2rem;

        background: var(--color-bg-Two);
        border-radius: 0.3rem;
        box-shadow: 4px 4px 12px 0px rgba(187, 195, 206, 0.60), -4px -4px 12px 0px rgba(253, 255, 255, 0.80);

    h2 {
        color: #2E2312;
    }

    .btnAdd {
        width: 47rem;
        height: 4rem;
        margin-top: 0;

        font-size: 1.6rem;
        font-weight: 400;
    }
`;