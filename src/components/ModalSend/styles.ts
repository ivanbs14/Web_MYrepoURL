import styled from "styled-components";

export const Container = styled.div`
   width: 40rem;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   gap: 2rem;
   background-color: var(--color-bg-Two);
   padding: 2rem 3rem 4rem;
   border-radius: 1rem;
   box-shadow: 16px 16px 40px 0px rgba(187, 195, 206, 0.60), -16px -16px 40px 0px rgba(253, 255, 255, 0.80);
   
   .spText {
      margin-top: 2rem;
   }

   .header {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: .5rem;
   }

   .logo {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;
   }

   img {
   width: 12%;
   }

   .nameRepo {
      font-size: 2rem;
      color: var(--color-text-green100);
   }

   .page {
      height: 100vh;
      display: flex;
      align-items: center;
   }

   @media screen and (min-width: 2561px) and (max-width: 3840px) {
      
   }

   @media screen and (min-width: 1920px) and (max-width: 2560px) {
      width: 60rem;
      height: 70rem;

      .inputs {
         gap: 3rem;
         margin-bottom: 5rem;
      }

      .spText {
         margin-top: 3rem;
      }

      .header {
         gap: 1rem;
         margin-bottom: 4rem;
      }

      .logo {
         gap: 2rem;
      }

      img {
         width: 15%;
      }

      .nameRepo {
         font-size: 2.8rem;
      }
   }

   @media screen and (min-width: 1440px) and (max-width: 1919px) {
      
   }

   @media screen and (min-width: 1024px) and (max-width: 1439px) {
      
   }
`;
