import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  left: 50px;
  top: 50px;

  font-family: var(--font-family-default);
  font-weight: var(--font-weight-regular);
  font-size: var(--font-size-xs);

  display: none;

  z-index: 999;

  & div.arrow {
    position: absolute;

    width: 0;
    height: 0;

    border-color: transparent;
    border-right-color: transparent;
    border-style: solid;
  }

  & p.inner {
    max-width: 12.5rem;

    padding: 3px 8px;

    color: var(--color-white);
    text-align: center;

    background-color: var(--color-black);
    border-radius: 4px;
  }

  &.right {
    margin-left: 5px;

    & div.arrow {
      top: 50%;
      left: auto;

      margin-left: -5px;

      border-width: 5px 5px 5px 0;
      border-right-color: var(--color-black);

      transform: translate(0, -50%);
    }
  }

  &.left {
    margin-left: -5px;

    & div.arrow {
      top: 50%;
      left: auto;
      right: -5px;

      margin-top: -5px;

      border-width: 5px 0 5px 5px;
      border-left-color: #000;
    }
  }

  &.top {
    margin-top: -5px;

    & div.arrow {
      top: auto;
      bottom: -5px;
      left: 50%;

      margin-left: -5px;

      border-width: 5px 5px 0;
      border-top-color: var(--color-black);
    }
  }

  &.bottom {
    margin-top: 5px;

    & div.arrow {
      top: -5px;
      left: 50%;

      margin-left: -5px;

      border-width: 0 5px 5px;
      border-bottom-color: var(--color-black);
    }
  }

  &.on {
    display: inline-block;
  }

  &.off {
    display: none;
  }
`;
