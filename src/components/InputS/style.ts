import styled from "styled-components";

export const Container = styled.div`
   width: 100%;
   display: flex;
   align-items: center;
   gap: 1rem;
   padding: 1.6rem;
   border-radius: 1rem;
   box-shadow: 4px 4px 12px 0px rgba(187, 195, 206, 0.60), -4px -4px 12px 0px rgba(253, 255, 255, 0.80);

   input{
      width: 100%;
      border: none;
      background: none;
      outline: none;
   }

   .input-with-icon input:focus {
      outline: none;
   }

   .password-visibility-button {
      border: none;
      background: none;
      padding-right: 1rem;
   }

   svg {
      width: 2rem;
      height: 2rem;
   }

   @media screen and (min-width: 1920px) and (max-width: 2560px) {

      svg {
         width: 3rem;
         height: 3rem;
      }

   }
`;