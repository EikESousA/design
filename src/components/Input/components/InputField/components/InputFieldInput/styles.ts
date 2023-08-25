import styled from "styled-components";

export const Container = styled.input`
  &:disabled {
    cursor: not-allowed;
  }

  &.primary {
    flex: 1;

    padding: var(--spacing-s3) 0;

    font-family: var(--font-family-default);
    font-weight: var(--font-weight-regular);
    font-size: var(--font-size-sm);

    color: var(--color-gray-900);

    transition: opacity var(--animation-fast) ease-out;
  }

  &.secondary {
    flex: 1;

    font-family: var(--font-family-default);
    font-weight: var(--font-weight-regular);
    font-size: var(--font-size-sm);

    color: var(--color-gray-900);

    transition: opacity var(--animation-fast) ease-out;

    &:-moz-placeholder,
    &::-moz-placeholder,
    &:-ms-input-placeholder,
    &::placeholder {
      color: var(--color-gray-600);

      font-family: var(--font-family-default);
      font-weight: var(--font-weight-regular);
      font-size: var(--font-size-sm);
    }
  }

  &.tertiary {
    flex: 1;

    padding: var(--spacing-s4) 0 var(--spacing-s2) 0;

    font-family: var(--font-family-default);
    font-weight: var(--font-weight-regular);
    font-size: var(--font-size-sm);

    color: var(--color-gray-800);

    transition: opacity var(--animation-fast) ease-out;

    &:-moz-placeholder,
    &::-moz-placeholder,
    &:-ms-input-placeholder,
    &::placeholder {
      color: transparent;
    }
  }
`;
