import styled from "styled-components";

export const Container = styled.tr`
  border-radius: var(--border-radius-md);

  @media screen and (max-width: 768px) {
    margin-bottom: 0.625em;

    display: block;

    border-bottom: 3px solid red;

    box-shadow:
      rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
      rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;

    & td:first-child {
      border-top-left-radius: var(--border-radius-md);
      border-top-right-radius: var(--border-radius-md);
    }

    & td:last-child {
      border-bottom-left-radius: var(--border-radius-md);
      border-bottom-right-radius: var(--border-radius-md);
    }
  }

  @media screen and (min-width: 769px) {
    box-shadow: var(--box-shadow-base);

    td:first-child {
      border-top-left-radius: var(--border-radius-md);
      border-bottom-left-radius: var(--border-radius-md);
    }

    td:last-child {
      border-top-right-radius: var(--border-radius-md);
      border-bottom-right-radius: var(--border-radius-md);
    }
  }
`;
