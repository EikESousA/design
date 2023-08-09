/* eslint-disable no-alert */
import { render, screen, fireEvent } from "@testing-library/react";

import { Checkbox } from "@/components";
import { ICheckboxOptionsDTO } from "@/components/Checkbox/components/CheckboxRoot";

const options1 = [
  {
    label: "Teste1",
    value: "1",
  },
  {
    label: "Teste2",
    value: "2",
  },
] as ICheckboxOptionsDTO[];

const options2 = [
  {
    label: "Teste1",
    value: "1",
    disabled: false,
  },
  {
    label: "Teste2",
    value: "2",
    disabled: true,
  },
] as ICheckboxOptionsDTO[];

describe("<Checkbox />", () => {
  it("Renderiza", () => {
    render(
      <Checkbox.Root
        name="checkbox"
        options={[]}
        checked={[]}
        setChecked={() => alert("Botao apertado")}
        datatestid="checkbox"
      />,
    );

    const component = screen.getByTestId("checkbox");

    expect(component).toBeVisible();
  });

  it("Renderiza sem items com mensagem vazia", () => {
    render(
      <Checkbox.Root
        name="checkbox"
        options={[]}
        checked={[]}
        setChecked={() => alert("Botao apertado")}
        msgEmpty="Nao possui items de teste"
        datatestid="checkbox"
      />,
    );

    const component = screen.queryByText("Nao possui items de teste");

    expect(component).toBeVisible();
  });

  it("Renderiza com items", async () => {
    render(
      <Checkbox.Root
        name="checkbox"
        options={options1}
        checked={[]}
        setChecked={() => alert("Botao apertado")}
        datatestid="checkbox"
      />,
    );

    const component = await screen.findAllByRole("listitem");

    expect(component).toHaveLength(options1.length);
  });

  it("Renderiza com items e alguns desabilitados", () => {
    render(
      <Checkbox.Root
        name="checkbox"
        options={options2}
        checked={[]}
        setChecked={() => alert("Botao apertado")}
        datatestid="checkbox"
      />,
    );

    const component1 = screen.getByTestId("checkbox-input-enabled-Teste1");
    const component2 = screen.getByTestId("checkbox-input-disabled-Teste2");

    expect(component1).toBeEnabled();
    expect(component2).toBeDisabled();
  });

  it("Renderiza com items e todos desabilitados", () => {
    render(
      <Checkbox.Root
        name="checkbox"
        options={options2}
        checked={[]}
        setChecked={() => alert("Botao apertado")}
        disabled
        datatestid="checkbox"
      />,
    );

    const component1 = screen.getByTestId("checkbox-input-disabled-Teste1");
    const component2 = screen.getByTestId("checkbox-input-disabled-Teste2");

    expect(component1).toBeDisabled();
    expect(component2).toBeDisabled();
  });

  it("Renderiza com titulo", async () => {
    render(
      <Checkbox.Root
        name="checkbox"
        options={options1}
        checked={[]}
        setChecked={() => alert("Botao apertado")}
        title="Titulo de teste"
        datatestid="checkbox"
      />,
    );

    const component = screen.queryByText("Titulo de teste");

    expect(component).toBeVisible();
  });

  it("Renderiza horizontal", async () => {
    render(
      <Checkbox.Root
        name="checkbox"
        options={options1}
        checked={[]}
        setChecked={() => alert("Botao apertado")}
        horizontal
        datatestid="checkbox"
      />,
    );

    const component = screen.getByRole("list");

    expect(component).toHaveClass("horizontal");
  });

  it("Renderiza vertical", async () => {
    render(
      <Checkbox.Root
        name="checkbox"
        options={options1}
        checked={[]}
        setChecked={() => alert("Botao apertado")}
        horizontal={false}
        datatestid="checkbox"
      />,
    );

    const component = screen.getByRole("list");

    expect(component).toHaveClass("vertical");
  });

  it("Renderiza com obrigatorio", async () => {
    render(
      <Checkbox.Root
        name="checkbox"
        options={options1}
        checked={[]}
        setChecked={() => alert("Botao apertado")}
        required={1}
        datatestid="checkbox"
      />,
    );

    const component = screen.getByTestId("checkbox-required");

    expect(component).toBeVisible();
  });

  it("Seleciona um checkbox", async () => {
    render(
      <Checkbox.Root
        name="checkbox"
        options={options1}
        checked={[]}
        setChecked={() => alert("Botao apertado")}
        datatestid="checkbox"
      />,
    );

    const component = screen.getByTestId("checkbox-input-enabled-Teste1");

    expect(component).not.toBeChecked();

    fireEvent.click(component);

    expect(component).toBeChecked();
  });

  it("Seleciona um checkbox com variavel", async () => {
    let selected: ICheckboxOptionsDTO[] = [];

    function setSelected(value: ICheckboxOptionsDTO[]) {
      selected = value;
    }

    render(
      <Checkbox.Root
        name="checkbox"
        options={options1}
        checked={selected}
        setChecked={(value) => setSelected(value)}
        datatestid="checkbox"
      />,
    );

    const component = screen.getByTestId("checkbox-input-enabled-Teste1");

    fireEvent.click(component);

    expect(selected[0]).toEqual(options1[0]);
  });

  it("Seleciona dois checkbox com variavel", async () => {
    const mockSetState = jest.fn();

    render(
      <Checkbox.Root
        name="checkbox"
        options={options1}
        checked={[]}
        setChecked={(value) => mockSetState(value)}
        datatestid="checkbox"
      />,
    );

    const component1 = screen.getByTestId("checkbox-label-enabled-Teste1");
    fireEvent.click(component1);

    const component2 = screen.getByTestId("checkbox-label-enabled-Teste2");
    fireEvent.click(component2);

    expect(mockSetState).toHaveBeenCalledTimes(2);
  });

  it("Mais de um selecionado", async () => {
    const mockSetState = jest.fn();

    render(
      <Checkbox.Root
        name="checkbox"
        options={options1}
        checked={options1}
        setChecked={(value) => mockSetState(value)}
        datatestid="checkbox"
      />,
    );

    const component1 = screen.getByTestId("checkbox-label-enabled-Teste1");
    fireEvent.click(component1);

    expect(mockSetState).toHaveBeenCalledTimes(1);
  });

  it("Desmarca", async () => {
    const mockSetState = jest.fn();

    render(
      <Checkbox.Root
        name="checkbox"
        options={options1}
        checked={[options1[0]]}
        setChecked={(value) => mockSetState(value)}
        datatestid="checkbox"
      />,
    );

    const component1 = screen.getByTestId("checkbox-label-enabled-Teste1");
    fireEvent.click(component1);

    expect(mockSetState).toHaveBeenCalledTimes(1);
  });
});
