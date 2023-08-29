import styled from "styled-components";

interface IContainerProps {
  bordercolor?: string;
}

export const Container = styled.tr<IContainerProps>`
  border-radius: var(--border-radius-md);
  box-shadow: var(--box-shadow-base);

  td:first-child {
    border-top-left-radius: var(--border-radius-md);
    border-bottom-left-radius: var(--border-radius-md);
  }

  td:last-child {
    border-top-right-radius: var(--border-radius-md);
    border-bottom-right-radius: var(--border-radius-md);
  }

  &.color td:first-child {
    box-shadow:
      0 0 0 ${({ bordercolor }) => bordercolor} inset,
      4px 0 0 ${({ bordercolor }) => bordercolor} inset;
  }
`;
