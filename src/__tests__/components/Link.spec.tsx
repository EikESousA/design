import * as router from "react-router-dom";

import { render, screen, fireEvent } from "@testing-library/react";

import { Link } from "@/components";

const navigate = jest.fn();

beforeEach(() => {
  jest.spyOn(router, "useNavigate").mockImplementation(() => navigate);
});

describe("<Link />", () => {
  it("Renderiza com label", () => {
    render(<Link.Root label="Link" url="" datatestid="link" />);

    const component = screen.queryByText("Link");

    expect(component).toBeVisible();
  });

  it("Renderiza com tamanhos", () => {
    render(
      <>
        <Link.Root label="Link" url="" size="sm" datatestid="link-sm" />
        <Link.Root label="Link" url="" size="md" datatestid="link-md" />
        <Link.Root label="Link" url="" size="lg" datatestid="link-lg" />
        <Link.Root label="Link" url="" size="xl" datatestid="link-xl" />
      </>,
    );

    const componentSM = screen.getByTestId("link-sm");
    const componentMD = screen.getByTestId("link-md");
    const componentLG = screen.getByTestId("link-lg");
    const componentXL = screen.getByTestId("link-xl");

    expect(componentSM).toBeVisible();
    expect(componentSM).toHaveClass("sm");

    expect(componentMD).toBeVisible();
    expect(componentMD).toHaveClass("md");

    expect(componentLG).toBeVisible();
    expect(componentLG).toHaveClass("lg");

    expect(componentXL).toBeVisible();
    expect(componentXL).toHaveClass("xl");
  });

  it("Renderiza com tamanho completo", () => {
    render(<Link.Root label="Link" url="" full datatestid="link" />);

    const component = screen.getByTestId("link");

    expect(component).toBeVisible();
    expect(component).toHaveClass("full");
  });

  it("Renderiza desabilitado", () => {
    render(<Link.Root label="Link" url="" disabled datatestid="link" />);

    const component = screen.getByTestId("link");

    expect(component).toBeVisible();
    expect(component).toBeDisabled();
  });

  it("Renderiza com click", () => {
    render(<Link.Root label="Link" url="/test" datatestid="link" />);

    const component = screen.getByTestId("link");

    expect(component).toBeVisible();

    fireEvent.click(component);

    expect(navigate).toHaveBeenCalledWith("/test");
  });

  it("Renderiza com click em nova aba", () => {
    const mockPathname = jest.fn();

    Object.defineProperty(window, "location", {
      value: {
        get pathname() {
          return mockPathname();
        },
      },
    });

    const spyWindowOpen = jest.spyOn(window, "open");
    spyWindowOpen.mockImplementation(jest.fn());

    render(<Link.Root label="Link" url="/test" newTab datatestid="link" />);

    const component = screen.getByTestId("link");

    expect(component).toBeVisible();

    mockPathname.mockReturnValue("some");

    fireEvent.click(component);

    expect(spyWindowOpen).toHaveBeenCalledTimes(1);
  });
});
