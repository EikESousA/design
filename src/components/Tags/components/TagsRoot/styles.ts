import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  & svg {
    height: 2rem;
    width: 2rem;
  }

  & div.tag {
    position: relative;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    height: 1.5rem;
    width: 5.5rem;
  }

  & div.tag div.top {
    position: absolute;
    top: 0.2rem;
    left: 0.2rem;

    height: 1rem;
    width: 1rem;

    display: block;

    background-color: var(--color-primary-base);

    border: 2px solid var(--color-primary-base);
    border-right: transparent;
    border-top: transparent;

    border-radius: 0.1rem;

    transform: rotate(45deg);
  }

  & div.tag div.bottom {
    position: absolute;
    top: 0.05rem;
    left: 0.6rem;

    height: 1.35rem;
    width: 2rem;

    background-color: var(--color-primary-base);

    border: 2px solid var(--color-primary-base);
    border-left: transparent;

    border-radius: 0.2rem;
  }

  & div.tag div.text {
    position: absolute;
    top: 0.05rem;
    left: 0.6rem;

    position: absolute;
    top: 0.2rem;
    left: 0.9rem;
    color: white;
    z-index: 2;
    font-size: 0.75rem;
    font-weight: bold;
    font-family: Roboto, sans-serif;
  }
`;
