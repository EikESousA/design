import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;

  display: flex;
  flex-direction: row;

  background-color: var(--color-primary-base);

  overflow: hidden;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
