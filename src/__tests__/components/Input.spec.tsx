import { render, screen, fireEvent } from "@testing-library/react";

import { Input } from "@/components";

describe("<Input />", () => {
  it("Renderiza com label", () => {
    render(
      <Input.Root name="input" value="" setValue={() => {}} datatestid="input">
        <Input.Label label="label" />
      </Input.Root>,
    );

    const component = screen.queryByText("label");

    expect(component).toBeVisible();
  });

  it("Renderiza com placeholder", () => {
    const { debug } = render(
      <Input.Root
        name="input"
        value=""
        setValue={() => {}}
        placeholder="placeholder"
        datatestid="input"
      >
        <Input.Label
          variant="secondary"
          label="label"
          placeholder="placeholder"
          datatestid="input"
        />
      </Input.Root>,
    );

    debug();

    const component = screen.queryByText("placeholder");

    expect(component).toBeVisible();
  });

  it("Renderiza com variantes", () => {
    render(
      <>
        <Input.Root
          name="input"
          value=""
          setValue={() => {}}
          variant="primary"
          datatestid="input-primary"
        >
          <Input.Label
            label="label"
            placeholder="placeholder"
            datatestid="input-primary"
          />
        </Input.Root>
        <Input.Root
          name="input"
          value=""
          setValue={() => {}}
          variant="secondary"
          datatestid="input-secondary"
        >
          <Input.Label
            label="label"
            placeholder="placeholder"
            datatestid="input-secondary"
          />
        </Input.Root>
        <Input.Root
          name="input"
          value=""
          setValue={() => {}}
          variant="tertiary"
          datatestid="input-tertiary"
        >
          <Input.Label
            label="label"
            placeholder="placeholder"
            datatestid="input-tertiary"
          />
        </Input.Root>
      </>,
    );

    const componentPrimary = screen.getByTestId("input-primary");
    const componentSecondary = screen.getByTestId("input-secondary");
    const componentTertiary = screen.getByTestId("input-tertiary");

    expect(componentPrimary).toBeVisible();
    expect(componentPrimary).toHaveClass("primary");

    expect(componentSecondary).toBeVisible();
    expect(componentSecondary).toHaveClass("secondary");

    expect(componentTertiary).toBeVisible();
    expect(componentTertiary).toHaveClass("tertiary");
  });

  it("Renderiza com tamanho completo", () => {
    render(
      <Input.Root
        name="input"
        value=""
        setValue={() => {}}
        full
        datatestid="input"
      >
        <Input.Label label="label" datatestid="input" />
      </Input.Root>,
    );

    const component = screen.getByTestId("input");

    expect(component).toBeVisible();
    expect(component).toHaveClass("full");
  });

  it("Renderiza desabilitado", () => {
    render(
      <Input.Root
        name="input"
        value=""
        setValue={() => {}}
        disabled
        datatestid="input"
      >
        <Input.Label label="label" datatestid="input" />
      </Input.Root>,
    );

    const component = screen.getByTestId("input-input");

    expect(component).toBeVisible();
    expect(component).toBeDisabled();
  });

  it("Renderiza obrigatorio", () => {
    render(
      <Input.Root
        name="input"
        value=""
        setValue={() => {}}
        required
        datatestid="input"
      >
        <Input.Label label="label" datatestid="input" />
      </Input.Root>,
    );

    const component = screen.getByTestId("input-input");

    expect(component).toBeVisible();
    expect(component).toBeRequired();
  });

  it("Renderiza com erro", () => {
    render(
      <Input.Root
        name="input"
        value=""
        setValue={() => {}}
        error="error"
        datatestid="input"
      >
        <Input.Label label="label" datatestid="input" />
      </Input.Root>,
    );

    const component = screen.queryByText("error");

    expect(component).toBeVisible();
  });

  it("Renderiza com icones", () => {
    render(
      <Input.Root name="input" value="" setValue={() => {}} datatestid="input">
        <Input.Label label="label" datatestid="input" />
        <Input.LeftIcon icon="send" datatestid="input" />
        <Input.RightIcon icon="delete" datatestid="input" />
      </Input.Root>,
    );

    const component = screen.getByTestId("input");
    const leftIcon = screen.getByTestId("input-left-icon");
    const rightIcon = screen.getByTestId("input-right-icon");

    expect(component).toBeVisible();
    expect(leftIcon).toBeVisible();
    expect(rightIcon).toBeVisible();
  });

  it("Renderiza com variavel", async () => {
    let value = "";

    function setValue(valueUpdated: string) {
      value = valueUpdated;
    }

    render(
      <Input.Root
        name="input"
        value={value}
        setValue={() => setValue(value)}
        datatestid="input"
      >
        <Input.Label label="label" datatestid="input" />
      </Input.Root>,
    );

    const component = screen.getByTestId("input-input");

    fireEvent.change(component, { target: { value: "Test" } });

    expect(value).toEqual("Test");
  });

  it("Renderiza botao com label", () => {
    render(
      <Input.Root name="input" value="" setValue={() => {}} datatestid="input">
        <Input.Label label="label" datatestid="input" />
        <Input.Button onClick={() => {}} label="Button" datatestid="input" />
      </Input.Root>,
    );

    const component = screen.queryByText("Button");

    expect(component).toBeVisible();
  });

  it("Renderiza botao com icone", () => {
    render(
      <Input.Root name="input" value="" setValue={() => {}} datatestid="input">
        <Input.Label label="label" />
        <Input.Button onClick={() => {}} icon="send" datatestid="input" />
      </Input.Root>,
    );

    const component = screen.getByTestId("input-button-icon");

    expect(component).toBeVisible();
  });

  it("Renderiza botao com click", () => {
    const mockOnClick = jest.fn();

    render(
      <Input.Root name="input" value="" setValue={() => {}} datatestid="input">
        <Input.Label label="label" datatestid="input" />
        <Input.Button onClick={mockOnClick} label="Button" datatestid="input" />
      </Input.Root>,
    );

    const component = screen.getByTestId("input-button");

    expect(component).toBeVisible();

    fireEvent.click(component);

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  it("Renderiza botao com loading", () => {
    render(
      <Input.Root name="input" value="" setValue={() => {}} datatestid="input">
        <Input.Label label="label" datatestid="input" />
        <Input.Button onClick={() => {}} loading datatestid="input" />
      </Input.Root>,
    );

    const component = screen.getByTestId("input-button-loading");

    expect(component).toBeVisible();
  });

  it("Renderiza botao desabilitado", () => {
    render(
      <Input.Root name="input" value="" setValue={() => {}} datatestid="input">
        <Input.Label label="label" datatestid="input" />
        <Input.Button onClick={() => {}} disabled datatestid="input" />
      </Input.Root>,
    );

    const component = screen.getByTestId("input-button");

    expect(component).toBeVisible();
    expect(component).toBeDisabled();
  });

  it("Focus", () => {
    render(
      <Input.Root name="input" value="" setValue={() => {}} datatestid="input">
        <Input.Label label="label" datatestid="input" />
      </Input.Root>,
    );

    const component = screen.getByTestId("input-input");

    fireEvent.focus(component);

    const component1 = screen.getByTestId("input");

    expect(component1).toHaveClass("focused");
  });

  it("OnBlur", () => {
    render(
      <Input.Root
        name="input"
        value="test"
        setValue={() => {}}
        datatestid="input"
      >
        <Input.Label label="label" datatestid="input" />
      </Input.Root>,
    );

    const component = screen.getByTestId("input-input");

    fireEvent.blur(component);

    const component1 = screen.getByTestId("input");

    expect(component1).toHaveClass("filled");
  });

  it("Coverage 100%", async () => {});
});
