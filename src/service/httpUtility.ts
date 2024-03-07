import {
	DeleteHttpRequestResponse,
	GetHttpRequestResponse,
	PatchHttpRequestResponse,
	PostHttpRequestResponse,
	PutHttpRequestResponse,
} from "@interfaces/httpUtility";

export const GET = async (
	url: string,
	id?: string,
	headers: Record<string, string> = {},
	otherProperties: Record<string, string> = {},
): Promise<GetHttpRequestResponse> => {
	const apiUrl = id ? `${url}/${id}` : url;

	const response = await fetch(apiUrl, {
		method: "GET",
		headers: {
			...headers,
		},
		...otherProperties,
	});
	if (!response.ok) {
		const errorBody = await response.json();
		const errorMessage = errorBody.message;
		return {
			status: false,
			error: errorMessage,
		};
	}
	const responseData = await response.json();

	return {
		status: true,
		data: responseData,
	};
};

export const POST = async (
	url: string,
	payload: Record<string, string>,
	headers: Record<string, string> = {},
	otherProperties: Record<string, string> = {},
): Promise<PostHttpRequestResponse> => {
	const response = await fetch(url, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			...headers,
		},
		body: JSON.stringify(payload),
		...otherProperties,
	});
	if (!response.ok) {
		const errorBody = await response.json();
		const errorMessage = errorBody.message;
		return {
			status: false,
			error: errorMessage,
		};
	}
	return {
		status: true,
		data: await response.json(),
	};
};

export const PUT = async (
	url: string,
	id: string,
	payload: Record<string, string>,
	headers: Record<string, string> = {},
	otherProperties: Record<string, string> = {},
): Promise<PutHttpRequestResponse> => {
	const response = await fetch(`${url}/${id}`, {
		method: "PUT",
		headers: {
			"Content-Type": "application/json",
			...headers,
		},
		...otherProperties,

		body: JSON.stringify(payload),
	});
	if (!response.ok) {
		const errorBody = await response.json();
		const errorMessage = errorBody.message;
		return {
			status: false,
			error: errorMessage,
		};
	}
	return {
		status: true,
		data: await response.json(),
	};
};

export const PATCH = async (
	url: string,
	payload: Record<string, string>,
	headers: Record<string, string> = {},
	otherProperties: Record<string, string> = {},
): Promise<PatchHttpRequestResponse> => {
	const response = await fetch(url, {
		method: "PATCH",
		headers: {
			"Content-Type": "application/json",
			...headers,
		},
		body: JSON.stringify(payload),
		...otherProperties,
	});
	if (!response.ok) {
		const errorBody = await response.json();
		const errorMessage = errorBody.message;
		return {
			status: false,
			error: errorMessage,
		};
	}
	return {
		status: true,
		data: await response.json(),
	};
};

export const DELETE = async (
	url: string,
	id: string,
	headers: Record<string, string> = {},
	otherProperties: Record<string, string> = {},
): Promise<DeleteHttpRequestResponse> => {
	const response = await fetch(`${url}/${id}`, {
		method: "DELETE",
		headers: {
			"Content-Type": "application/json",
			...headers,
		},
		...otherProperties,
	});
	if (!response.ok) {
		const errorBody = await response.json();
		const errorMessage = errorBody.message;
		return {
			status: false,
			error: errorMessage,
		};
	}
	return {
		status: true,
	};
};
