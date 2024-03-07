import React from "react";
import { IonRow, IonCol, IonText } from "@ionic/react";
import { useFormik } from "formik";
import "./index.css";
import { useDispatch } from "react-redux";
import { AnyAction } from "@reduxjs/toolkit";
import { ThunkDispatch } from "redux-thunk";
import { RootState } from "@redux/store";
import { contactUs } from "@validations/User/contactUs";
import { ContactUs } from "@redux/Users/userSlice";
import CustomInput from "@components/CustomInput";
import CustomButton from "@components/CustomButton";
import { useTranslation } from "react-i18next";

const UserContactUs: React.FC = () => {
	const { t } = useTranslation();
	const dispatch =
		useDispatch<ThunkDispatch<RootState, undefined, AnyAction>>();

	const formik = useFormik({
		initialValues: {
			name: "",
			email: "",
			description: "",
		},
		validationSchema: contactUs,
		onSubmit: (values) => {
			dispatch(ContactUs(values));
		},
	});

	return (
		<div className="mainDev">
			<div className="mainDevCon">
				<IonText>
					<h1 className="hading">{t("Welcome to visita")} </h1>
				</IonText>
				<IonText>
					<h1>{t("Contact Us")}</h1>
				</IonText>
				<form noValidate onSubmit={formik.handleSubmit} className="formClass">
					<IonRow>
						<IonCol size="12" size-sm="6">
							<CustomInput
								label={t("Name")}
								value={formik.values.name}
								onBlur={() => formik.handleBlur("name")}
								onInputChange={formik.handleChange("name")}
								type="text"
								placeholder={t("Enter your name")}
								testid="name-input"
								errorTestId="name-input-error"
								error={formik.touched.name && formik.errors.name}
							/>
						</IonCol>

						<IonCol size="12">
							<CustomInput
								label={t("Email")}
								value={formik.values.email}
								onBlur={() => formik.handleBlur("email")}
								onInputChange={formik.handleChange("email")}
								type="email"
								placeholder={t("Enter your email")}
								testid="email-input"
								errorTestId="email-input-error"
								error={formik.touched.email && formik.errors.email}
							/>
						</IonCol>

						<IonCol size="12">
							<CustomInput
								label={t("Description")}
								value={formik.values.description}
								onBlur={() => formik.handleBlur("description")}
								onInputChange={formik.handleChange("description")}
								type="text"
								placeholder={t("Enter description")}
								testid="description-input"
								errorTestId="description-input-error"
								error={formik.touched.description && formik.errors.description}
							/>
						</IonCol>

						<IonCol size="4">
							<CustomButton
								text={t("Submit")}
								testid="submit-button"
								onClick={() => formik.handleSubmit()}
							/>
						</IonCol>
					</IonRow>
				</form>
			</div>
		</div>
	);
};

export default UserContactUs;
