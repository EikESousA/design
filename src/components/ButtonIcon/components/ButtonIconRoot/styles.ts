import styled from "styled-components";

export const Container = styled.div`
  position: relative;

  z-index: 1;

  &.sm button {
    padding: var(--spacing-s2);
  }

  &.md button {
    padding: var(--spacing-s3);
  }

  &.lg button {
    padding: var(--spacing-s4);
  }

  &.full button {
    width: 100%;
  }

  &.primary button {
    background-color: var(--color-primary-base);

    border: var(--border-width-thin) solid transparent;

    & > svg {
      color: var(--color-white);
    }

    &:hover:not(&:disabled) {
      background-color: var(--color-primary-dark);
    }
  }

  &.secondary button {
    background-color: var(--aliases-200);

    border: var(--border-width-thin) solid var(--color-primary-base);
    outline: var(--border-width-thin) solid var(--color-primary-base);
    outline-offset: -1px;

    & > svg {
      color: var(--color-primary-base);
    }

    &:hover:not(&:disabled) {
      background-color: var(--color-gray-200);

      outline-offset: -4px;
    }
  }

  &.tertiary button {
    background-color: transparent;

    border: var(--border-width-thin) solid transparent;

    & > svg {
      color: var(--color-primary-base);
    }

    &:hover:not(&:disabled) {
      background-color: var(--color-gray-200);
    }
  }

  &.danger button {
    background-color: transparent;

    border: var(--border-width-thin) solid transparent;

    & > svg {
      color: var(--color-danger-base);
    }

    &:hover:not(&:disabled) {
      background-color: var(--color-gray-200);
    }
  }

  &.loading button {
    cursor: wait;
  }

  & button {
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

    z-index: 2;

    &:focus {
      outline: max(2px, 0.15rem) solid transparent;
      outline-offset: max(2px, 0.15rem);
    }

    & span.ripple {
      position: absolute;
      border-radius: 50%;
      transform: scale(0);
      animation: ripple 600ms linear;
      background-color: rgba(255, 255, 255, 0.7);
    }

    & > svg {
      height: var(--font-size-xl);
      width: var(--font-size-xl);
    }

    &:disabled {
      opacity: var(--opacity-medium);

      cursor: not-allowed;
    }
  }

  @keyframes appear {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  @keyframes ripple {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }
`;
