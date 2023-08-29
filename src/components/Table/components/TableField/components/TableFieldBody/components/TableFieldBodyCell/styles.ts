import styled from "styled-components";

export const Container = styled.td`
  padding: var(--spacing-s4);

  background-color: var(--aliases-200);

  font-weight: normal;
  font-size: var(--font-size-sm);

  text-align: left;

  color: var(--color-gray-900);

  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 2rem;

    border-left: 1px solid transparent !important;
    border-bottom: 1px solid blue;

    &::before {
      content: attr(data-label);
      float: left;

      font-weight: bold;
      text-transform: uppercase;
    }
  }
`;
