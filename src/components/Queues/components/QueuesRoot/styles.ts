import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & div {
    width: 0.4rem;
    height: 0.4rem;
    border: 0.4rem solid;
    border-color: black transparent transparent black;
    transform: rotate(-45deg);
  }
`;
