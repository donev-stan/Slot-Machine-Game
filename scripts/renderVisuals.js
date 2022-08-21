import { playPanelElements, buttons, mainElements } from "./elements.js";

const updateRenderTotalMoney = (newAmount) => {
	playPanelElements.total_money_result().textContent = newAmount;
};

const toggleError = (msg) => {
	playPanelElements.error_display().innerText = msg;
};

const playWinningsLoader = () => {
	playPanelElements.spin_result().innerHTML = `<img src="./images/loader.png">`;
};

const toggleSpinBtn = () => {
	buttons.spinBtn().disabled = !buttons.spinBtn().disabled;
};

const toggleExitBtn = () => {
	buttons.exitBtn().disabled = !buttons.exitBtn().disabled;
};

const clearSlots = () => {
	const slots = document.querySelectorAll(".slot");
	slots.forEach((slot) => (slot.textContent = null));
};

const displayWinnings = (winnings) => {
	playPanelElements.spin_result().textContent = `Winnings: ${winnings}$`;
};

const toggleEndGameModal = (toggle) => {
	mainElements.endGame_modal().style.display = toggle;
};

const toggleAllInBtn = () => {
	playPanelElements.all_in_btn().disabled =
		!playPanelElements.all_in_btn().disabled;
};

export {
	updateRenderTotalMoney,
	toggleError,
	playWinningsLoader,
	toggleSpinBtn,
	clearSlots,
	displayWinnings,
	toggleEndGameModal,
	toggleExitBtn,
	toggleAllInBtn,
};
