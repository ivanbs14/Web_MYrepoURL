import styled from "styled-components";

interface ContainerProps {
  disabled?: boolean;
}

export const Container = styled.div<ContainerProps>`
  position: absolute;
  top: 0;
  width: 100%;
  padding: 1rem 3rem;
  background-color: var(--color-bg-secundary);
  text-align: center;
  color: var(--color-text-light);
  cursor: pointer;

  &:hover{
    box-shadow: 4px 4px 12px 0px rgba(40, 125, 63, 0.6), -4px -4px 12px 0px rgba(253, 255, 255, 0.80);
  }

  ${({ disabled }) => disabled && `
    display: none;
  `}
`;
