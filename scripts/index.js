import {
	mainElements,
	buttons,
	exitModalElements,
	playPanelElements,
	endGameModalElements,
} from "./elements.js";

import verifyInputData from "./inputData.js";
import spinMachine from "./spinMachine.js";

import globalStats from "./globalVars.js";

import { updateRenderTotalMoney, toggleEndGameModal } from "./renderVisuals.js";

(() => {
	buttons.startBtn().addEventListener("click", () => startGame());
	buttons.exitBtn().addEventListener("click", () => toggleExitModal("show"));
	buttons.spinBtn().addEventListener("click", () => spinMachine());

	exitModalElements.exitBtn().addEventListener("click", () => {
		switchPanels("exit");
		toggleExitModal("hide");
	});

	exitModalElements.backBtn().addEventListener("click", () => {
		toggleExitModal("hide");
	});

	playPanelElements.all_in_btn().addEventListener("click", () => {
		playPanelElements.input_spin_money().value = globalStats.total_money;
	});

	endGameModalElements.exit_game_btn().addEventListener("click", () => {
		switchPanels("exit");
		toggleEndGameModal("none");
	});

	endGameModalElements.enter_again_btn().addEventListener("click", () => {
		globalStats.total_money = Number(
			endGameModalElements.total_money_input().value
		);

		playPanelElements.input_spin_money().value = (
			(10 / 100) *
			globalStats.total_money
		).toFixed(0);

		updateRenderTotalMoney(globalStats.total_money);

		toggleEndGameModal("none");
	});
})();

const toggleExitModal = (toggle) => {
	if (toggle === "show") {
		exitModalElements.name().innerText = globalStats.name;
		exitModalElements.total_money().innerText = globalStats.total_money;
		exitModalElements.total_bet().innerText = globalStats.total_bet;
		exitModalElements.spin_count().innerText = globalStats.spin_count;

		mainElements.exit_modal().style.display = "flex";
	} else if (toggle === "hide") {
		mainElements.exit_modal().style.display = "none";
	}
};

const startGame = () => {
	const { status, data } = verifyInputData();
	if (!status) return;

	setInitialGlobalStats(data);

	spinMachine();

	switchPanels("start");
};

const setInitialGlobalStats = ({ name, total_money, spin_money }) => {
	globalStats.name = name;
	globalStats.total_money = total_money;

	globalStats.spin_money = spin_money;
	playPanelElements.input_spin_money().value = globalStats.spin_money;
};

const switchPanels = (swtch) => {
	if (swtch === "start") {
		mainElements.start_panel().style.display = "none";
		mainElements.play_panel().style.display = "flex";
	} else if (swtch === "exit") {
		mainElements.start_panel().style.display = "flex";
		mainElements.play_panel().style.display = "none";
	}
};
