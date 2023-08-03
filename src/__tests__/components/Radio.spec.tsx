import { render, screen, fireEvent } from "@testing-library/react";

import { Radio } from "@/components";
import { IRadioOptionsDTO } from "@/components/Radio/components/RadioRoot";

const options1 = [
  {
    label: "Teste1",
    value: "1",
  },
  {
    label: "Teste2",
    value: "2",
  },
] as IRadioOptionsDTO[];

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
] as IRadioOptionsDTO[];

describe("Radio />", () => {
  it("Renderiza sem items", () => {
    render(
      <Radio.Root
        checked={""}
        setChecked={() => {}}
        options={[]}
        datatestid="radio"
      />,
    );

    const component = screen.queryByText("Não possui dados para selecionar!");

    expect(component).toBeVisible();
  });

  it("Renderiza sem items com mensagem vazia", () => {
    render(
      <Radio.Root
        checked={""}
        setChecked={() => {}}
        options={[]}
        msgEmpty="Nao possui items de teste"
        datatestid="radio"
      />,
    );

    const component = screen.queryByText("Nao possui items de teste");

    expect(component).toBeVisible();
  });

  it("Renderiza com items", async () => {
    render(
      <Radio.Root
        checked={""}
        setChecked={() => {}}
        options={options1}
        datatestid="radio"
      />,
    );

    const component = await screen.findAllByRole("listitem");

    expect(component).toHaveLength(options1.length);
  });

  it("Renderiza com items e alguns desabilitados", () => {
    render(
      <Radio.Root
        checked={""}
        setChecked={() => {}}
        options={options2}
        datatestid="radio"
      />,
    );

    const component1 = screen.getByTestId("radio-input-enabled-Teste1");
    const component2 = screen.getByTestId("radio-input-disabled-Teste2");

    expect(component1).toBeEnabled();
    expect(component2).toBeDisabled();
  });

  it("Renderiza com items e todos desabilitados", () => {
    render(
      <Radio.Root
        checked={""}
        setChecked={() => {}}
        options={options1}
        disabled
        datatestid="radio"
      />,
    );

    const component1 = screen.getByTestId("radio-input-disabled-Teste1");
    const component2 = screen.getByTestId("radio-input-disabled-Teste2");

    expect(component1).toBeDisabled();
    expect(component2).toBeDisabled();
  });

  it("Renderiza com titulo", async () => {
    render(
      <Radio.Root
        checked={""}
        setChecked={() => {}}
        options={[]}
        title="Titulo de teste"
        datatestid="radio"
      />,
    );

    const component = screen.queryByText("Titulo de teste");

    expect(component).toBeVisible();
  });

  it("Renderiza horizontal", async () => {
    render(
      <Radio.Root
        checked={""}
        setChecked={() => {}}
        options={options1}
        horizontal
        datatestid="radio"
      />,
    );

    const component = screen.getByRole("list");

    expect(component).toHaveClass("horizontal");
  });

  it("Renderiza vertical", async () => {
    render(
      <Radio.Root
        checked={""}
        setChecked={() => {}}
        options={options1}
        horizontal={false}
        datatestid="radio"
      />,
    );

    const component = screen.getByRole("list");

    expect(component).toHaveClass("vertical");
  });

  it("Seleciona um radio", async () => {
    render(
      <Radio.Root
        checked={""}
        setChecked={() => {}}
        options={options1}
        datatestid="radio"
      />,
    );

    const component = screen.getByTestId("radio-input-enabled-Teste1");

    expect(component).not.toBeChecked();

    fireEvent.click(component);

    expect(component).toBeChecked();
  });

  it("Seleciona um radio com variavel", async () => {
    let selected = "";

    function setSelected(value: string) {
      selected = value;
    }

    render(
      <Radio.Root
        checked={selected}
        setChecked={(value) => setSelected(value)}
        options={options1}
        datatestid="radio"
      />,
    );

    const component = screen.getByTestId("radio-input-enabled-Teste1");

    fireEvent.click(component);

    expect(selected).toEqual("1");
  });

  it("Seleciona dois radio com variavel", async () => {
    let selected = "";

    function setSelected(value: string) {
      selected = value;
    }

    render(
      <Radio.Root
        options={options1}
        checked={selected}
        setChecked={(value) => setSelected(value)}
        datatestid="radio"
      />,
    );

    const component1 = screen.getByTestId("radio-label-enabled-Teste1");
    fireEvent.click(component1);

    const component2 = screen.getByTestId("radio-label-enabled-Teste2");
    fireEvent.click(component2);

    expect(selected).toEqual("2");
  });

  it("Coverage 100%", async () => {});
});
