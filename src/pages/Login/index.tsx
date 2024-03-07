import {
	IonCol,
	IonContent,
	IonGrid,
	IonPage,
	IonRow,
	IonButton,
} from "@ionic/react";
import { useFormik } from "formik";
import React, { useState, useEffect } from "react";
import "./index.css";
import CustomInput from "@components/CustomInput";
import CustomButton from "@components/CustomButton";
import { PushNotifications, Token } from "@capacitor/push-notifications";
import { Capacitor } from "@capacitor/core";
import { setAuthToken } from "@helpers/constants";
import Footer from "@components/Footer";
import AuthHeader from "@components/AuthHeader";
import { Toast } from "@capacitor/toast";
import { auth } from "../../config/firebaseConfig";
import {
	GoogleAuthProvider,
	signInWithEmailAndPassword,
	onAuthStateChanged,
	signInWithPopup,
	User,
	OAuthCredential,
} from "@firebase/auth";
import SocialSharingButton from "@components/SocialSharingButton";
import { logoGoogle } from "ionicons/icons";

interface UserInfo {
	displayName: string;
	email: string;
	// Add other properties if present in your JSON data
}

const Login: React.FC = () => {
	const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
	const [anomusId, setAnomusId] = useState<string>("");
	// const dispatch =
	// 	useDispatch<ThunkDispatch<RootState, undefined, AnyAction>>();

	const formik = useFormik({
		initialValues: {
			email: "",
			password: "",
		},
		validationSchema: "",
		onSubmit: async (values) => {
			signInWithEmailAndPassword(auth, values?.email, values?.password)
				.then((userCredential) => {
					const user = userCredential.user;
					console.log("user login", user);
					showToast("login success");
				})
				.catch((error) => {
					console.log("error", error);
					showToast("Fairbase error");
				});
		},
	});

	useEffect(() => {
		if (Capacitor.getPlatform() !== "web") {
			PushNotifications.checkPermissions().then((res) => {
				if (res.receive !== "granted") {
					PushNotifications.requestPermissions().then((res) => {
						if (res.receive === "denied") {
							alert("Push Notification permission denied");
						} else {
							alert("Push Notification permission granted");
							register();
						}
					});
				} else {
					register();
				}
			});
		}
	}, []);

	const register = () => {
		if (Capacitor.getPlatform() !== "web") {
			// Register with Apple / Google to receive push via APNS/FCM
			PushNotifications.register();

			// On success, we should be able to receive notifications
			PushNotifications.addListener("registration", (token: Token) => {
				console.log("Token-----", token?.value);
				showToast("Push registration success");
			});

			// Some issue with our setup and push will not work
			PushNotifications.addListener("registrationError", (error: any) => {
				showToast(JSON.stringify(error));
			});

			// Show us the notification payload if the app is open on our device
			PushNotifications.addListener("pushNotificationReceived", () => {
				// setnotifications(notifications => [...notifications, { id: notification.id, title: notification.title, body: notification.body, type: 'foreground' }])
			});

			// Method called when tapping on a notification
			PushNotifications.addListener("pushNotificationActionPerformed", () => {
				// setnotifications(notifications => [...notifications, { id: notification.notification.data.id, title: notification.notification.data.title, body: notification.notification.data.body, type: 'action' }])
			});
		}
	};

	const showToast = async (msg: string) => {
		await Toast.show({
			text: msg,
		});
	};

	// google login
	const provider = new GoogleAuthProvider();
	const handleGoogle = async () => {
		signInWithPopup(auth, provider).then((result) => {
			const credential: OAuthCredential | null =
				GoogleAuthProvider.credentialFromResult(result);
			if (credential !== null) {
				const token = credential.accessToken;
				setAuthToken(token);
				const user = result.user as User; // Cast user as User type
				const displayName = user.displayName ? user.displayName : "Unknown";
				const email = user.email ? user.email : "Unknown Email";
				setUserInfo({
					displayName: displayName,
					email: email,
				});
				console.log("user info - google--1----", user);
				// ...
			} else {
				// Handle case where credential is null
				console.error("Credential is null  ");
			}
		});
	};

	// handleAnonymous
	const handleAnonymous = async () => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				// User is signed in, see docs for a list of available properties
				// https://firebase.google.com/docs/reference/js/auth.user
				const uid = user.uid;
				setAnomusId(uid);
				console.log("uid-----", uid);
			} else {
				console.log("fail-----");
			}
		});
	};

	return (
		<IonPage>
			<AuthHeader
				title="Login"
				showBackButton={false}
				showRightIcons
				rightIconAction={() => console.log("Right icon clicked --")}
			/>

			<IonContent>
				<form onSubmit={formik.handleSubmit} className="ion-content">
					<IonGrid>
						<IonRow className="ion-justify-content-center ion-align-items-center">
							<IonCol size="12" size-md="6">
								<CustomInput
									label="Email"
									value={formik.values.email}
									onBlur={() => formik.handleBlur("email")}
									onInputChange={formik.handleChange("email")}
									type="email"
									placeholder="Enter your email"
									testid="email-input"
									errorTestId="email-input-error"
									error={formik.touched.email && formik.errors.email}
								/>
								<CustomInput
									label="Password"
									value={formik.values.password}
									onBlur={() => formik.handleBlur("password")}
									onInputChange={formik.handleChange("password")}
									type="password"
									testid="password-input"
									placeholder="Enter your password"
									errorTestId="password-input-error"
									error={formik.touched.password && formik.errors.password}
								/>
								<br />
								<CustomButton
									text="Login"
									onClick={() => formik.handleSubmit()}
								/>
							</IonCol>
						</IonRow>
						<IonRow className="ion-justify-content-center ion-align-items-center">
							<IonCol size="12" size-md="6">
								<IonRow className="ion-text-center">
									<IonCol>
										<SocialSharingButton
											onClick={handleGoogle}
											icon={logoGoogle}
											size="large"
										/>
									</IonCol>
								</IonRow>
							</IonCol>
						</IonRow>
						<IonRow className="ion-text-center">
							<IonCol>
								<h4>User name: {userInfo?.displayName}</h4>
								<h4>User Email: {userInfo?.email}</h4>
							</IonCol>
						</IonRow>
						<IonRow className="ion-text-center">
							<IonCol>
								<IonButton onClick={handleAnonymous}>Anonymous Login</IonButton>
							</IonCol>
						</IonRow>
						<IonRow className="ion-text-center">
							<IonCol>
								<h4>Anonymous ID : {anomusId}</h4>
							</IonCol>
						</IonRow>
					</IonGrid>
				</form>
			</IonContent>
			<Footer />
		</IonPage>
	);
};

export default Login;
