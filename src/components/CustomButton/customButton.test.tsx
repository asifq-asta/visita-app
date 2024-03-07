import { fireEvent, render } from "@testing-library/react";
import CustomButton from ".";

describe("Custom button----", () => {
	it("button with text  ", () => {
		const buttonText = "Button name";
		const { getByText } = render(
			<CustomButton onClick={() => {}} text={buttonText} />,
		);
		getByText("Button name"); // button label
	});

	it("calls onClick handler when button is clicked", () => {
		let onClickCalled = false;
		const { getByTestId } = render(
			<CustomButton
				onClick={() => {
					onClickCalled = true;
				}}
				text="Button name"
				testid="custom-button"
			/>,
		);
		// click on the button
		const buttonElement = getByTestId("custom-button");
		fireEvent.click(buttonElement);
		// Check if onClick was called
		expect(onClickCalled).toBe(true);
	});
});
