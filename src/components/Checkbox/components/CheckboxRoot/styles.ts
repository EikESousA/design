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

  & ul li label.disabled {
    opacity: var(--opacity-medium);

    cursor: not-allowed;

    & input {
      cursor: not-allowed;
    }
  }

  & input {
    width: 1.15rem;
    height: 1.15rem;

    margin: 0;

    display: grid;
    place-content: center;

    -webkit-appearance: none;
    appearance: none;

    background-color: var(--color-gray-100);

    font: inherit;
    color: currentColor;

    border: 0.15rem solid var(--color-gray-800);
    border-radius: 0.15rem;
    transform: translateY(-0.075rem);
  }

  & input:before {
    content: "";
    width: 0.65rem;
    height: 0.65rem;

    clippath: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
    transform: scale(0);
    transform-origin: bottom left;

    transition: var(--animation-faster) transform ease-in-out;
    box-shadow: inset 1rem 1rem var(--color-white);

    color: var(--color-gray-100);

    background-color: var(--color-gray-100);
  }

  & input:checked {
    background-color: var(--color-primary-base);
  }

  & input:checked:before {
    transform: scale(1);
  }

  & input:focus {
    outline: max(2px, 0.15rem) solid var(--color-primary-base);
    outline-offset: max(2px, 0.15rem);
  }

  & input:disabled {
    color: var(--color-gray-600);
    cursor: not-allowed;
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

  & p.required {
    margin-top: var(--font-size-sm);

    font-family: var(--font-family-default);
    font-weight: var(--font-weight-regular);
    font-size: var(--font-size-sm);

    color: var(--color-danger-base);
  }
`;
