import styled from "styled-components";

export const Container = styled.div`
  & p.title {
    font-family: var(--font-family-default);
    font-weight: var(--font-weight-bold);
    font-size: var(--font-size-md);

    margin-bottom: var(--spacing-s4);

    color: var(--color-gray-900);
  }

  & ul {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    gap: var(--spacing-s2);
  }

  & ul li label {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: var(--spacing-s4);

    padding: var(--spacing-s1) var(--spacing-s2) var(--spacing-s1)
      var(--spacing-s1);
    border-radius: var(--border-radius-full);
    transition: all var(--animation-fast) ease;

    cursor: pointer;
  }

  & ul li label input {
    display: flex;
    flex-shrink: 0;

    background-color: #fff;
    width: var(--spacing-s6);
    height: var(--spacing-s6);
    border-radius: var(--border-radius-full);
    margin-right: var(--spacing-s1);
    transition: all var(--animation-fast) ease;
    box-shadow: inset 0 0 0 0.125rem var(--color-primary-base);

    -webkit-appearance: none;
    appearance: none;

    transition: opacity var(--animation-fast) ease-out;

    cursor: pointer;
  }

  & ul li label input:checked {
    box-shadow: inset 0 0 0 0.4375rem var(--color-primary-dark);
  }

  & ul li label input:focus {
    outline: max(2px, 0.15rem) solid var(--color-primary-dark);
    outline-offset: max(2px, 0.15rem);
  }

  & ul li label.checked {
    background-color: var(--color-primary-base);
  }

  & ul li label.disabled {
    opacity: var(--opacity-medium);

    cursor: not-allowed;

    & input {
      cursor: not-allowed;
    }
  }

  & ul li label p {
    font-family: var(--font-family-default);
    font-weight: var(--font-weight-medium);
    font-size: var(--font-size-md);

    color: var(--color-gray-900);

    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  & p.empty {
    font-family: var(--font-family-default);
    font-weight: var(--font-weight-lighter);
    font-size: var(--font-size-sm);

    color: var(--color-gray-800);
  }
`;
