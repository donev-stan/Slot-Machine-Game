import { inputElements, errorElements } from "./elements.js";

const verifyInputData = () => {
	let isError = false;

	resetErrorElements();

	const name = inputElements.input_name().value;
	const total_money = Number(inputElements.input_total_money().value);
	const spin_money = Number(inputElements.input_spin_money().value);

	if (!name) {
		errorElements.error_name().textContent = "Invalid Name!";
		isError = true;
	}

	if (!total_money || total_money < 10) {
		errorElements.error_total_money().textContent = "Invalid Amount!";
		isError = true;
	}

	if (!spin_money || spin_money > total_money || spin_money < 0) {
		errorElements.error_spin_money().textContent = "Invalid Amount!";
		isError = true;
	}

	if (isError) return { status: false };

	return {
		status: true,
		data: {
			name,
			total_money,
			spin_money,
		},
	};
};

const resetErrorElements = () => {
	errorElements.error_name().textContent = null;
	errorElements.error_total_money().textContent = null;
	errorElements.error_spin_money().textContent = null;
};

export default verifyInputData;
