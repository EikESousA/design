import styled from "styled-components";

export const Container = styled.div``;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: var(--spacing-s8);

  flex-wrap: wrap;
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  align-items: stretch;
  gap: var(--spacing-s2);

  & > p {
    max-width: 30rem;

    font-size: var(--font-size-md);
    font-weight: var(--font-weight-bold);
    font-family: var(--font-family-title);

    overflow: hidden;

    white-space: nowrap;

    text-overflow: ellipsis;
  }

  & div.buttons {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    gap: var(--spacing-s2);

    margin-top: var(--spacing-s4);
  }
`;
