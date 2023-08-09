import styled from "styled-components";

export const Container = styled.div`
  height: var(--spacing-s5);
  width: var(--spacing-s5);

  position: absolute;
  top: -0.5rem;
  right: -0.5rem;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 50%;

  background-color: var(--color-danger-base);

  animation: appear var(--animation-slower) ease-out;

  overflow: visible !important;

  z-index: 999;

  & > svg {
    height: var(--font-size-sm);
    width: var(--font-size-xs);

    color: var(--color-white);
  }

  & > p {
    font-family: var(--font-family-default);
    font-weight: var(--font-weight-bold);
    font-size: var(--font-size-sm);

    color: var(--color-white);
  }
`;
