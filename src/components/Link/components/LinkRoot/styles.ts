import styled from 'styled-components';

export const Container = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: var(--spacing-s2);

  opacity: var(--opacity-default);

  transition: opacity var(--animation-slow) ease-out;

  &.sm p {
    font-size: var(--font-size-sm);
  }

  &.md p {
    font-size: var(--font-size-md);
  }

  &.lg p {
    font-size: var(--font-size-lg);
  }

  &.xl p {
    font-size: var(--font-size-xl);
  }

  &.full {
    width: 100%;
  }

  & p {
    font-family: var(--font-family-default);
    font-weight: var(--font-weight-lighter);

    color: ${({ theme }) => theme.color.base};

    text-decoration: underline;
  }

  &:hover p {
    color: ${({ theme }) => theme.color.dark};
  }

  &:disabled {
    opacity: var(--opacity-medium);

    cursor: not-allowed;
  }

  &:focus {
    outline: max(2px, 0.15rem) solid ${({ theme }) => theme.color.base};
    outline-offset: max(2px, 0.15rem);
  }
`;
