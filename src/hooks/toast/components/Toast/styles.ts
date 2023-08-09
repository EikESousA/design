import styled from "styled-components";

export const Container = styled.div`
  min-width: 15rem;
  max-width: 30rem;
  padding: var(--spacing-s1);

  border-radius: var(--border-radius-sm);

  z-index: 999;

  cursor: pointer;

  animation: appearFromLeft var(--animation-slower) ease-out;

  & + div {
    margin-top: var(--spacing-s4);
  }

  & div.border {
    height: 100%;
    width: 100%;

    border: var(--border-width-thin) solid transparent;
    border-radius: var(--border-radius-sm);
  }

  & div.info {
    flex: 1 1 auto;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    & svg {
      height: var(--spacing-s8);
      width: var(--spacing-s8);

      margin: var(--spacing-s2);

      border: var(--border-width-thin) solid transparent;
      border-radius: var(--border-radius-sm);
    }

    & p {
      display: flex;
      flex: 1;

      font-size: var(--font-size-md);
      font-weight: var(--font-weight-medium);
      line-height: var(--font-size-xl2);
      letter-spacing: 0;

      overflow-wrap: break-word;
      word-break: break-all;
    }

    & div.close {
      border: var(--border-width-thin) solid transparent;
      border-radius: var(--border-radius-sm);
      margin: var(--spacing-px);
    }
  }

  & div.loading {
    height: 2px;
    width: 100%;
    display: flex;

    & div.empty {
      height: 2px;
      background-color: transparent;
      transition: width var(--animation-fast) ease-out;

      animation: timeCloseEmpty 5s ease-out;
    }

    & div.complete {
      height: 2px;

      border-radius: var(--border-radius-lg);
      transition: width var(--animation-fast) ease-out;

      animation: timeCloseComplete 5s ease-out;
    }
  }

  &.success {
    background-color: #d8ffd3;

    &:hover div.close svg {
      color: #3d8b3d;
      border-color: #3d8b3d;
    }

    & div.border {
      border-color: #3d8b3d;
    }

    & div.info svg {
      color: #3d8b3d;
    }

    & div.info p {
      color: #3d8b3d;
    }

    & div.loading div.complete {
      background-color: #3d8b3d;
    }
  }

  &.info {
    background-color: #d3d8ff;

    &:hover div.close svg {
      color: #3b50ff;
      border-color: #3b50ff;
    }

    & div.border {
      border-color: #3b50ff;
    }

    & div.info svg {
      color: #3b50ff;
    }

    & div.info p {
      color: #3b50ff;
    }

    & div.loading div.complete {
      background-color: #3b50ff;
    }
  }

  &.warning {
    background-color: #fae4c4;

    &:hover div.close svg {
      color: #e08d13;
      border-color: #e08d13;
    }

    & div.border {
      border-color: #e08d13;
    }

    & div.info svg {
      color: #e08d13;
    }

    & div.info p {
      color: #e08d13;
    }

    & div.loading div.complete {
      background-color: #e08d13;
    }
  }

  &.error {
    background-color: #ffd3d8;

    &:hover div.close svg {
      color: #c9302c;
      border-color: #c9302c;
    }

    & div.border {
      border-color: #c9302c;
    }

    & div.info svg {
      color: #c9302c;
    }

    & div.info p {
      color: #c9302c;
    }

    & div.loading div.complete {
      background-color: #c9302c;
    }
  }

  @keyframes appearFromLeft {
    from {
      opacity: 0;
      transform: translateX(-50px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes timeCloseEmpty {
    from {
      width: 0%;
    }
    to {
      width: 100%;
    }
  }

  @keyframes timeCloseComplete {
    from {
      width: 100%;
    }
    to {
      width: 0%;
    }
  }
`;
