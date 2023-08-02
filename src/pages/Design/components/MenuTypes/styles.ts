import styled from 'styled-components';

export const Container = styled.nav`
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: var(--spacing-s2);

  background-color: var(--aliases-100);

  & button {
    flex: 1;

    padding: var(--spacing-s2);

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: transparent;

    border-radius: var(--border-radius-sm);

    transition: background-color var(--animation-slow) ease-out,
      color var(--animation-faster) ease-out;

    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  & button svg {
    height: var(--font-size-xl);
    width: var(--font-size-xl);

    color: var(--color-gray-900);

    transition: color var(--animation-faster) ease-out;
  }

  & button.selected svg {
    color: ${({ theme }) => theme.color.base};
  }

  & button:hover {
    background-color: var(--color-gray-500);
  }

  & button.menu {
    display: none;
  }

  @media screen and (max-width: 767px) {
    position: fixed;
    bottom: 0;
    left: 0;

    z-index: 6;

    border-top: 1px solid var(--color-gray-100);

    & button {
      padding: var(--spacing-s4);
    }

    & button svg {
      height: var(--font-size-xl4);
      width: var(--font-size-xl4);
    }

    &.components button.menu {
      display: flex;
    }

    & button.components.selected {
      display: none;
    }
  }
`;
