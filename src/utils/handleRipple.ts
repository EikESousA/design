import { MouseEvent } from "react";

interface IHandleRippeProps {
  event: MouseEvent<HTMLButtonElement>;
  onClick: (value?: any) => void;
}

export default function handleRipple({ event, onClick }: IHandleRippeProps) {
  const button = event.currentTarget;

  const circle = document.createElement("span");
  const diameter = Math.max(button.clientWidth, button.clientHeight);
  const radius = diameter / 2;

  const buttonRect = button.getBoundingClientRect();

  circle.style.width = circle.style.height = `${diameter}px`;
  circle.style.left = `${event.clientX - buttonRect.left - radius}px`;
  circle.style.top = `${event.clientY - buttonRect.top - radius}px`;
  circle.classList.add("ripple");

  const ripple = button.getElementsByClassName("ripple")[0];

  if (ripple) {
    ripple.remove();
  }

  button.appendChild(circle);

  onClick();
}
