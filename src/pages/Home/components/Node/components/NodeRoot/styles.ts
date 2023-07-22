import styled from "styled-components";

export const Container = styled.div`
  width: 15rem;

  position: absolute;

  border-radius: var(--spacing-s4);

  box-shadow: var(--box-shadow-base);

  transform-origin: top left;

  z-index: 2;

  &.over {
    & section.flowchart-node-header {
      height: 100%;

      background-color: var(--color-gray-400);

      border: 2px dashed transparent;
      border-radius: var(--spacing-s4);

      opacity: 0.6;

      & p {
        display: none;
      }

      & button {
        visibility: hidden;
      }
    }

    & section.flowchart-node-main {
      display: none;
    }
  }

  &.message,
  &.question {
    & section.flowchart-node-header {
      background-color: #068be8;
    }

    & section.flowchart-node-main {
      border-color: #068be8;
    }

    &.over {
      & section.flowchart-node-header {
        background-color: #40aefa;

        border-color: #045e9d;
      }
    }
  }

  &.select,
  &.conditional {
    & section.flowchart-node-header {
      background-color: #7148ff;
    }

    & section.flowchart-node-main {
      border-color: #7148ff;
    }

    &.over {
      & section.flowchart-node-header {
        background-color: #c0aeff;

        border-color: #3800fb;
      }
    }
  }

  &.action,
  &.integration {
    & section.flowchart-node-header {
      background-color: #ffd07f;
    }

    & section.flowchart-node-main {
      border-color: #ffd07f;
    }

    &.over {
      & section.flowchart-node-header {
        background-color: #ffd999;

        border-color: #ffb433;
      }
    }
  }
`;
