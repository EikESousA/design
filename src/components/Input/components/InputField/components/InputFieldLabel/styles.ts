import styled from "styled-components";

export const Container = styled.p`
  font-family: var(--font-family-default);
  font-weight: var(--font-weight-regular);
  font-size: var(--font-size-sm);

  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;

  & strong {
    color: var(--color-danger-base);
    margin-left: var(--spacing-s1);
  }

  &.primary {
    position: absolute;
    top: var(--spacing-s2);
    left: var(--spacing-s1);

    padding: var(--spacing-s1) var(--spacing-s2);

    border-radius: var(--border-radius-xs);

    background-color: var(--color-gray-300);

    color: var(--color-gray-800);

    transition:
      top var(--animation-fast) ease-out,
      left var(--animation-fast) ease-out,
      font-size var(--animation-fast) ease-out,
      color var(--animation-fast) ease-out;

    z-index: 1;
  }

  &.secondary {
    height: var(--spacing-s10);
    padding: 0 var(--spacing-s2);

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: var(--aliases-600);

    border-top-left-radius: var(--border-radius-xs);
    border-bottom-left-radius: var(--border-radius-xs);

    color: var(--color-white-fixed);

    transition: background-color var(--animation-fast) ease-out;
  }

  &.tertiary {
    position: absolute;
    top: var(--spacing-s3);
    left: var(--spacing-s2);

    color: var(--color-gray-800);

    transition:
      top var(--animation-fast) ease-out,
      left var(--animation-fast) ease-out,
      font-size var(--animation-fast) ease-out,
      color var(--animation-fast) ease-out;

    z-index: 2;
  }
`;
