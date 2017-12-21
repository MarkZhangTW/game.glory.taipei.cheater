let delayInterval;
let delayFunction = event => {
	clearInterval(delayInterval);
	match = event.code.match(/Digit(\d)/);
	if (match) {
		division = Number(match[1]);
		if (division == 0) return;
		else console.log(division);
		delayInterval = setInterval(() => { for (let i = 0; i < 1e8; i += division); }, 0);
    }
};
document.addEventListener('keypress', delayFunction);
