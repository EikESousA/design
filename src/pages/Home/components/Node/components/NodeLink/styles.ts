import styled from "styled-components";

export const Container = styled.button`
  position: absolute;
  left: calc(50% - var(--font-size-xs) / 2);

  width: var(--font-size-xs);
  height: var(--font-size-xs);

  border-radius: 50%;

  background-color: var(--color-gray-600);

  cursor: pointer;

  &.active {
    background-color: yellow;
  }

  &.flowchart-node-link-in {
    top: calc((var(--font-size-xs) / 2) * -1);
  }

  &.flowchart-node-link-out {
    bottom: calc((var(--font-size-xs) / 2) * -1);
  }
`;
