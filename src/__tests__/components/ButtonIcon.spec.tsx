/* eslint-disable no-alert */
import { render, screen, fireEvent } from "@testing-library/react";

import { ButtonIcon } from "@/components";

const mockHandleOnMouseOut = jest.fn();
const mockHandleOnMouseOver = jest.fn();

jest.mock("../../hooks/tooltip", () => {
  return {
    useTooltip: () => {
      return {
        handleOnMouseOut: mockHandleOnMouseOut,
        handleOnMouseOver: mockHandleOnMouseOver,
      };
    },
  };
});

describe("<ButtonIcon />", () => {
  it("Renderiza", () => {
    render(
      <ButtonIcon.Root
        icon="delete"
        onClick={() => alert("Botao apertado")}
        datatestid="button-icon"
      />,
    );

    const component = screen.getByTestId("button-icon");

    expect(component).toBeVisible();
  });

  it("Renderiza com variantes", () => {
    render(
      <>
        <ButtonIcon.Root
          icon="delete"
          onClick={() => alert("Botao apertado")}
          variant="primary"
          datatestid="button-icon-primary"
        />
        <ButtonIcon.Root
          icon="delete"
          onClick={() => alert("Botao apertado")}
          variant="secondary"
          datatestid="button-icon-secondary"
        />
        <ButtonIcon.Root
          icon="delete"
          onClick={() => alert("Botao apertado")}
          variant="tertiary"
          datatestid="button-icon-tertiary"
        />
        <ButtonIcon.Root
          icon="delete"
          onClick={() => alert("Botao apertado")}
          variant="danger"
          datatestid="button-icon-danger"
        />
      </>,
    );

    const componentPrimary = screen.getByTestId("button-icon-primary");
    const componentSecondary = screen.getByTestId("button-icon-secondary");
    const componentTertiary = screen.getByTestId("button-icon-tertiary");
    const componentDanger = screen.getByTestId("button-icon-danger");

    expect(componentPrimary).toBeVisible();
    expect(componentPrimary).toHaveClass("primary");

    expect(componentSecondary).toBeVisible();
    expect(componentSecondary).toHaveClass("secondary");

    expect(componentTertiary).toBeVisible();
    expect(componentTertiary).toHaveClass("tertiary");

    expect(componentDanger).toBeVisible();
    expect(componentDanger).toHaveClass("danger");
  });

  it("Renderiza com tamanhos", () => {
    render(
      <>
        <ButtonIcon.Root
          icon="delete"
          onClick={() => alert("Botao apertado")}
          size="sm"
          datatestid="button-icon-sm"
        />
        <ButtonIcon.Root
          icon="delete"
          onClick={() => alert("Botao apertado")}
          size="md"
          datatestid="button-icon-md"
        />
        <ButtonIcon.Root
          icon="delete"
          onClick={() => alert("Botao apertado")}
          size="lg"
          datatestid="button-icon-lg"
        />
      </>,
    );

    const componentPrimary = screen.getByTestId("button-icon-sm");
    const componentSecondary = screen.getByTestId("button-icon-md");
    const componentTertiary = screen.getByTestId("button-icon-lg");

    expect(componentPrimary).toBeVisible();
    expect(componentPrimary).toHaveClass("sm");

    expect(componentSecondary).toBeVisible();
    expect(componentSecondary).toHaveClass("md");

    expect(componentTertiary).toBeVisible();
    expect(componentTertiary).toHaveClass("lg");
  });

  it("Renderiza com tamanho completo", () => {
    render(
      <ButtonIcon.Root
        icon="delete"
        onClick={() => alert("Botao apertado")}
        full
        datatestid="button-icon"
      />,
    );

    const component = screen.getByTestId("button-icon");

    expect(component).toBeVisible();
    expect(component).toHaveClass("full");
  });

  it("Renderiza carregando", () => {
    render(
      <ButtonIcon.Root
        icon="delete"
        onClick={() => alert("Botao apertado")}
        loading
        datatestid="button-icon"
      />,
    );

    const component = screen.getByTestId("button-icon");
    const loading = screen.getByTestId("button-icon-loading");

    expect(component).toBeVisible();
    expect(component).toHaveClass("loading");

    expect(loading).toBeVisible();
  });

  it("Renderiza desabilitado", () => {
    render(
      <ButtonIcon.Root
        icon="delete"
        onClick={() => alert("Botao apertado")}
        disabled
        datatestid="button-icon"
      />,
    );

    const component = screen.getByTestId("button-icon-button");

    expect(component).toBeVisible();
    expect(component).toBeDisabled();
  });

  it("Renderiza com click", () => {
    const mockOnClick = jest.fn();

    render(
      <ButtonIcon.Root
        icon="delete"
        onClick={mockOnClick}
        datatestid="button-icon"
      />,
    );

    const component = screen.getByTestId("button-icon-button");

    expect(component).toBeVisible();

    fireEvent.click(component);

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  it("Renderiza com badge", () => {
    render(
      <>
        <ButtonIcon.Root
          icon="delete"
          onClick={() => alert("Botao apertado")}
          datatestid="button-icon-badge-0"
        >
          <ButtonIcon.Badge number={0} datatestid="badge-0" />
        </ButtonIcon.Root>
        <ButtonIcon.Root
          icon="delete"
          onClick={() => alert("Botao apertado")}
          datatestid="button-icon-badge-1"
        >
          <ButtonIcon.Badge number={1} datatestid="badge-1" />
        </ButtonIcon.Root>
        <ButtonIcon.Root
          icon="delete"
          onClick={() => alert("Botao apertado")}
          datatestid="button-icon-badge-10"
        >
          <ButtonIcon.Badge number={10} datatestid="badge-10" />
        </ButtonIcon.Root>
      </>,
    );

    const componentBadge0P = screen.queryByTestId("button-icon-badge-0");
    const componentBadge0Icon = screen.queryByTestId("badge-0");
    const componentBadge1P = screen.queryByTestId("button-icon-badge-1");
    const componentBadge1Icon = screen.queryByTestId("badge-1");
    const componentBadge10Icon = screen.queryByTestId("button-icon-badge-10");
    const componentBadge10P = screen.queryByTestId("badge-10");

    expect(componentBadge0P).toBeNull();
    expect(componentBadge0Icon).toBeNull();
    expect(componentBadge1P).toBeVisible();
    expect(componentBadge1Icon).toBeNull();
    expect(componentBadge10Icon).toBeVisible();
    expect(componentBadge10P).toBeNull();
  });

  it("Renderiza com tooltip", async () => {
    render(
      <ButtonIcon.Root
        icon="delete"
        onClick={() => alert("Botao apertado")}
        datatestid="button-icon"
        tooltip="tooltip"
      />,
    );

    fireEvent.mouseOver(screen.getByTestId("button-icon"));

    expect(mockHandleOnMouseOver).toHaveBeenCalledTimes(1);

    fireEvent.mouseOut(screen.getByTestId("button-icon"));

    expect(mockHandleOnMouseOut).toHaveBeenCalledTimes(1);
  });
});
