import styled from "styled-components";

export const Container = styled.div`
  & svg {
    display: flex;
    justify-content: center;
    align-items: center;

    height: var(--font-size-xl2);
    width: var(--font-size-xl2);

    color: var(--color-gray-600);

    z-index: 1;
  }
`;
