import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  flex: 1;

  background-color: var(--color-white);

  background-image: linear-gradient(
      0deg,
      transparent 24%,
      var(--aliases-400) 25%,
      var(--aliases-400) 26%,
      transparent 27%,
      transparent 74%,
      var(--aliases-400) 75%,
      var(--aliases-400) 76%,
      transparent 77%,
      transparent
    ),
    linear-gradient(
      90deg,
      transparent 24%,
      var(--aliases-400) 25%,
      var(--aliases-400) 26%,
      transparent 27%,
      transparent 74%,
      var(--aliases-400) 75%,
      var(--aliases-400) 76%,
      transparent 77%,
      transparent
    );

  background-size: 40px 40px;

  z-index: 0;

  & div#flowchart {
    position: relative;

    height: 100%;
    width: 100%;

    overflow: hidden;

    z-index: 1;

    &.active {
      background-color: red;
    }
  }
`;
