import styled from "styled-components";

export const Container = styled.nav`
  height: 100vh;

  position: relative;

  display: flex;
  flex-direction: column;

  background-color: var(--color-primary-base);

  background: var(--color-primary-darker);
  background: linear-gradient(
    180deg,
    var(--color-primary-darker) 0%,
    var(--color-primary-base) 100%
  );

  & header {
    width: 100%;

    padding: var(--spacing-s4);

    display: flex;
    justify-content: center;
    align-items: center;
  }

  & header img {
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;

    transition:
      height var(--animation-normal) ease-out,
      width var(--animation-normal) ease-out;
  }

  & button.fold {
    display: flex;
    justify-content: center;
    align-items: center;

    padding: var(--spacing-s2);

    background-color: transparent;

    border-radius: var(--border-radius-sm);

    transition:
      background-color var(--animation-fast) ease-out,
      top var(--animation-normal) ease-out,
      right var(--animation-normal) ease-out;
  }

  & main {
    flex: 1 1 auto;

    margin-top: var(--spacing-s4);
  }

  & main {
    height: 100%;
    width: 100%;

    padding: 0 var(--spacing-s2);

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: var(--spacing-s2);
  }

  & main button {
    width: 100%;

    padding: var(--spacing-s1) var(--spacing-s1) var(--spacing-s1)
      var(--spacing-s2);

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: var(--spacing-s2);

    background-color: transparent;

    transition: background-color var(--animation-fast) ease-out;

    border-radius: var(--border-radius-sm);

    &:hover {
      background-color: #ffffff40;
    }
  }

  & main button.submodule {
    padding: var(--spacing-s2) var(--spacing-s1) var(--spacing-s2)
      var(--spacing-s10);
  }

  & main button div {
    flex: 1;

    display: flex;
    flex-direction: row;
    align-items: center;
  }

  & main button div section {
    flex: 1;

    display: flex;
    flex-direction: row;
    align-items: center;
    gap: var(--spacing-s4);
  }

  & main button div section svg {
    height: 1.5rem;
    width: 1.5rem;

    fill: var(--color-white);
  }

  & main button.submodule div section svg {
    height: 1.5rem;
    width: 1.5rem;
  }

  & main button div section p {
    font-size: var(--font-size-md);
    font-weight: var(--font-weight-regular);

    color: var(--color-white);
  }

  & main button.submodule div section p {
    font-size: var(--font-size-sm);
  }

  & main button div span {
    padding: var(--spacing-s1) var(--spacing-s2);

    font-size: var(--font-size-xxs);
    font-weight: var(--font-weight-regular);

    color: var(--color-primary-base);
    background-color: var(--color-white);

    border: 1px solid var(--color-white);
    border-radius: var(--border-radius-sm);
  }

  & main button > svg {
    height: 2rem;
    width: 2rem;

    fill: var(--color-white);
  }

  & main button > section {
    height: 2rem;
    width: 2rem;
  }

  & footer {
    padding: var(--spacing-s4);
  }

  & footer button.user {
    width: 100%;

    margin-bottom: var(--spacing-s4);

    padding: var(--spacing-s1) var(--spacing-s2);

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    background-color: transparent;

    border-radius: var(--border-radius-sm);

    transition: background-color var(--animation-fast) ease-out;

    cursor: pointer;

    &:hover {
      background-color: #ffffff40;
    }
  }

  & footer button.user section {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: var(--spacing-s4);
  }

  & footer button.user section div {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: var(--spacing-s2);
  }

  & footer button.user section div img {
    border-radius: 50%;

    transition:
      height var(--animation-normal) ease-out,
      width var(--animation-normal) ease-out;
  }

  & footer button.user section div p {
    font-size: var(--font-size-sm);
    font-weight: var(--font-weight-bold);

    color: var(--color-white);

    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  & footer button.user section div span {
    font-size: var(--font-size-xs);
    font-weight: var(--font-weight-regular);

    color: var(--color-white);

    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  & footer section.buttons {
    width: 100%;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: var(--spacing-s8);
  }

  & footer section.buttons button {
    padding: var(--spacing-s2);

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: transparent;

    border-radius: var(--border-radius-sm);

    transition: background-color var(--animation-fast) ease-out;

    &:hover {
      background-color: #ffffff40;
    }
  }

  & footer section.buttons button svg {
    height: 1rem;
    width: 1rem;

    fill: var(--color-white);
  }

  &.unfold {
    width: 20rem;

    & header img {
      width: 6rem;
      height: 6rem;
    }

    & button.fold {
      position: absolute;
      top: 0.5rem;
      right: 0.5rem;

      & svg {
        height: 1.5rem;
        width: 1.5rem;

        fill: var(--color-white);
      }

      &:hover {
        background-color: #ffffff40;
      }
    }

    & main button div section p {
      display: flex;
    }

    & main button div span {
      display: flex;
    }

    & main button > svg {
      display: flex;
    }

    & main button > section {
      display: flex;
    }

    & main button div {
      justify-content: flex-start;
    }

    & main button div section {
      justify-content: flex-start;
    }

    & footer button.user section img {
      height: 2.5rem;
      width: 2.5rem;
    }

    & footer button.user section div {
      display: flex;
    }

    & footer section.buttons button.bug {
      display: flex;
    }

    & footer section.buttons button.suport {
      display: flex;
    }
  }

  &.fold {
    width: 5rem;

    & header img {
      width: 3rem;
      height: 3rem;
    }

    & button.fold {
      position: absolute;
      top: 0.5rem;
      right: -3rem;

      & svg {
        height: 1rem;
        width: 1rem;

        fill: var(--color-primary-base);
      }

      &:hover {
        background-color: #00000025;
      }
    }

    & main button {
      justify-content: center;
      align-items: center;
    }

    & main button div section p {
      display: none;
    }

    & main button div span {
      display: none;
    }

    & main button > section {
      display: none;
    }

    & main button div {
      justify-content: center;
    }

    & main button div section {
      justify-content: center;
    }

    & main button > svg {
      display: none;
    }

    & footer button.user section img {
      height: 2rem;
      width: 2rem;
    }

    & footer button.user section div {
      display: none;
    }

    & footer button.user section div {
      display: none;
    }

    & footer section.buttons button.bug {
      display: none;
    }

    & footer section.buttons button.suport {
      display: none;
    }
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
