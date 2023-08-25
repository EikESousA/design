import styled from "styled-components";

export const Container = styled.button`
  position: relative;
  overflow: hidden;

  min-height: var(--spacing-s8);

  display: flex;
  justify-content: center;
  align-items: center;
  gap: var(--spacing-s2);

  border-radius: var(--border-radius-xs);

  box-shadow: var(--box-shadow-base);

  opacity: var(--opacity-default);

  transition:
    background-color var(--animation-slow) ease-out,
    outline-offset var(--animation-faster) ease-out,
    outline-color var(--animation-faster) ease-out,
    opacity var(--animation-slow) ease-out;

  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;

  &:focus {
    outline: max(2px, 0.15rem) solid transparent;
    outline-offset: max(2px, 0.15rem);
  }

  &.sm {
    padding: var(--spacing-s2);
  }

  &.md {
    padding: var(--spacing-s3);
  }

  &.lg {
    padding: var(--spacing-s4);
  }

  &.full {
    width: 100%;
  }

  & span.ripple {
    position: absolute;
    border-radius: 50%;
    transform: scale(0);
    animation: ripple 600ms linear;
    background-color: rgba(255, 255, 255, 0.7);
  }

  &.primary {
    background-color: var(--color-primary-base);

    border: var(--border-width-thin) solid transparent;

    & p {
      color: var(--color-white-fixed);
    }

    & svg {
      color: var(--color-white-fixed);
    }

    &:focus {
      outline-color: var(--color-primary-base);
    }

    &:hover:not(&:disabled) {
      background-color: var(--color-primary-dark);
    }
  }

  &.secondary {
    background-color: var(--color-gray-100);

    border: var(--border-width-thin) solid var(--color-primary-base);
    outline: var(--border-width-thin) solid var(--color-primary-base);
    outline-offset: -1px;

    & p {
      color: var(--color-primary-base);
    }

    & p {
      color: var(--color-primary-base);
    }

    &:focus {
      background-color: var(--color-gray-200);

      outline-offset: -4px;
    }

    &:hover:not(&:disabled) {
      background-color: var(--color-gray-200);

      outline-offset: -4px;
    }
  }

  &.tertiary {
    background-color: transparent;

    border: var(--border-width-thin) solid transparent;

    & p {
      color: var(--color-primary-base);
    }

    & svg {
      color: var(--color-primary-base);
    }

    &:focus {
      outline-color: var(--color-gray-200);
    }

    &:hover:not(&:disabled) {
      background-color: var(--color-gray-200);
    }
  }

  &.danger {
    background-color: transparent;

    border: var(--border-width-thin) solid transparent;

    & p {
      color: var(--color-danger-base);
    }

    & svg {
      color: var(--color-danger-base);
    }

    &:focus {
      outline-color: var(--color-gray-200);
    }

    &:hover:not(&:disabled) {
      background-color: var(--color-gray-200);
    }
  }

  & p {
    font-family: var(--font-family-default);
    font-weight: var(--font-weight-bold);
    font-size: var(--font-size-md);

    text-transform: uppercase;
  }

  & svg {
    height: var(--font-size-xl);
    width: var(--font-size-xl);
  }

  &:disabled {
    opacity: var(--opacity-medium);

    cursor: not-allowed;
  }

  &.loading {
    cursor: wait;
  }

  @keyframes ripple {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }
`;
