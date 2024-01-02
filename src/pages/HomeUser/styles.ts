import styled from "styled-components";

export const Container = styled.div`
width: 100%;
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;

position: relative;

.scale-out-tl {
    position: absolute;
    width: 100%;
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;
}

.animation {
    width: 20%;
}

.titleRepo {
    font-size: 3rem;

    margin: 3rem 0 2rem 0;
}

.mid {
    width: 100%;
    padding: 1rem 10rem;
}

.scale-out-tl {
	-webkit-animation: scale-out-tl 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
	        animation: scale-out-tl 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
}

@-webkit-keyframes scale-out-tl {
    0% {
      -webkit-transform: scale(1);
              transform: scale(1);
      -webkit-transform-origin: 0 0;
              transform-origin: 0 0;
      opacity: 1;
    }
    100% {
      -webkit-transform: scale(0);
              transform: scale(0);
      -webkit-transform-origin: 0 0;
              transform-origin: 0 0;
      opacity: 1;
    }
  }
  @keyframes scale-out-tl {
    0% {
      -webkit-transform: scale(1);
              transform: scale(1);
      -webkit-transform-origin: 0 0;
              transform-origin: 0 0;
      opacity: 1;
    }
    100% {
      -webkit-transform: scale(0);
              transform: scale(0);
      -webkit-transform-origin: 0 0;
              transform-origin: 0 0;
      opacity: 1;
    }
}
  
`;
