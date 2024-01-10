
import styled from "styled-components";

export const Container = styled.button`
  position: relative;
  width: 100%;
  height: 3rem;
  
  margin-top: 0.5rem;

  display: flex;
  align-items: center;
  border: 1px solid #574C3A;
  border-radius: 0.5rem;
  background: #EFEAE2;

  .icon{
    position: absolute;
    left: 1rem;
  }

  .icon svg{
    width: 1.5rem;
    height: 1.5rem;
    color: #574C3A;
  }

  .input-text{
    height: 3rem;
    color: #574C3A;
    position: absolute;
    font-size: 1.4rem;
    padding-left: 4rem;
    background: none;
    border: 0;
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