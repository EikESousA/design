import styled from 'styled-components';

export const Container = styled.nav`
  width: 100%;
  height: calc(100vh - 6rem);
  flex: 1 1 auto;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: var(--spacing-s2);

  background-color: var(--aliases-100);

  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 0.6rem;
    height: 0.6rem;
    margin-right: 10px;
  }
  ::-webkit-scrollbar-corner {
    border: none;
    background: none;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #4a4f6990;
    border-radius: 3px;
    cursor: move;
  }
  ::-webkit-scrollbar-track {
    background-color: #b8b8be40;
    border: none;
  }

  & button {
    width: 100%;

    padding: var(--spacing-s2);

    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: var(--spacing-s2);

    border-radius: var(--border-radius-sm);

    transition: background-color var(--animation-slow) ease-out,
      color var(--animation-faster) ease-out;

    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;

    & p {
      font-family: var(--font-family-default);
      font-weight: var(--font-weight-medium);
      font-size: var(--font-size-md);

      color: var(--color-gray-900);
    }

    & svg {
      height: var(--font-size-md);
      width: var(--font-size-md);

      transition: color var(--animation-faster) ease-out;
    }

    &:hover {
      background-color: var(--color-gray-500);
    }
  }

  & button.selected {
    background-color: ${({ theme }) => theme.color.base};

    & svg.success {
      color: var(--color-gray-900);
    }

    & svg.error {
      color: var(--color-gray-900);
    }

    &:hover {
      background-color: ${({ theme }) => theme.color.dark};
    }
  }

  & button.selected p {
    font-family: var(--font-family-default);
    font-weight: var(--font-weight-medium);
    font-size: var(--font-size-md);

    color: var(--color-white);
  }

  @media screen and (max-width: 768px) {
    z-index: 5;

    &.opened {
      display: flex;
    }

    &.closed {
      display: none;
    }
  }
`;
