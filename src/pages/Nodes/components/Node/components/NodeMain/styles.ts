import styled from "styled-components";

export const Container = styled.section`
  padding: var(--spacing-s4) 0;

  border: var(--border-width-thin) solid transparent;
  border-bottom-left-radius: var(--spacing-s4);
  border-bottom-right-radius: var(--spacing-s4);

  background-color: var(--color-white);

  & div {
    position: relative;

    padding: 0 var(--spacing-s4);

    & p {
      font-size: var(--font-size-md);
      font-weight: var(--font-weight-regular);
      font-family: var(--font-family-default);

      color: var(--color-gray-800);

      -webkit-touch-callout: none;
      -webkit-user-select: none;
      -khtml-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
    }
  }
`;
