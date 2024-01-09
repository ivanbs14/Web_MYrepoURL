import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 4rem;
  
  margin-top: 0.5rem;

  position: relative;
  display: flex;
  align-items: center;
  /* border: 1px solid var(--color-text-green100); */
  border-radius: 0.5rem;
  box-shadow: 4px 4px 12px 0px rgba(187, 195, 206, 0.60) inset, -4px -4px 12px 0px rgba(253, 255, 255, 0.80) inset;
  background-color: var(--color-bg-primary);

  .icon{
    position: absolute;
    left: 1rem;
  }

  .icon svg{
    width: 2rem;
    height: 2rem;
    color: #574C3A;
  }

  input{
    width: 100%;
    height: 4rem;
    color: #574C3A;
    position: absolute;
    font-size: 1.4rem;
    padding-left: 4rem;
    background: none;
    border: none;
    outline: none;
  }

  .input-text::placeholder {
    color: #725F40;
    opacity: 0.6;
  }

  .input-text:focus {
    outline: none;
    border: 1.5px solid #635642;
    border-radius: 0.5rem;
  }
`;
