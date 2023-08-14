import styled from "styled-components";

export const Container = styled.div`
  position: relative;

  & img {
    height: 2.5rem;
    width: 2.5rem;

    border-radius: 50%;
  }

  & svg {
    height: 2.5rem;
    width: 2.5rem;

    fill: var(--aliases-700);
  }

  & svg.type {
    position: absolute;
    bottom: -0.25rem;
    right: -0.25rem;

    height: 1.5rem;
    width: 1.5rem;

    padding: 0.1rem;

    background-color: var(--aliases-200);

    border-radius: 50%;

    &.whatsapp {
      fill: #128c7e;
    }

    &.facebook {
      fill: #3b5998;
    }

    &.telegram {
      fill: #37afe2;
    }

    &.instagram {
      fill: #dd2a7b;
    }
  }
`;
