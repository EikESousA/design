import styled from "styled-components";

export const Container = styled.thead`
  position: -webkit-sticky;
  position: sticky;
  top: 0;

  z-index: 2;

  @media screen and (max-width: 768px) {
    position: absolute;

    height: 1px;
    width: 1px;

    margin: -1px;
    padding: 0;

    border: none;

    clip: rect(0 0 0 0);

    overflow: hidden;
  }
`;
