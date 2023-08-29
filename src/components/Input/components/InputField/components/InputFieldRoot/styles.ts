import styled from "styled-components";

export const Container = styled.label`
  position: relative;

  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: var(--spacing-s2);

  background-color: var(--color-gray-300);

  &:has(input:disabled) {
    opacity: var(--opacity-medium);

    cursor: not-allowed;
  }

  &.required p:after {
    content: "*";
    color: var(--color-red-fixed);
    margin-left: var(--spacing-s1);
  }

  &.primary {
    padding-left: var(--spacing-s2);
    padding-right: var(--spacing-s2);

    border: var(--border-width-thin) solid var(--color-gray-600);
    border-radius: var(--border-radius-xs);

    transition: opacity var(--animation-fast) ease-out;

    &.focused,
    &.filled {
      border-color: var(--color-primary-base);

      & p {
        top: calc(var(--spacing-s3) * -1);
        left: var(--spacing-s2);

        font-size: var(--font-size-xs);

        color: var(--color-primary-base);
      }

      & input {
        border-color: var(--color-primary-base);
      }

      & div.icon svg {
        color: var(--color-primary-base);
      }
    }

    &:has(div.left-icon) {
      & p {
        left: var(--spacing-s8);
      }
    }

    &:has(button) {
      padding-right: 0;
    }
  }

  &.secondary {
    padding-right: var(--spacing-s2);

    display: flex;
    justify-content: center;
    align-items: center;

    border: var(--border-width-thick) solid transparent;
    border-top-right-radius: var(--border-radius-xs);
    border-bottom-right-radius: var(--border-radius-xs);

    border-radius: var(--border-radius-sm);

    box-shadow: var(--box-shadow-base);

    transition: opacity var(--animation-fast) ease-out;

    &.focused,
    &.filled {
      border-color: var(--color-primary-base);

      & p {
        background-color: var(--color-primary-base);
      }

      & div.icon svg {
        color: var(--color-primary-base);
      }
    }

    &:has(div.left-icon) {
      & p {
        left: var(--spacing-s8);
      }
    }

    &:has(button) {
      padding-right: 0;
    }
  }

  &.tertiary {
    position: relative;

    padding-left: var(--spacing-s2);
    padding-right: var(--spacing-s2);

    border-radius: var(--border-radius-sm);
    border-top: var(--border-width-thin) solid transparent;
    border-bottom: var(--border-width-thick) solid transparent;

    transition:
      border-color var(--animation-fast) ease-out,
      opacity var(--animation-fast) ease-out;

    &.focused,
    &.filled {
      border-color: var(--color-primary-base);

      & p {
        top: 2px;
        left: var(--spacing-s2);

        font-size: var(--font-size-xxs);

        color: var(--color-primary-base);
      }

      & input {
        border-color: var(--color-primary-base);
      }

      & div.icon {
        margin-top: 8px;

        & svg {
          color: var(--color-primary-base);
        }
      }
    }

    &:has(div.left-icon) {
      & p {
        left: var(--spacing-s10);
      }
    }

    &:has(button) {
      padding-right: 0;
    }
  }
`;
