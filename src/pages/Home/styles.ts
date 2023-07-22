import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  border: var(--border-width-thin) solid var(--aliases-500);

  box-shadow:
    rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
`;
