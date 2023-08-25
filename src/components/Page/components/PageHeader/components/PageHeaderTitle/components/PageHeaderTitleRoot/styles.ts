import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: var(--spacing-s4);

  & p {
    text-align: center;

    font-size: var(--font-size-xl2);
    font-weight: var(--font-weight-bold);
    font-family: var(--font-family-title);

    color: var(--color-gray-900);
  }
`;
