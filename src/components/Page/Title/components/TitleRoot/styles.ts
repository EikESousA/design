import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: var(--spacing-s1);

  margin-bottom: var(--spacing-s4);

  & section.title {
    width: 100%;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: var(--spacing-s4);

    text-align: center;

    font-size: var(--font-size-lg);
    font-weight: var(--font-weight-bold);
    font-family: var(--font-family-title);

    color: var(--color-gray-900);

    grid-area: title;
  }

  & section.title p {
    text-align: center;

    font-size: var(--font-size-lg);
    font-weight: var(--font-weight-bold);
    font-family: var(--font-family-title);

    color: var(--color-gray-900);
  }

  & section.title svg {
    height: var(--font-size-lg);
    width: var(--font-size-lg);

    color: var(--color-gray-900);
  }
`;
