/* eslint-disable no-alert */
import { render, screen, fireEvent } from "@testing-library/react";

import { ButtonDefault } from "@/components";

describe("<ButtonDefault />", () => {
  it("Renderiza", () => {
    render(
      <ButtonDefault.Root
        onClick={() => alert("Botao apertado")}
        datatestid="button-default"
      >
        <ButtonDefault.Label label="Button" />
      </ButtonDefault.Root>,
    );

    const component = screen.getByTestId("button-default");

    expect(component).toBeInTheDocument();
  });

  it("Renderiza com label", () => {
    render(
      <ButtonDefault.Root
        onClick={() => alert("Botao apertado")}
        datatestid="button-default"
      >
        <ButtonDefault.Label label="Button" />
      </ButtonDefault.Root>,
    );

    const component = screen.queryByText("Button");

    expect(component).toBeVisible();
  });

  it("Renderiza com variantes", () => {
    render(
      <>
        <ButtonDefault.Root
          variant="primary"
          onClick={() => alert("Botao apertado")}
          datatestid="button-default-primary"
        >
          <ButtonDefault.Label label="Button" />
        </ButtonDefault.Root>
        ,
        <ButtonDefault.Root
          variant="secondary"
          onClick={() => alert("Botao apertado")}
          datatestid="button-default-secondary"
        >
          <ButtonDefault.Label label="Button" />
        </ButtonDefault.Root>
        ,
        <ButtonDefault.Root
          variant="tertiary"
          onClick={() => alert("Botao apertado")}
          datatestid="button-default-tertiary"
        >
          <ButtonDefault.Label label="Button" />
        </ButtonDefault.Root>
        ,
        <ButtonDefault.Root
          variant="danger"
          onClick={() => alert("Botao apertado")}
          datatestid="button-default-danger"
        >
          <ButtonDefault.Label label="Button" />
        </ButtonDefault.Root>
        ,
      </>,
    );

    const componentPrimary = screen.getByTestId("button-default-primary");
    const componentSecondary = screen.getByTestId("button-default-secondary");
    const componentTertiary = screen.getByTestId("button-default-tertiary");
    const componentDanger = screen.getByTestId("button-default-danger");

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
        <ButtonDefault.Root
          size="sm"
          onClick={() => alert("Botao apertado")}
          datatestid="button-default-sm"
        >
          <ButtonDefault.Label label="Button" />
        </ButtonDefault.Root>
        ,
        <ButtonDefault.Root
          size="md"
          onClick={() => alert("Botao apertado")}
          datatestid="button-default-md"
        >
          <ButtonDefault.Label label="Button" />
        </ButtonDefault.Root>
        ,
        <ButtonDefault.Root
          size="lg"
          onClick={() => alert("Botao apertado")}
          datatestid="button-default-lg"
        >
          <ButtonDefault.Label label="Button" />
        </ButtonDefault.Root>
        ,
      </>,
    );

    const componentPrimary = screen.getByTestId("button-default-sm");
    const componentSecondary = screen.getByTestId("button-default-md");
    const componentTertiary = screen.getByTestId("button-default-lg");

    expect(componentPrimary).toBeVisible();
    expect(componentPrimary).toHaveClass("sm");

    expect(componentSecondary).toBeVisible();
    expect(componentSecondary).toHaveClass("md");

    expect(componentTertiary).toBeVisible();
    expect(componentTertiary).toHaveClass("lg");
  });

  it("Renderiza com tamanho completo", () => {
    render(
      <ButtonDefault.Root
        full
        onClick={() => alert("Botao apertado")}
        datatestid="button-default"
      >
        <ButtonDefault.Label label="Button" />
      </ButtonDefault.Root>,
    );

    const component = screen.getByTestId("button-default");

    expect(component).toBeVisible();
    expect(component).toHaveClass("full");
  });

  it("Renderiza carregando", () => {
    render(
      <ButtonDefault.Root
        loading
        onClick={() => alert("Botao apertado")}
        datatestid="button-default"
      >
        <ButtonDefault.Label label="Button" />
      </ButtonDefault.Root>,
    );

    const component = screen.getByTestId("button-default");
    const loading = screen.getByTestId("button-default-loading");

    expect(component).toBeVisible();
    expect(component).toHaveClass("loading");

    expect(loading).toBeVisible();
  });

  it("Renderiza desabilitado", () => {
    render(
      <ButtonDefault.Root
        disabled
        onClick={() => alert("Botao apertado")}
        datatestid="button-default"
      >
        <ButtonDefault.Label label="Button" />
      </ButtonDefault.Root>,
    );

    const component = screen.getByTestId("button-default");

    expect(component).toBeVisible();
    expect(component).toBeDisabled();
  });

  it("Renderiza com icones", () => {
    render(
      <ButtonDefault.Root
        onClick={() => alert("Botao apertado")}
        datatestid="button-default"
      >
        <ButtonDefault.LeftIcon icon="attachfile" datatestid="button-default" />
        <ButtonDefault.Label label="Button" />
        <ButtonDefault.RightIcon icon="delete" datatestid="button-default" />
      </ButtonDefault.Root>,
    );

    const component = screen.getByTestId("button-default");
    const leftIcon = screen.getByTestId("button-default-left-icon");
    const rightIcon = screen.getByTestId("button-default-right-icon");

    expect(component).toBeVisible();
    expect(leftIcon).toBeVisible();
    expect(rightIcon).toBeVisible();
  });

  it("Renderiza com click", () => {
    const mockOnClick = jest.fn();

    render(
      <ButtonDefault.Root onClick={mockOnClick} datatestid="button-default">
        <ButtonDefault.Label label="Button" />
      </ButtonDefault.Root>,
    );

    const component = screen.getByTestId("button-default");

    expect(component).toBeInTheDocument();

    fireEvent.click(component);

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  it("Renderiza com tipos", () => {
    render(
      <>
        <ButtonDefault.Root
          onClick={() => alert("Botao apertado")}
          type="button"
          datatestid="button-default-button"
        >
          <ButtonDefault.Label label="Button" />
        </ButtonDefault.Root>
        ,
        <ButtonDefault.Root
          onClick={() => alert("Botao apertado")}
          type="submit"
          datatestid="button-default-submit"
        >
          <ButtonDefault.Label label="Button" />
        </ButtonDefault.Root>
        ,
      </>,
    );

    const component = screen.getByTestId("button-default-button");
    const submit = screen.getByTestId("button-default-submit");

    expect(component).toBeVisible();
    expect(component).toHaveProperty("type", "button");
    expect(submit).toBeVisible();
    expect(submit).toHaveProperty("type", "submit");
  });
});
