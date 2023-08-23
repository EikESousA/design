import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  & main {
    padding: 1rem 5rem;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;

    flex-wrap: wrap;
  }

  & main button {
    height: 10rem;
    width: 15rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;

    background-color: var(--aliases-300);

    box-shadow: 0px 1px 14px 0px #00000014;

    border: 1px solid transparent;

    border-radius: var(--border-radius-lg);

    transition: border-color var(--animation-fast) ease-out;
  }

  & main button svg {
    height: 3rem;
    width: 3rem;

    color: var(--color-primary-base);

    transition: color var(--animation-fast) ease-out;
  }

  & main button p {
    font-weight: bold;
    font-size: 1rem;
    font-family: Roboto, sans-serif;

    color: var(--color-gray-900);

    transition: color var(--animation-fast) ease-out;
  }

  & main button:hover {
    border-color: var(--color-primary-dark);

    & svg {
      color: var(--color-primary-dark);
    }

    & p {
      color: var(--color-primary-dark);
    }
  }
`;
