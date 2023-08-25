/* eslint-disable no-alert */
import { render, screen, fireEvent } from "@testing-library/react";

import { Input } from "@/components";

describe("<Input />", () => {
  it("Renderiza com label", () => {
    render(
      <Input.Root>
        <Input.Field.Root id="field-input">
          <Input.Field.Label label="label" />
          <Input.Field.Input
            name="input"
            value=""
            setValue={() => alert("Botao apertado")}
            datatestid="input"
          />
        </Input.Field.Root>
      </Input.Root>,
    );

    const component = screen.queryByText("label");

    expect(component).toBeVisible();
  });

  it("Renderiza com variantes", () => {
    render(
      <>
        <Input.Root variant="primary">
          <Input.Field.Root id="field-input">
            <Input.Field.Label label="label" />
            <Input.Field.Input
              name="input"
              value=""
              setValue={() => alert("Botao apertado")}
              datatestid="input-primary"
            />
          </Input.Field.Root>
        </Input.Root>
        <Input.Root variant="secondary">
          <Input.Field.Root id="field-input">
            <Input.Field.Label label="label" />
            <Input.Field.Input
              name="input"
              value=""
              setValue={() => alert("Botao apertado")}
              datatestid="input-secondary"
            />
          </Input.Field.Root>
        </Input.Root>
        <Input.Root variant="tertiary">
          <Input.Field.Root id="field-input">
            <Input.Field.Label label="label" />
            <Input.Field.Input
              name="input"
              value=""
              setValue={() => alert("Botao apertado")}
              datatestid="input-tertiary"
            />
          </Input.Field.Root>
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
      <Input.Root full>
        <Input.Field.Root id="field-input">
          <Input.Field.Label label="label" />
          <Input.Field.Input
            name="input"
            value=""
            setValue={() => alert("Botao apertado")}
            datatestid="input"
          />
        </Input.Field.Root>
      </Input.Root>,
    );

    const component = screen.getByTestId("input");

    expect(component).toBeVisible();
    expect(component).toHaveClass("full");
  });

  it("Renderiza desabilitado", () => {
    render(
      <Input.Root>
        <Input.Field.Root id="field-input">
          <Input.Field.Label label="label" />
          <Input.Field.Input
            name="input"
            value=""
            setValue={() => alert("Botao apertado")}
            datatestid="input"
            disabled
          />
        </Input.Field.Root>
      </Input.Root>,
    );

    const component = screen.getByTestId("input-input");

    expect(component).toBeVisible();
    expect(component).toBeDisabled();
  });

  it("Renderiza obrigatorio", () => {
    render(
      <Input.Root>
        <Input.Field.Root id="field-input">
          <Input.Field.Label label="label" />
          <Input.Field.Input
            name="input"
            value=""
            setValue={() => alert("Botao apertado")}
            datatestid="input"
            required
          />
        </Input.Field.Root>
      </Input.Root>,
    );

    const component = screen.getByTestId("input-input");

    expect(component).toBeVisible();
    expect(component).toBeRequired();
  });

  // it("Renderiza com erro", () => {
  //   render(
  //     <Input.Root
  //       name="input"
  //       value=""
  //       setValue={() => alert("Botao apertado")}
  //       error="error"
  //       datatestid="input"
  //     >
  //       <Input.Label label="label" datatestid="input" />
  //     </Input.Root>,
  //   );

  //   const component = screen.queryByText("error");

  //   expect(component).toBeVisible();
  // });

  it("Renderiza com icones", () => {
    render(
      <Input.Root>
        <Input.Field.Root id="field-input">
          <Input.Field.Label label="label" />
          <Input.Field.LeftIcon icon="send" datatestid="input" />
          <Input.Field.Input
            name="input"
            value=""
            setValue={() => alert("Botao apertado")}
            datatestid="input"
          />
          <Input.Field.RightIcon icon="delete" datatestid="input" />
        </Input.Field.Root>
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
      <Input.Root>
        <Input.Field.Root id="field-input">
          <Input.Field.Label label="label" />
          <Input.Field.Input
            name="input"
            value={value}
            setValue={() => setValue(value)}
            datatestid="input"
          />
        </Input.Field.Root>
      </Input.Root>,
    );

    const component = screen.getByTestId("input-input");

    fireEvent.change(component, { target: { value: "Test" } });

    expect(value).toEqual("Test");
  });

  it("Renderiza botao com label", () => {
    render(
      <Input.Root>
        <Input.Field.Root id="field-input">
          <Input.Field.Label label="label" />
          <Input.Field.Input
            name="input"
            value=""
            setValue={() => alert("Botao apertado")}
            datatestid="input"
          />
          <Input.Field.Button
            onClick={() => alert("Botao apertado")}
            label="Button"
            datatestid="input"
          />
        </Input.Field.Root>
      </Input.Root>,
    );

    const component = screen.queryByText("Button");

    expect(component).toBeVisible();
  });

  it("Renderiza botao com icone", () => {
    render(
      <Input.Root>
        <Input.Field.Root id="field-input">
          <Input.Field.Label label="label" />
          <Input.Field.Input
            name="input"
            value=""
            setValue={() => alert("Botao apertado")}
            datatestid="input"
          />
          <Input.Field.Button
            onClick={() => alert("Botao apertado")}
            icon="send"
            datatestid="input"
          />
        </Input.Field.Root>
      </Input.Root>,
    );

    const component = screen.getByTestId("input-button-icon");

    expect(component).toBeVisible();
  });

  it("Renderiza botao com click", () => {
    const mockOnClick = jest.fn();

    render(
      <Input.Root>
        <Input.Field.Root id="field-input">
          <Input.Field.Label label="label" />
          <Input.Field.Input
            name="input"
            value=""
            setValue={() => alert("Botao apertado")}
            datatestid="input"
          />
          <Input.Field.Button
            onClick={mockOnClick}
            label="Button"
            datatestid="input"
          />
        </Input.Field.Root>
      </Input.Root>,
    );

    const component = screen.getByTestId("input-button");

    expect(component).toBeVisible();

    fireEvent.click(component);

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  it("Renderiza botao com loading", () => {
    render(
      <Input.Root>
        <Input.Field.Root id="field-input">
          <Input.Field.Label label="label" />
          <Input.Field.Input
            name="input"
            value=""
            setValue={() => alert("Botao apertado")}
            datatestid="input"
          />
          <Input.Field.Button
            onClick={() => alert("Botao apertado")}
            loading
            datatestid="input"
          />
        </Input.Field.Root>
      </Input.Root>,
    );

    const component = screen.getByTestId("input-button-loading");

    expect(component).toBeVisible();
  });

  it("Renderiza botao desabilitado", () => {
    render(
      <Input.Root>
        <Input.Field.Root id="field-input">
          <Input.Field.Label label="label" />
          <Input.Field.Input
            name="input"
            value=""
            setValue={() => alert("Botao apertado")}
            datatestid="input"
          />
          <Input.Field.Button
            onClick={() => alert("Botao apertado")}
            disabled
            datatestid="input"
          />
        </Input.Field.Root>
      </Input.Root>,
    );

    const component = screen.getByTestId("input-button");

    expect(component).toBeVisible();
    expect(component).toBeDisabled();
  });

  it("Focus", () => {
    render(
      <Input.Root>
        <Input.Field.Root id="field-input">
          <Input.Field.Label label="label" />
          <Input.Field.Input
            name="input"
            value=""
            setValue={() => alert("Botao apertado")}
            datatestid="input"
          />
        </Input.Field.Root>
      </Input.Root>,
    );

    const component = screen.getByTestId("input-input");

    fireEvent.focus(component);

    const component1 = screen.getByTestId("input");

    expect(component1).toHaveClass("focused");
  });

  it("OnBlur", () => {
    render(
      <Input.Root>
        <Input.Field.Root id="field-input">
          <Input.Field.Label label="label" />
          <Input.Field.Input
            name="input"
            value="test"
            setValue={() => alert("Botao apertado")}
            datatestid="input"
          />
        </Input.Field.Root>
      </Input.Root>,
    );

    const component = screen.getByTestId("input-input");

    fireEvent.blur(component);

    const component1 = screen.getByTestId("input");

    expect(component1).toHaveClass("filled");
  });
});
