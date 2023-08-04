import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: var(--spacing-s2) var(--spacing-s4);

  background-color: transparent;

  border-top-left-radius: var(--spacing-s4);
  border-top-right-radius: var(--spacing-s4);

  cursor: grab;

  & p {
    font-size: var(--font-size-md);
    font-weight: var(--font-weight-bold);
    font-family: var(--font-family-default);

    text-align: center;

    color: var(--color-white);
  }

  & button {
    display: flex;
    justify-content: center;
    align-items: center;

    visibility: hidden;
  }

  & button svg {
    height: var(--spacing-s5);
    width: var(--spacing-s5);

    color: white;
  }

  &:hover button {
    visibility: visible;
  }
`;
