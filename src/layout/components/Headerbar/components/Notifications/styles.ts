import styled from "styled-components";

export const Container = styled.div`
  width: 30rem;

  padding: var(--spacing-s4) 0;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  background-color: var(--aliases-200);

  & header {
    width: 100%;

    padding: 0 var(--spacing-s4);

    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  & header p {
    font-size: var(--font-size-xl2);
    font-weight: var(--font-weight-bold);
    font-family: var(--font-family-title);

    color: var(--color-black);
  }

  & header button {
    font-size: var(--font-size-md);
    font-weight: var(--font-weight-medium);
    font-family: var(--font-family-subtitle);

    text-decoration: underline;

    color: var(--color-black);
  }

  & nav {
    width: 100%;

    margin-top: var(--spacing-s4);
    padding: 0 var(--spacing-s4);

    display: flex;
    justify-content: center;
    align-items: center;

    border-bottom: var(--border-width-thick) solid var(--color-gray-500);
  }

  & nav button {
    position: relative;

    flex: 1;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: var(--spacing-s2);

    padding: var(--spacing-s2);
  }

  & nav button p {
    font-size: var(--font-size-md);
    font-weight: var(--font-weight-bold);

    transition: color var(--animation-fast) ease-out;
  }

  & nav button.active p {
    color: var(--color-black);
  }

  & nav button.inactive p {
    color: var(--color-gray-500);
  }

  & nav button.inactive:hover p {
    color: var(--color-gray-700);
  }

  & nav button span {
    padding: 0.1rem var(--spacing-s1);

    background-color: var(--color-black);

    border-radius: var(--border-radius-sm);

    font-size: var(--font-size-sm);
    font-weight: var(--font-weight-bold);

    color: var(--color-white);

    transition:
      background-color var(--animation-fast) ease-out,
      color var(--animation-fast) ease-out;
  }

  & nav button.active span {
    background-color: var(--color-black);
  }

  & nav button.inactive span {
    background-color: var(--color-gray-500);
  }

  & nav button.inactive:hover span {
    background-color: var(--color-gray-700);
  }

  & nav button.active::after {
    content: "";

    position: absolute;
    left: 0;
    bottom: -2px;

    height: 2px;
    width: 100%;

    background-color: var(--color-black);
  }

  & nav button.inactive::after {
    content: "";

    position: absolute;
    left: 0;
    bottom: -2px;

    height: 2px;
    width: 100%;

    background-color: var(--color-gray-700);

    transform: scaleX(0);
    transform-origin: right;
    transition: transform var(--animation-slower) ease-out;
  }

  & nav button:hover::after {
    transform: scaleX(1);
    transform-origin: left;
  }

  & main {
    width: 100%;
  }

  & main ul {
    width: 100%;

    padding: 0 var(--spacing-s4);

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }

  & main ul li + li {
    border-top: var(--border-width-thin) solid var(--aliases-400);
  }
`;
