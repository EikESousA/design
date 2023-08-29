import styled from "styled-components";

export const Container = styled.div`
  flex: 1 1 auto;
  width: 100%;

  overflow: auto;

  & table {
    height: 100%;
    width: 100%;
  }

  & table,
  tr,
  td,
  th,
  tbody,
  thead {
    border: none;

    border-collapse: separate;
    border-spacing: 0 1rem;
  }
`;
