import * as yup from "yup";

export const contactUs = yup.object({
	name: yup.string().required("Name is Required"),
	email: yup
		.string()
		.matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, "Enter a valid email")
		.email("Enter a valid email")
		.required("Email is required"),
	description: yup.string().required("Description is Required"),
});
