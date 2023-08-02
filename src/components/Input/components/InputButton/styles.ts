import styled from "styled-components";

export const Container = styled.button`
  position: relative;
  overflow: hidden;

  min-height: var(--spacing-s8);

  display: flex;
  justify-content: center;
  align-items: center;
  gap: var(--spacing-s2);

  padding: var(--spacing-s2);

  background-color: var(--color-primary-base);

  border: var(--border-width-thin) solid transparent;

  border-top-right-radius: var(--border-radius-xs);
  border-bottom-right-radius: var(--border-radius-xs);

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

  & p {
    font-family: var(--font-family-default);
    font-weight: var(--font-weight-bold);
    font-size: var(--font-size-sm);

    color: var(--color-white);

    text-transform: uppercase;

    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  & svg {
    height: var(--font-size-lg);
    width: var(--font-size-lg);

    color: var(--color-white);
  }

  &:disabled {
    background-color: var(--color-gray-600);

    cursor: not-allowed;
  }

  &.loading {
    cursor: wait;
  }

  &:hover:not(&:disabled) {
    background-color: var(--color-primary-dark);
  }

  & span.ripple {
    position: absolute;
    border-radius: 50%;
    transform: scale(0);
    animation: ripple 600ms linear;
    background-color: rgba(255, 255, 255, 0.7);
  }

  @keyframes ripple {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }
`;
