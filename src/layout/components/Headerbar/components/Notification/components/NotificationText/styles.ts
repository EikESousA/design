import styled from "styled-components";

export const Container = styled.div`
  width: 18rem;

  margin: 0 1rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.25rem;

  & p {
    width: 100%;

    font-size: var(--font-size-md);
    font-weight: var(--font-weight-bold);

    color: var(--color-black);

    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  & span {
    width: 100%;

    font-size: var(--font-size-sm);
    font-weight: var(--font-weight-regular);

    color: var(--color-gray-600);

    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;
