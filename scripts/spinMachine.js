import globalStats from "./globalVars.js";
import { playPanelElements } from "./elements.js";
import {
	updateRenderTotalMoney,
	toggleError,
	playWinningsLoader,
	toggleSpinBtn,
	clearSlots,
	displayWinnings,
	toggleEndGameModal,
	toggleExitBtn,
	toggleAllInBtn,
} from "./renderVisuals.js";

const spinMachine = () => {
	const { status } = updateGlobalStats();
	if (!status) return;

	toggleError(null);
	updateRenderTotalMoney(globalStats.total_money);

	clearSlots();
	toggleSpinBtn();
	toggleExitBtn();
	toggleAllInBtn();
	playWinningsLoader();

	const spin = [];
	let winnings = 0;

	// Randomize Spin
	for (let i = 0; i < 5; i++) spin[i] = generateRandomNumber();

	// Calculate Winnings
	calculate_winnings: {
		const count = spin.reduce((acc, value) => {
			return { ...acc, [value]: (acc[value] || 0) + 1 };
		}, {});
		const repeats = Math.max(...Object.values(count));

		if (repeats === 5) winnings += globalStats.spin_money * 25;
		if (repeats === 4) winnings += globalStats.spin_money * 10;

		if (repeats === 3) {
			const nextToEachOther = checkNextToEachOther(spin);

			if (nextToEachOther) winnings += globalStats.spin_money * 5;
			else winnings += globalStats.spin_money * 3;
		}

		globalStats.total_money += winnings;
	}

	// Render Results
	render_results: {
		let i = 0;
		const slots = document.querySelectorAll(".slot");

		const displaySymbols = () => {
			setTimeout(() => {
				slots[i].innerHTML = symbolsMap[spin[i]];
				i++;
				if (i < 5) displaySymbols();
				else displayStats();
			}, (i * 550) / i);
		};
		displaySymbols();

		const displayStats = () => {
			setTimeout(() => {
				updateRenderTotalMoney(globalStats.total_money);
				displayWinnings(winnings);
				toggleSpinBtn();
				toggleExitBtn();
				toggleAllInBtn();

				if (globalStats.total_money === 0) {
					toggleEndGameModal("flex");
				}
			}, 1000);
		};
	}
};

const updateGlobalStats = () => {
	const inputSpinMoney = Number(playPanelElements.input_spin_money().value);

	if (
		!inputSpinMoney ||
		inputSpinMoney > globalStats.total_money ||
		inputSpinMoney < 0
	) {
		toggleError(`Invalid Bet! Please enter a valid amount!`);
		return { status: false };
	}

	globalStats.spin_money = inputSpinMoney;
	globalStats.total_money -= globalStats.spin_money;
	globalStats.spin_count += 1;
	globalStats.total_bet += Number(globalStats.spin_money);

	return { status: true };
};

const generateRandomNumber = (min = 0, max = 5) => {
	return Math.floor(Math.random() * (max - min + 1) + min);
};

const checkNextToEachOther = (array) => {
	for (let i = 0; i < 3; i++)
		if ((array[i] === array[i + 1]) === array[i + 2]) return true;

	return false;
};

const symbolsMap = {
	0: `<img src="./images/casino.png" class="symbol">`,
	1: `<img src="./images/apple.png" class="symbol">`,
	2: `<img src="./images/grape.png" class="symbol">`,
	3: `<img src="./images/cherry.png" class="symbol">`,
	4: `<img src="./images/lemon.png" class="symbol">`,
	5: `<img src="./images/watermelon.png" class="symbol">`,
};

export default spinMachine;
