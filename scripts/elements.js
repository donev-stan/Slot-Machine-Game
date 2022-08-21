const mainElements = {
	start_panel: () => document.querySelector(".start-panel"),
	play_panel: () => document.querySelector(".play-panel"),
	exit_modal: () => document.querySelector(".modal-exit"),
	endGame_modal: () => document.querySelector(".modal-endGame"),
};

const inputElements = {
	input_name: () => document.getElementById("name"),
	input_total_money: () => document.getElementById("total-money"),
	input_spin_money: () => document.getElementById("spin-money-start"),
};

const errorElements = {
	error_name: () => document.querySelector(".error-name"),
	error_total_money: () => document.querySelector(".error-total-money"),
	error_spin_money: () => document.querySelector(".error-spin-money"),
};

const playPanelElements = {
	total_money_result: () => document.getElementById("total-money-result"),
	input_spin_money: () => document.getElementById("spin-money-input"),
	spin_result: () => document.querySelector(".spin-result"),
	error_display: () => document.querySelector(".game-errors"),
	all_in_btn: () => document.getElementById("all-in-btn"),
};

const buttons = {
	startBtn: () => document.getElementById("start-game-btn"),
	exitBtn: () => document.getElementById("exit-game-btn"),
	spinBtn: () => document.getElementById("spin-btn"),
};

const exitModalElements = {
	name: () => document.getElementById("span-name-exit"),
	total_money: () => document.getElementById("span-total-money"),
	total_bet: () => document.getElementById("span-total-bet"),
	spin_count: () => document.getElementById("span-count-of-spins"),
	exitBtn: () => document.getElementById("exit-modal-exit-btn"),
	backBtn: () => document.getElementById("exit-modal-back-to-game-btn"),
};

const endGameModalElements = {
	total_money_input: () => document.getElementById("total-money-modal"),
	exit_game_btn: () => document.getElementById("endGame-modal-exit-btn"),
	enter_again_btn: () =>
		document.getElementById("endGame-modal-enter-again-btn"),
};

export {
	mainElements,
	inputElements,
	errorElements,
	playPanelElements,
	buttons,
	exitModalElements,
	endGameModalElements,
};
