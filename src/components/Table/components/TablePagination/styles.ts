import styled from "styled-components";

export const Container = styled.footer`
  width: 100%;

  margin-top: var(--spacing-s4);

  display: flex;
  justify-content: center;
  align-items: center;
  gap: var(--spacing-s8);

  & ul {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: var(--spacing-s4);
  }

  & li {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & svg {
    height: var(--spacing-s6);
    width: var(--spacing-s6);

    color: var(--color-gray-900);
  }

  & button {
    padding: var(--spacing-s1) var(--spacing-s2);

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: var(--border-radius-sm);

    border: var(--border-width-thin) solid var(--color-gray-500);

    transition:
      background-color var(--animation-fast) ease-out,
      border-color var(--animation-fast) ease-out;
  }

  & button svg {
    height: var(--spacing-s6);
    width: var(--spacing-s6);

    color: var(--color-gray-900);
  }

  & button p {
    font-size: var(--font-size-md);
    font-weight: bold;

    color: var(--color-gray-900);

    transition: color var(--animation-fast) ease-out;
  }

  & button.active {
    background-color: var(--color-primary-base);
    border-color: var(--color-primary-base);
  }

  & button.active p {
    color: var(--color-white-fixed);
  }

  & button:disabled {
    opacity: var(--opacity-light);

    cursor: not-allowed;
  }
`;
