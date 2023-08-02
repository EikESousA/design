import styled from "styled-components";

export const Container = styled.label`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: var(--spacing-s4);

  cursor: pointer;

  transition: opacity var(--animation-fast) ease-out;

  & div {
    position: relative;

    height: var(--spacing-s6);
    width: var(--spacing-s16);

    display: inline-block;

    background-color: var(--color-gray-600);
    border-radius: var(--border-radius-md);

    vertical-align: middle;

    transition: background-color var(--animation-fast) ease-out;
  }

  & div:before,
  &.div:after {
    content: "";
  }

  & div:before {
    height: var(--spacing-s4);
    width: var(--spacing-s8);

    position: absolute;
    top: var(--spacing-s1);

    display: block;

    background-color: var(--color-switch);
    border-radius: var(--border-radius-md);

    box-shadow: var(--box-shadow-base);

    transition:
      left var(--animation-fast) ease-out,
      background-color var(--animation-fast) ease-out;
  }

  & input {
    display: none;
  }

  &:hover div:before {
    background-color: var(--color-switch-hover);

    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.5);
  }

  & input:checked + div {
    background-color: var(--color-primary-base);
  }

  & input:not(:checked) + div:before {
    left: var(--spacing-s1);
  }

  & input:checked + div:before {
    left: var(--spacing-s7);
  }

  &:focus {
    outline: max(2px, 0.15rem) solid var(--color-primary-base);
    outline-offset: max(2px, 0.15rem);
  }

  & p {
    font-family: var(--font-family-default);
    font-weight: var(--font-weight-medium);
    font-size: var(--font-size-md);

    color: var(--color-gray-900);

    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  &.disabled {
    opacity: var(--opacity-medium);

    cursor: not-allowed;
  }
`;
