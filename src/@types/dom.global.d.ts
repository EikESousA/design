interface Element {
  requestFullscreen(): void;
  exitFullscreen(): void;
}

declare global {
  interface WindowEventMap {
    keydown: KeyboardEvent<HTMLInputElement>;
  }
}
