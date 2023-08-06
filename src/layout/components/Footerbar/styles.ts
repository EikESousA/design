import styled from "styled-components";

export const Container = styled.nav`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: var(--color-primary-base);

  & button {
    flex: 1;

    padding: 0.75rem;
  }

  & button svg {
    height: 2rem;
    width: 2rem;

    fill: var(--color-white);
    color: var(--color-white);
  }

  & button img {
    height: 2rem;
    width: 2rem;

    border-radius: 50%;
  }

  & button.user {
    border-left: 1px solid white;
    border-right: 1px solid white;
  }

  @media screen and (min-width: 769px) {
    display: none;
  }
`;
