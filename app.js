const URL = "https://connect.pichain.io";
const MANUEL1 = "0x95b9bbC3A8c0dE0695d727c3B79b44f3721232c9";

async function updateInfo() {
	document.getElementById(MANUEL1).innerHTML = await getTransactionCount(MANUEL1)
}

async function getTransactionCount(wallet) {
	let provider = getProvider();
	let nonce = await provider.getTransactionCount(wallet);
	return nonce;
}

function getProvider() {
	return new ethers.providers.JsonRpcProvider(URL);
}
