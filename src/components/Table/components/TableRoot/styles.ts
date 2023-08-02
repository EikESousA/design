import styled from 'styled-components';

export const Container = styled.div`
  max-height: 100%;
  width: 100%;

  padding: 0 0.5rem;

  background-color: ${({ theme }) => theme.page.fade};
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 0.25rem;

  overflow-x: auto;

  & table {
    width: 100%;

    border-collapse: collapse;
  }

  & thead {
    background-color: ${({ theme }) => theme.page.fade};

    position: -webkit-sticky;
    position: sticky;
    top: 0;
    z-index: 2;
  }

  & thead tr th {
    display: table-cell;

    padding: 0.5rem;

    text-align: center;

    font-weight: bold;
    font-size: 0.875rem;

    color: ${({ theme }) => theme.text.black};
  }

  & tbody {
    background-color: ${({ theme }) => theme.page.fade};
  }

  & tbody tr td {
    display: table-cell;

    padding: 0.25rem 0.5rem;

    text-align: center;

    font-weight: normal;
    font-size: 0.875rem;

    color: ${({ theme }) => theme.text.black};

    border-top: 1px solid rgba(0, 0, 0, 0.12);
    border-left: none;
    border-right: none;
    border-collapse: collapse;
  }

  & tbody tr td.empty {
    padding: 3rem;

    & > div {
      width: 100%;

      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

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
    background-color: ${({ theme }) => theme.primary};
    border-radius: 3px;
    cursor: move;
  }

  ::-webkit-scrollbar-track {
    background-color: #b8b8be40;
    border: none;
  }
`;

export const Pagination = styled.div`
  padding: 0.5rem 1rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  & div p {
    font-size: 1.1rem;

    color: ${({ theme }) => theme.text.gray};
  }
`;
