import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: 100%;

  padding: var(--spacing-s2) var(--spacing-s4);

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  gap: var(--spacing-s4);

  background-color: var(--aliases-100);

  transition: background-color var(--animation-faster) ease-out;

  & button.backdrop {
    display: none;
  }

  @media screen and (max-width: 768px) {
    &.closed {
      gap: 0;
    }

    &.opened button.backdrop {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;

      display: flex;

      background-color: #00000020;

      filter: blur(0.2);

      z-index: 3;
    }
  }
`;

export const Menu = styled.section`
  height: 100%;
  width: 18rem;

  padding: var(--spacing-s4) var(--spacing-s2);

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: var(--spacing-s4);

  background-color: var(--aliases-100);

  transition: width var(--animation-slow) ease-out;

  @media screen and (max-width: 768px) {
    &.opened {
      position: fixed;
      top: 0;
      left: 0;
      bottom: 0;
      z-index: 4;
    }

    &.closed {
      width: 0;
      padding: 0;
    }
  }
`;

export const Fields = styled.section`
  height: 100%;
  width: calc(100% - 24rem - var(--spacing-s4));

  flex: 1 1 auto;

  @media screen and (max-width: 768px) {
    width: 100%;

    & > fieldset {
      height: calc(100% - var(--spacing-s15));
    }
  }
`;

export const FieldContainer = styled.fieldset`
  height: 100%;
  width: 100%;

  padding: var(--spacing-s4);

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  gap: var(--spacing-s4);

  border-color: var(--color-gray-500);

  & > legend {
    padding: var(--spacing-s2);

    font-family: var(--font-family-default);
    font-weight: var(--font-weight-medium);
    font-size: var(--font-size-md);

    color: var(--color-gray-800);
  }
`;

export const FieldContent = styled.div`
  height: calc(100% - 30rem);

  flex: 1 1 auto;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: var(--font-size-xl4);

  border-radius: var(--border-radius-sm);

  background-color: var(--aliases-800);

  background-image: linear-gradient(
      0deg,
      transparent 24%,
      var(--aliases-100-transparent) 25%,
      var(--aliases-100-transparent) 26%,
      transparent 27%,
      transparent 74%,
      var(--aliases-100-transparent) 75%,
      var(--aliases-100-transparent) 76%,
      transparent 77%,
      transparent
    ),
    linear-gradient(
      90deg,
      transparent 24%,
      var(--aliases-100-transparent) 25%,
      var(--aliases-100-transparent) 26%,
      transparent 27%,
      transparent 74%,
      var(--aliases-100-transparent) 75%,
      var(--aliases-100-transparent) 76%,
      transparent 77%,
      transparent
    );

  background-size: 40px 40px;

  overflow-y: auto;
`;

export const FieldInfo = styled.div`
  height: calc(100% - 30rem);
  flex: 1 1 auto;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: var(--spacing-s4);

  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 0.6rem;
    height: 0.6rem;
    margin-right: 10px;
  }
  ::-webkit-scrollbar-corner {
    border: none;
    background: none;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #4a4f6990;
    border-radius: 3px;
    cursor: move;
  }
  ::-webkit-scrollbar-track {
    background-color: #b8b8be40;
    border: none;
  }
`;

export const Icons = styled.ul`
  display: grid;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: var(--spacing-s4);

  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;

  & li {
    flex: 1;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: var(--spacing-s2);
  }

  & li p {
    font-family: var(--font-family-default);
    font-weight: var(--font-weight-medium);
    font-size: var(--font-size-md);

    color: var(--color-gray-900);
  }

  & li svg {
    height: var(--font-size-xl2);
    width: var(--font-size-xl2);

    color: var(--color-gray-900);
  }
`;
