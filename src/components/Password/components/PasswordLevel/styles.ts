import styled from "styled-components";

export const Container = styled.div`
  position: relative;

  margin-top: 0.25rem;

  & div.empty {
    position: absolute;
    top: 0;
    left: 0;

    height: 0.25rem;
    width: 100%;

    background-color: var(--color-gray-600);

    border-radius: var(--border-radius-sm);

    z-index: 1;
  }

  & div.s1,
  & div.s2,
  & div.s3,
  & div.s4 {
    position: absolute;
    top: 0;
    left: 0;

    height: 0.25rem;

    z-index: 2;

    border-radius: var(--border-radius-sm);

    transition:
      width var(--animation-fast) ease-out,
      background-color var(--animation-fast) ease-out;
  }

  & div.s1 {
    width: 25%;

    background-color: var(--color-danger-base);
  }

  & div.s2 {
    width: 50%;

    background-color: var(--color-warning-base);
  }

  & div.s3 {
    width: 75%;

    background-color: var(--color-warning-base);
  }

  & div.s4 {
    width: 100%;

    background-color: var(--color-success-base);
  }
`;
