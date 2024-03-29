import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 5rem 0;

  /* flip logo */
  .flip-in-hor-top {
    -webkit-animation: flip-in-hor-top 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
            animation: flip-in-hor-top 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  }

  @-webkit-keyframes flip-in-hor-top {
    0% {
      -webkit-transform: rotateX(-80deg);
              transform: rotateX(-80deg);
      opacity: 0;
    }
    100% {
      -webkit-transform: rotateX(0);
              transform: rotateX(0);
      opacity: 1;
    }
  }
  @keyframes flip-in-hor-top {
    0% {
      -webkit-transform: rotateX(-80deg);
              transform: rotateX(-80deg);
      opacity: 0;
    }
    100% {
      -webkit-transform: rotateX(0);
              transform: rotateX(0);
      opacity: 1;
    }
  }

  /* flip cards de login,logout */
    
  .slide-in-bottom {
      -webkit-animation: slide-in-bottom 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
          animation: slide-in-bottom 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  }
    
  @-webkit-keyframes slide-in-bottom {
      0% {
        -webkit-transform: translateY(1000px);
                transform: translateY(1000px);
        opacity: 0;
      }
      100% {
        -webkit-transform: translateY(0);
                transform: translateY(0);
        opacity: 1;
      }
    }
    @keyframes slide-in-bottom {
      0% {
        -webkit-transform: translateY(1000px);
                transform: translateY(1000px);
        opacity: 0;
      }
      100% {
        -webkit-transform: translateY(0);
                transform: translateY(0);
        opacity: 1;
      }
  }
    
`;