import { fireEvent, render } from "@testing-library/react";
import CustomInput from ".";

describe("Custom input", () => {
	let inputValue = "";
	const placeholderText = "Enter text";
	const labelText = "Test Label";
	const labelTestId = "label-test-id";
	test("checking custom Id label and input and error id ", () => {
		const inputId = "custom-input-id";
		const errorTestId = "error-test-id";
		const { getByTestId } = render(
			<CustomInput
				type="text"
				label={labelText}
				placeholder={placeholderText}
				value={inputValue}
				onInputChange={(value) => {
					inputValue = value;
				}}
				testid={inputId}
				error={true}
				errorTestId={errorTestId}
			/>,
		);
		getByTestId(labelTestId);
		getByTestId(inputId);
		getByTestId(errorTestId);
	});

	test("rending input label and placeholder and type and value ", () => {
		const { getByPlaceholderText, getByText } = render(
			<CustomInput
				type="text"
				label={labelText}
				placeholder={placeholderText}
				value={inputValue}
				onInputChange={(value) => {
					inputValue = value;
				}}
			/>,
		);
		getByText(labelText);
		const inputElement = getByPlaceholderText(placeholderText);
		expect(inputElement.getAttribute("type")).toBe("text"); // input type
		expect(inputElement.getAttribute("value")).toBe(""); // input value
		fireEvent.change(inputElement, { target: { value: "" } });
		expect(inputValue).toBe("");
	});
});
