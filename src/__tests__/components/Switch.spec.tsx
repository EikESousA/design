/* eslint-disable no-alert */
import { render, screen, fireEvent } from "@testing-library/react";

import { Switch } from "@/components";

describe("<Switch />", () => {
  it("Renderiza com label", () => {
    render(
      <Switch.Root
        label="Test"
        checked={false}
        setChecked={() => alert("Botao apertado")}
        datatestid="switch"
      />,
    );

    const component = screen.queryByText("Test");

    expect(component).toBeVisible();
  });

  it("Renderiza desabilitado", () => {
    render(
      <Switch.Root
        label="Test"
        checked={false}
        setChecked={() => alert("Botao apertado")}
        datatestid="switch"
        disabled
      />,
    );

    const component = screen.getByTestId("switch-input");

    expect(component).toBeInTheDocument();
    expect(component).toBeDisabled();
  });

  it("Renderiza marcado", () => {
    render(
      <Switch.Root
        label="Test"
        checked
        setChecked={() => alert("Botao apertado")}
        datatestid="switch"
      />,
    );

    const component = screen.getByTestId("switch-input");

    expect(component).toBeInTheDocument();
    expect(component).toBeChecked();
  });

  it("Renderiza desmarcado", () => {
    render(
      <Switch.Root
        label="Test"
        checked={false}
        setChecked={() => alert("Botao apertado")}
        datatestid="switch"
      />,
    );

    const component = screen.getByTestId("switch-input");

    expect(component).toBeInTheDocument();
    expect(component).not.toBeChecked();
  });

  it("Renderiza com click", () => {
    const mockOnClick = jest.fn();

    render(
      <Switch.Root
        label="Test"
        checked={false}
        setChecked={mockOnClick}
        datatestid="switch"
      />,
    );

    const component = screen.getByTestId("switch");

    expect(component).toBeVisible();

    fireEvent.click(component);

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
