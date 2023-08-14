import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--aliases-500);

  &.horizontal {
    height: 1px;
    width: 100%;
  }

  &.vertical {
    width: 1px;
  }
`;
