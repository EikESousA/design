import styled from 'styled-components';

export const Container = styled.div`
  border-radius: 50%;

  animation: spinner var(--animation-slower) ease infinite;

  &.xs {
    width: 1.2rem;
    height: 1.2rem;

    border: var(--border-width-thick) solid transparent;
  }

  &.sm {
    width: 1.8rem;
    height: 1.8rem;

    border: var(--border-width-thick) solid transparent;
  }

  &.md {
    width: 4rem;
    height: 4rem;

    border: var(--border-width-heavy) solid transparent;
  }

  &.lg {
    width: 6rem;
    height: 6rem;

    border: var(--border-width-heavy) solid transparent;
  }

  &.xl {
    width: 8rem;
    height: 8rem;

    border: var(--border-width-heavy) solid transparent;
  }

  &.primary {
    border-top-color: ${({ theme }) => theme.color.base};
    border-bottom-color: ${({ theme }) => theme.color.base};
  }

  &.secondary {
    border-top-color: var(--color-white);
    border-bottom-color: var(--color-white);
  }

  &.danger {
    border-top-color: var(--color-danger-base);
    border-bottom-color: var(--color-danger-base);
  }

  @keyframes spinner {
    to {
      transform: rotate(360deg);
    }
  }
`;
