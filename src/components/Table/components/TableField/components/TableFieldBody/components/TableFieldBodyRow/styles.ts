import styled from "styled-components";

interface IContainerProps {
  borderColor?: string;
}

export const Container = styled.tr<IContainerProps>`
  border-radius: 10px;
  box-shadow: var(--box-shadow-base);

  td:first-child {
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }

  td:last-child {
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }

  &.color td:first-child {
    box-shadow:
      0 0 0 ${({ borderColor }) => borderColor} inset,
      4px 0 0 ${({ borderColor }) => borderColor} inset;
  }
`;
