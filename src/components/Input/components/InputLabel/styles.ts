import styled from 'styled-components';

export const Container = styled.label`
  width: 100%;

  display: flex;

  position: relative;

  transition: opacity var(--animation-fast) ease-out;

  & div.input {
    flex: 1;

    display: flex;

    position: relative;
  }

  &.primary {
    border: var(--border-width-thin) solid var(--color-gray-600);
    border-radius: var(--border-radius-xs);

    & p.label {
      position: absolute;
      top: var(--spacing-s2);
      left: var(--spacing-s1);

      padding: var(--spacing-s1) var(--spacing-s2);

      border-radius: var(--border-radius-xs);

      background-color: var(--color-gray-300);

      font-family: var(--font-family-default);
      font-weight: var(--font-weight-regular);
      font-size: var(--font-size-sm);

      color: var(--color-gray-800);

      transition: top var(--animation-fast) ease-out,
        left var(--animation-fast) ease-out,
        font-size var(--animation-fast) ease-out,
        color var(--animation-fast) ease-out;

      z-index: 1;

      -webkit-user-select: none;
      -ms-user-select: none;
      user-select: none;
    }

    & p.label strong {
      color: var(--color-danger-base);
      margin-left: var(--spacing-s1);
    }

    & input {
      flex: 1;

      padding: var(--spacing-s4) var(--spacing-s3) var(--spacing-s2)
        var(--spacing-s3);

      background-color: var(--color-gray-300);

      border: var(--border-width-thin) solid var(--color-gray-600);
      border-radius: var(--border-radius-xs);

      font-family: var(--font-family-default);
      font-weight: var(--font-weight-regular);
      font-size: var(--font-size-sm);

      color: var(--color-gray-900);

      transition: opacity var(--animation-fast) ease-out;

      &::-webkit-input-placeholder {
        color: transparent;

        &:after {
          content: '*';
          color: var(--color-warning-base);
        }
      }

      &:-moz-placeholder {
        color: transparent;
      }

      &::-moz-placeholder {
        color: transparent;
      }

      &:-ms-input-placeholder {
        color: transparent;
      }

      &::placeholder {
        color: transparent;
      }

      &.hasButton {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
      }
    }

    & svg.icon {
      position: absolute;

      height: var(--font-size-xl2);
      width: var(--font-size-xl2);

      color: var(--color-gray-600);

      z-index: 1;

      &.icon-left {
        top: var(--spacing-s2);
        left: var(--spacing-s2);
      }

      &.icon-right {
        top: var(--spacing-s2);
        right: var(--spacing-s2);
      }
    }

    &.left-icon {
      & p.label {
        left: var(--spacing-s8);
      }

      & input {
        padding-left: var(--spacing-s10);
      }
    }

    &.right-icon {
      & input {
        padding-right: var(--spacing-s10);
      }
    }

    &.focused,
    &.filled {
      border-color: ${({ theme }) => theme.color.base};

      & p.label {
        top: calc(var(--spacing-s3) * -1);
        left: var(--spacing-s2);

        font-size: var(--font-size-xs);

        color: ${({ theme }) => theme.color.base};
      }

      & input {
        border-color: ${({ theme }) => theme.color.base};
      }

      & svg.icon {
        color: ${({ theme }) => theme.color.base};
      }
    }
  }

  &.secondary {
    display: flex;
    justify-content: center;
    align-items: stretch;

    border: var(--border-width-thick) solid transparent;

    border-radius: var(--border-radius-sm);

    box-shadow: var(--box-shadow-base);

    & p.label {
      padding: var(--spacing-s2);

      display: flex;
      justify-content: center;
      align-items: center;

      background-color: var(--aliases-600);

      border-top-left-radius: var(--border-radius-xs);
      border-bottom-left-radius: var(--border-radius-xs);

      font-family: var(--font-family-default);
      font-weight: var(--font-weight-regular);
      font-size: var(--font-size-sm);

      color: var(--color-white);

      transition: background-color var(--animation-fast) ease-out;

      -webkit-user-select: none;
      -ms-user-select: none;
      user-select: none;
    }

    & p.label strong {
      color: var(--color-danger-base);
      margin-left: var(--spacing-s1);
    }

    & input {
      flex: 1;

      padding: var(--spacing-s3);

      background-color: var(--color-gray-300);

      border-top-right-radius: var(--border-radius-xs);
      border-bottom-right-radius: var(--border-radius-xs);

      font-family: var(--font-family-default);
      font-weight: var(--font-weight-regular);
      font-size: var(--font-size-sm);

      color: var(--color-gray-900);

      transition: opacity var(--animation-fast) ease-out;

      &::-webkit-input-placeholder {
        color: var(--color-gray-600);

        font-family: var(--font-family-default);
        font-weight: var(--font-weight-regular);
        font-size: var(--font-size-sm);
      }

      &:-moz-placeholder {
        color: var(--color-gray-600);

        font-family: var(--font-family-default);
        font-weight: var(--font-weight-regular);
        font-size: var(--font-size-sm);
      }

      &::-moz-placeholder {
        color: var(--color-gray-600);

        font-family: var(--font-family-default);
        font-weight: var(--font-weight-regular);
        font-size: var(--font-size-sm);
      }

      &:-ms-input-placeholder {
        color: var(--color-gray-600);

        font-family: var(--font-family-default);
        font-weight: var(--font-weight-regular);
        font-size: var(--font-size-sm);
      }

      &::placeholder {
        color: var(--color-gray-600);

        font-family: var(--font-family-default);
        font-weight: var(--font-weight-regular);
        font-size: var(--font-size-sm);
      }
    }

    & svg.icon {
      position: absolute;

      height: var(--font-size-xl2);
      width: var(--font-size-xl2);

      color: var(--color-gray-600);

      z-index: 1;

      &.icon-left {
        top: var(--spacing-s2);
        left: var(--spacing-s2);
      }

      &.icon-right {
        top: var(--spacing-s2);
        right: var(--spacing-s2);
      }
    }

    &.left-icon {
      & p.label {
        left: var(--spacing-s8);
      }

      & input {
        padding-left: var(--spacing-s10);
      }
    }

    &.right-icon {
      & input {
        padding-right: var(--spacing-s10);
      }
    }

    &.hasButton input {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }

    &.focused,
    &.filled {
      border-color: ${({ theme }) => theme.color.base};

      & p.label {
        background-color: ${({ theme }) => theme.color.base};
      }

      & svg.icon {
        color: ${({ theme }) => theme.color.base};
      }
    }
  }

  &.tertiary {
    position: relative;

    border-radius: var(--border-radius-sm);

    border-top: var(--border-width-thin) solid transparent;
    border-bottom: var(--border-width-thick) solid transparent;

    transition: border-color var(--animation-fast) ease-out;

    & p.label {
      position: absolute;
      top: var(--spacing-s3);
      left: var(--spacing-s2);

      font-family: var(--font-family-default);
      font-weight: var(--font-weight-regular);
      font-size: var(--font-size-sm);

      color: var(--color-gray-800);

      transition: top var(--animation-fast) ease-out,
        left var(--animation-fast) ease-out,
        font-size var(--a nimation-fast) ease-out,
        color var(--animation-fast) ease-out;

      z-index: 2;

      -webkit-user-select: none;
      -ms-user-select: none;
      user-select: none;
    }

    & p.label strong {
      color: var(--color-danger-base);
      margin-left: var(--spacing-s1);
    }

    & input {
      flex: 1;

      padding: var(--spacing-s4) var(--spacing-s3) var(--spacing-s2)
        var(--spacing-s3);

      background-color: var(--color-gray-300);

      border-bottom: var(--border-width-thin) solid var(--color-gray-600);
      border-radius: var(--border-radius-xs);

      font-family: var(--font-family-default);
      font-weight: var(--font-weight-regular);
      font-size: var(--font-size-sm);

      color: var(--color-gray-800);

      transition: opacity var(--animation-fast) ease-out;

      &::-webkit-input-placeholder {
        color: transparent;
      }

      &:-moz-placeholder {
        color: transparent;
      }

      &::-moz-placeholder {
        color: transparent;
      }

      &:-ms-input-placeholder {
        color: transparent;
      }

      &::placeholder {
        color: transparent;
      }
    }

    & svg.icon {
      position: absolute;

      height: var(--font-size-xl2);
      width: var(--font-size-xl2);

      color: var(--color-gray-800);

      transition: top var(--animation-fast) ease-out;

      z-index: 1;

      &.icon-left {
        top: var(--spacing-s2);
        left: var(--spacing-s2);
      }

      &.icon-right {
        top: var(--spacing-s2);
        right: var(--spacing-s2);
      }
    }

    &.left-icon {
      & p.label {
        left: var(--spacing-s10);
      }

      & input {
        padding-left: var(--spacing-s10);
      }
    }

    &.right-icon {
      & input {
        padding-right: var(--spacing-s10);
      }
    }

    &.hasButton input {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }

    &.focused,
    &.filled {
      border-color: ${({ theme }) => theme.color.base};

      & p.label {
        top: 0;
        left: var(--spacing-s1);

        font-size: var(--font-size-xxs);

        color: ${({ theme }) => theme.color.base};
      }

      & svg.icon {
        top: calc(var(--spacing-s3) + 2px);

        color: ${({ theme }) => theme.color.base};
      }

      & input {
        border-color: ${({ theme }) => theme.color.base};
      }
    }
  }

  &.disabled {
    opacity: var(--opacity-medium);

    cursor: not-allowed;
  }

  &.disabled input {
    cursor: not-allowed;
  }

  & button {
    position: relative;
    overflow: hidden;

    min-height: var(--spacing-s8);

    display: flex;
    justify-content: center;
    align-items: center;
    gap: var(--spacing-s2);

    padding: var(--spacing-s2);

    background-color: ${({ theme }) => theme.color.base};

    border: var(--border-width-thin) solid transparent;

    border-top-right-radius: var(--border-radius-xs);
    border-bottom-right-radius: var(--border-radius-xs);

    box-shadow: var(--box-shadow-base);

    opacity: var(--opacity-default);

    transition: background-color var(--animation-slow) ease-out,
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
      background-color: ${({ theme }) => theme.color.dark};
    }

    & span.ripple {
      position: absolute;
      border-radius: 50%;
      transform: scale(0);
      animation: ripple 600ms linear;
      background-color: rgba(255, 255, 255, 0.7);
    }
  }

  @keyframes ripple {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }
`;
