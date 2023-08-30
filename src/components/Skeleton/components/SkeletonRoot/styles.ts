import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 5rem;

  background: #eee;
  background: linear-gradient(110deg, red 8%, blue 18%, green 33%);
  border-radius: 5px;
  background-size: 200% 100%;
  animation: 1.5s shine linear infinite;

  @keyframes shine {
    to {
      background-position-x: -200%;
    }
  }
`;
