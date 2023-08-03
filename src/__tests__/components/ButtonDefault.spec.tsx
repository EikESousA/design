import { ButtonDefault } from "@/components";
import { render, screen, fireEvent } from "@testing-library/react";

describe("<ButtonDefault />", () => {
  it("Renderiza", () => {
    render(
      <ButtonDefault.Root
        label="Button"
        onClick={() => {}}
        datatestid="button-default"
      />,
    );

    const component = screen.getByTestId("button-default");

    expect(component).toBeInTheDocument();
  });

  it("Renderiza com label", () => {
    render(
      <ButtonDefault.Root
        label="Button"
        onClick={() => {}}
        datatestid="button-default"
      />,
    );

    const component = screen.queryByText("Button");

    expect(component).toBeVisible();
  });

  it("Renderiza com variantes", () => {
    render(
      <>
        <ButtonDefault.Root
          label="Button"
          onClick={() => {}}
          variant="primary"
          datatestid="button-default-primary"
        />
        <ButtonDefault.Root
          label="Button"
          onClick={() => {}}
          variant="secondary"
          datatestid="button-default-secondary"
        />
        <ButtonDefault.Root
          label="Button"
          onClick={() => {}}
          variant="tertiary"
          datatestid="button-default-tertiary"
        />
        <ButtonDefault.Root
          label="Button"
          onClick={() => {}}
          variant="danger"
          datatestid="button-default-danger"
        />
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
          label="Button"
          onClick={() => {}}
          size="sm"
          datatestid="button-default-sm"
        />
        <ButtonDefault.Root
          label="Button"
          onClick={() => {}}
          size="md"
          datatestid="button-default-md"
        />
        <ButtonDefault.Root
          label="Button"
          onClick={() => {}}
          size="lg"
          datatestid="button-default-lg"
        />
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
        label="Button"
        onClick={() => {}}
        full
        datatestid="button-default"
      />,
    );

    const component = screen.getByTestId("button-default");

    expect(component).toBeVisible();
    expect(component).toHaveClass("full");
  });

  it("Renderiza carregando", () => {
    render(
      <ButtonDefault.Root
        label="Button"
        onClick={() => {}}
        loading
        datatestid="button-default"
      />,
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
        label="Button"
        onClick={() => {}}
        disabled
        datatestid="button-default"
      />,
    );

    const component = screen.getByTestId("button-default");

    expect(component).toBeVisible();
    expect(component).toBeDisabled();
  });

  it("Renderiza com icones", () => {
    render(
      <ButtonDefault.Root
        label="Button"
        onClick={() => {}}
        datatestid="button-default"
      >
        <ButtonDefault.LeftIcon icon="attachfile" datatestid="button-default" />
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
      <ButtonDefault.Root
        label="Button"
        onClick={mockOnClick}
        datatestid="button-default"
      />,
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
          label="Button"
          onClick={() => {}}
          type="button"
          datatestid="button-default-button"
        />
        <ButtonDefault.Root
          label="Button"
          onClick={() => {}}
          type="submit"
          datatestid="button-default-submit"
        />
      </>,
    );

    const component = screen.getByTestId("button-default-button");
    const submit = screen.getByTestId("button-default-submit");

    expect(component).toBeVisible();
    expect(component).toHaveProperty("type", "button");
    expect(submit).toBeVisible();
    expect(submit).toHaveProperty("type", "submit");
  });

  it("Coverage 100%", async () => {});
});
