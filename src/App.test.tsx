import React from "react";
import Home from "@pages/Home";
// import "@testing-library/jest-dom/extend-expect";

import { render } from "@testing-library/react";
describe(" Testing------ ", () => {
	it("checking header title", () => {
		const { getAllByText } = render(<Home />);
		const loginTitles = getAllByText("Hello Home");
		expect(loginTitles).toHaveLength(1);
	});
});
