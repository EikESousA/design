import { ButtonDefault } from "@/components";
import { render, screen, fireEvent } from "@testing-library/react";

describe("<ButtonDefault />", () => {
  it("Renderiza", () => {
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
});
