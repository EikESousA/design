import styled from "styled-components";

export const Container = styled.div`
  background: var(--color-gray-200);
  background: linear-gradient(
    90deg,
    var(--color-gray-200) 0%,
    var(--color-gray-400) 25%,
    var(--color-gray-500) 50%,
    var(--color-gray-400) 75%,
    var(--color-gray-200) 100%
  );

  border-radius: var(--border-radius-sm);
  background-size: 200% 100%;
  animation: shine 1.5s linear infinite;

  &.circle {
    border-radius: var(--border-radius-circle);
  }

  @keyframes shine {
    to {
      background-position-x: -200%;
    }
  }
`;
