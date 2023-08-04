import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: 15vw;

  padding: var(--spacing-s4);

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  border-left: var(--border-width-thin) solid var(--aliases-500);

  background-color: var(--color-white);

  & section.flowchart-menu-title {
    width: 100%;

    & p {
      width: 100%;

      text-align: center;

      font-size: var(--font-size-md);
      font-weight: var(--font-weight-bold);
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

  & section.flowchart-menu-button {
    width: 100%;
    margin-top: var(--spacing-s8);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: var(--spacing-s4);

    & div {
      width: 100%;

      display: flex;
      justify-content: center;
      align-items: center;

      padding: var(--spacing-s4);

      border: var(--border-width-thin) solid var(--aliases-500);

      background-color: var(--color-gray-600);

      box-shadow:
        rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
        rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;

      cursor: grab;
    }

    & div p {
      color: var(--color-white);

      font-weight: var(--font-weight-bold);

      text-transform: uppercase;

      -webkit-touch-callout: none;
      -webkit-user-select: none;
      -khtml-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
    }
  }
`;
