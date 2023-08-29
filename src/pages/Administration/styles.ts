import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: var(--spacing-s8);

  flex-wrap: wrap;

  & button {
    height: 10rem;
    width: 12rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: var(--spacing-s4);

    background-color: var(--aliases-300);

    box-shadow: 0px 1px 14px 0px #00000014;

    border: 1px solid transparent;

    border-radius: var(--border-radius-lg);

    transition: border-color var(--animation-fast) ease-out;
  }

  & button svg {
    height: 3rem;
    width: 3rem;

    color: var(--color-primary-base);

    transition: color var(--animation-fast) ease-out;
  }

  & button p {
    font-weight: bold;
    font-size: var(--font-size-sm);
    font-family: Roboto, sans-serif;

    color: var(--color-gray-900);

    transition: color var(--animation-fast) ease-out;
  }

  & button:hover {
    border-color: var(--color-primary-dark);

    & svg {
      color: var(--color-primary-dark);
    }

    & p {
      color: var(--color-primary-dark);
    }
  }
`;
