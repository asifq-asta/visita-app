import React from "react";
import "./index.css";

interface ErrorComponentProps {
	message: string;
	testid?: string;
}

const ErrorComponent: React.FC<ErrorComponentProps> = ({ message, testid }) => (
	<div className="error-container">
		<div className="error-message" data-testid={testid}>
			{message}
		</div>
	</div>
);

export default ErrorComponent;
