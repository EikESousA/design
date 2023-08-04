import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;

  display: flex;
  flex-direction: row;

  background: var(--color-primary-darker);
  background: linear-gradient(
    180deg,
    var(--color-primary-darker) 0%,
    var(--color-primary-base) 100%
  );

  overflow: hidden;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
