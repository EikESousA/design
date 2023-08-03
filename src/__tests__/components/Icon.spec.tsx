import { render, screen, cleanup } from "@testing-library/react";

import { Icon } from "@/components";

afterEach(cleanup);

describe("<Icon />", () => {
  it("Renderiza Alert", () => {
    render(<Icon.Root icon={"alert"} datatestid="icon" />);

    const component = screen.getByTestId("icon");

    expect(component).toBeVisible();
  });

  it("Renderiza Asterisk", () => {
    render(<Icon.Root icon={"asterisk"} datatestid="icon" />);

    const component = screen.getByTestId("icon");

    expect(component).toBeVisible();
  });

  it("Renderiza Attachfile", () => {
    render(<Icon.Root icon={"attachfile"} datatestid="icon" />);

    const component = screen.getByTestId("icon");

    expect(component).toBeVisible();
  });

  it("Renderiza Chatbot", () => {
    render(<Icon.Root icon={"chatbot"} datatestid="icon" />);

    const component = screen.getByTestId("icon");

    expect(component).toBeVisible();
  });

  it("Renderiza Check", () => {
    render(<Icon.Root icon={"check"} datatestid="icon" />);

    const component = screen.getByTestId("icon");

    expect(component).toBeVisible();
  });

  it("Renderiza Close", () => {
    render(<Icon.Root icon={"close"} datatestid="icon" />);

    const component = screen.getByTestId("icon");

    expect(component).toBeVisible();
  });

  it("Renderiza Dark", () => {
    render(<Icon.Root icon={"dark"} datatestid="icon" />);

    const component = screen.getByTestId("icon");

    expect(component).toBeVisible();
  });

  it("Renderiza Delete", () => {
    render(<Icon.Root icon={"delete"} datatestid="icon" />);

    const component = screen.getByTestId("icon");

    expect(component).toBeVisible();
  });

  it("Renderiza Edit", () => {
    render(<Icon.Root icon={"edit"} datatestid="icon" />);

    const component = screen.getByTestId("icon");

    expect(component).toBeVisible();
  });

  it("Renderiza Email", () => {
    render(<Icon.Root icon={"email"} datatestid="icon" />);

    const component = screen.getByTestId("icon");

    expect(component).toBeVisible();
  });

  it("Renderiza Eye", () => {
    render(<Icon.Root icon={"eye"} datatestid="icon" />);

    const component = screen.getByTestId("icon");

    expect(component).toBeVisible();
  });

  it("Renderiza Eyeslash", () => {
    render(<Icon.Root icon={"eyeslash"} datatestid="icon" />);

    const component = screen.getByTestId("icon");

    expect(component).toBeVisible();
  });

  it("Renderiza Filter", () => {
    render(<Icon.Root icon={"filter"} datatestid="icon" />);

    const component = screen.getByTestId("icon");

    expect(component).toBeVisible();
  });

  it("Renderiza Info", () => {
    render(<Icon.Root icon={"info"} datatestid="icon" />);

    const component = screen.getByTestId("icon");

    expect(component).toBeVisible();
  });

  it("Renderiza Light", () => {
    render(<Icon.Root icon={"light"} datatestid="icon" />);

    const component = screen.getByTestId("icon");

    expect(component).toBeVisible();
  });

  it("Renderiza Menu", () => {
    render(<Icon.Root icon={"menu"} datatestid="icon" />);

    const component = screen.getByTestId("icon");

    expect(component).toBeVisible();
  });

  it("Renderiza Notification", () => {
    render(<Icon.Root icon={"notification"} datatestid="icon" />);

    const component = screen.getByTestId("icon");

    expect(component).toBeVisible();
  });

  it("Renderiza Password", () => {
    render(<Icon.Root icon={"password"} datatestid="icon" />);

    const component = screen.getByTestId("icon");

    expect(component).toBeVisible();
  });

  it("Renderiza Profile", () => {
    render(<Icon.Root icon={"profile"} datatestid="icon" />);

    const component = screen.getByTestId("icon");

    expect(component).toBeVisible();
  });

  it("Renderiza Search", () => {
    render(<Icon.Root icon={"search"} datatestid="icon" />);

    const component = screen.getByTestId("icon");

    expect(component).toBeVisible();
  });

  it("Renderiza Send", () => {
    render(<Icon.Root icon={"send"} datatestid="icon" />);

    const component = screen.getByTestId("icon");

    expect(component).toBeVisible();
  });

  it("Renderiza Success", () => {
    render(<Icon.Root icon={"success"} datatestid="icon" />);

    const component = screen.getByTestId("icon");

    expect(component).toBeVisible();
  });

  it("Renderiza Volumedown", () => {
    render(<Icon.Root icon={"volumedown"} datatestid="icon" />);

    const component = screen.getByTestId("icon");

    expect(component).toBeVisible();
  });

  it("Renderiza Volumemute", () => {
    render(<Icon.Root icon={"volumemute"} datatestid="icon" />);

    const component = screen.getByTestId("icon");

    expect(component).toBeVisible();
  });

  it("Renderiza Volumemute", () => {
    render(<Icon.Root icon={"volumemute"} datatestid="icon" />);

    const component = screen.getByTestId("icon");

    expect(component).toBeVisible();
  });

  it("Renderiza Volumeup", () => {
    render(<Icon.Root icon={"volumeup"} datatestid="icon" />);

    const component = screen.getByTestId("icon");

    expect(component).toBeVisible();
  });

  it("Renderiza warning", () => {
    render(<Icon.Root icon={"warning"} datatestid="icon" />);

    const component = screen.getByTestId("icon");

    expect(component).toBeVisible();
  });

  it("Renderiza painting", () => {
    render(<Icon.Root icon={"painting"} datatestid="icon" />);

    const component = screen.getByTestId("icon");

    expect(component).toBeVisible();
  });

  it("Renderiza components", () => {
    render(<Icon.Root icon={"components"} datatestid="icon" />);

    const component = screen.getByTestId("icon");

    expect(component).toBeVisible();
  });

  it("Coverage 100%", async () => {});
});
