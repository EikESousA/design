import styled from "styled-components";

export const Container = styled.nav`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: var(--aliases-200);

  & button {
    flex: 1;
    height: 5rem;

    display: flex;
    justify-content: center;
    align-items: center;

    padding: 1rem 0.75rem;

    background-color: var(--color-primary-base);
  }

  & button.first {
    border-top-left-radius: var(--border-radius-lg);
  }

  & button.last {
    border-top-right-radius: var(--border-radius-lg);
  }

  & button.middle {
    position: relative;

    & div {
      position: absolute;
      top: -1rem;

      height: 4.5rem;
      width: 4.5rem;

      display: flex;
      justify-content: center;
      align-items: center;

      background-color: var(--aliases-200);

      border: 6px solid var(--color-primary-base);
      border-radius: 50%;
    }

    & div svg {
      height: 2.5rem;
      width: 2.5rem;
    }

    & div p {
      position: absolute;
      top: 3.75rem;

      color: white;
    }
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
