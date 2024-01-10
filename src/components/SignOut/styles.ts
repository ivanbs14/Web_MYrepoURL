import styled from "styled-components";

export const Container = styled.div`
   width: 40rem;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   gap: 1rem;
   background-color: var(--color-bg-Two);
   padding: 2rem 3rem 4rem;
   border-radius: 1rem;
   box-shadow: 16px 16px 40px 0px rgba(187, 195, 206, 0.60), -16px -16px 40px 0px rgba(253, 255, 255, 0.80);

   .inputs {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 2rem;
      margin-bottom: 3rem;
   }

   .spText {
      margin-top: 2rem;
   }

   .header {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: .5rem;
      margin-bottom: 2rem;
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
`;