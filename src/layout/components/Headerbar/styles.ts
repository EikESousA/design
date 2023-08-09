import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin: 0 var(--spacing-s4);
  padding: var(--spacing-s2) 0;

  border-bottom: var(--border-width-thin) solid var(--color-primary-base);

  & section {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: var(--spacing-s4);

    transition: margin-left var(--animation-normal) ease-out;
  }

  & section.fold {
    margin-left: 3rem;
  }

  & section.unfold {
    margin-left: 0rem;
  }

  & section.company p {
    font-size: var(--font-size-xl);
    font-weight: var(--font-weight-bold);

    color: var(--color-primary-base);
  }

  & section button {
    padding: var(--spacing-s1);

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: transparent;

    transition: background-color var(--animation-fast) ease-out;

    border-radius: var(--border-radius-sm);

    &:hover {
      background-color: #00000025;
    }
  }

  & section button svg {
    height: 2rem;
    width: 2rem;

    fill: var(--color-primary-base);
    color: var(--color-primary-base);
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
