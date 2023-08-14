import styled from "styled-components";

export const Container = styled.nav`
  height: 100vh;

  position: relative;

  display: flex;
  flex-direction: column;

  background-color: var(--color-primary-base);

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

    padding: 0 var(--spacing-s4);

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: var(--spacing-s3);
  }

  & main button {
    width: 100%;

    position: relative;

    padding: var(--spacing-s2) var(--spacing-s1) var(--spacing-s2)
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

  & main button div {
    flex: 1;

    display: flex;
    flex-direction: row;
    align-items: center;
  }

  & main button div section.info {
    flex: 1;

    display: flex;
    flex-direction: row;
    align-items: center;
    gap: var(--spacing-s4);
  }

  & main button div section.info svg {
    height: 1.5rem;
    width: 1.5rem;

    fill: var(--color-white-fixed);
  }

  & main button div section.info p {
    font-size: var(--font-size-md);
    font-weight: var(--font-weight-regular);

    color: var(--color-white-fixed);
  }

  & main button div section.badge {
    padding: var(--spacing-s1) var(--spacing-s2);

    background-color: var(--color-white-fixed);

    border-radius: var(--border-radius-sm);
  }

  & main button div section.badge span {
    font-size: var(--font-size-xxs);
    font-weight: var(--font-weight-regular);

    color: var(--color-primary-base);
  }

  & footer {
    padding: var(--spacing-s4);
  }

  & footer button.user {
    width: 100%;

    margin-bottom: var(--spacing-s4);

    padding: var(--spacing-s2) var(--spacing-s2);

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

    color: var(--color-white-fixed);

    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  & footer button.user section div span {
    font-size: var(--font-size-xs);
    font-weight: var(--font-weight-regular);

    color: var(--color-white-fixed);

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

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
  }

  & footer section.buttons button svg {
    height: 1rem;
    width: 1rem;

    fill: var(--color-white-fixed);
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

        fill: var(--color-white-fixed);
      }

      &:hover {
        background-color: #ffffff40;
      }
    }

    & main button div section.info p {
      display: flex;
    }

    & main button div section.badge span {
      display: flex;
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
        height: 1.5rem;
        width: 1.5rem;

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

    & main button div section.info {
      justify-content: center;
    }

    & main button div section.info p {
      display: none;
    }

    & main button div section.badge {
      position: absolute;
      top: 0.25rem;
      right: 0.25rem;

      width: var(--spacing-s2);
      height: var(--spacing-s2);

      padding: 0;

      border-radius: 50%;
    }

    & main button div section.badge span {
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
    border-top-right-radius: var(--border-radius-lg);
    border-bottom-right-radius: var(--border-radius-lg);

    animation: appearFromLeft var(--animation-slower) ease-out;

    &.open {
      position: fixed;
      top: 0;
      left: 0;

      min-width: 16rem;
      width: 50vw;
      max-width: 100vw;

      z-index: 2;
    }

    &.closed {
      display: none;
    }

    & button.fold {
      display: none;
    }

    @keyframes appearFromLeft {
      from {
        opacity: 0;
        transform: translateX(-50px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }
  }

  @media screen and (min-width: 769px) {
  }
`;
