import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100%;

  display: flex;
  flex-direction: column;

  background-color: var(--aliases-200);

  border-top-left-radius: var(--border-radius-lg);
  border-bottom-left-radius: var(--border-radius-lg);

  & > main {
    height: calc(100vh - 5rem);

    padding: var(--spacing-s2) var(--spacing-s2) var(--spacing-s2)
      var(--spacing-s4);

    overflow-y: auto;
  }

  & > footer {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    margin: 0 var(--spacing-s4);
    padding: var(--spacing-s2) 0;

    border-top: var(--border-width-thin) solid var(--color-primary-base);

    & p {
      font-size: var(--font-size-xs);
      font-weight: var(--font-weight-regular);

      color: var(--color-primary-base);
    }
  }

  @media screen and (max-width: 768px) {
    border-radius: 0;

    & > footer {
      display: none;
    }
  }
`;
