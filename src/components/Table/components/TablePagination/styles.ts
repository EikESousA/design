import styled from "styled-components";

export const Container = styled.footer`
  width: 100%;

  margin-top: 1rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  & div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }

  & button {
    padding: 0.25rem 0.5rem;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 5px;

    border: 1px solid red;
  }

  & button svg {
    height: 2rem;
    width: 2rem;
  }

  & button p {
    font-size: 1rem;
    font-weight: bold;
  }

  & button.active {
    background-color: red;
  }

  & button.active p {
    color: white;
  }
`;
