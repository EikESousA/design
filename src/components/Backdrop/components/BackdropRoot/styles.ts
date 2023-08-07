import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  height: 100vh;
  width: 100vw;

  background-color: #00000080;

  filter: blur(8px);

  animation: appear var(--animation-slower) ease-out;

  z-index: 1;

  @keyframes appear {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
`;
