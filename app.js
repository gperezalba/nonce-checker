const URL = "https://connect.pichain.io";
const MANUEL1 = "0x0D57e9D8b34711DFf07F3F942A527f761a4258EE";
const MANUEL2 = "0xdB60372eFd82dD7D8547359c64286eD3ACe96A68";
const MANUEL3 = "0x1F0E9D32370Cc0972043ae01D995b38E2eA09C99";
const MANUEL4 = "0xF2e68393045ef39eb2d76e4DAc10a990aA0A8988";
const MANUEL5 = "0x4Ad45EC2831387d802AE1589f3b427fd1F547d0f";

const JOHAN1 = "0x68F6cFbEFeE3cf873A3f1F48B6AF8228aa707172";
const JOHAN2 = "0x05B2f66f154C3d3011a49EAB035b890b81b01814";
const JOHAN3 = "0xdfb33ca5e1d8888A2A739Aca58df75022836dd17";
const JOHAN4 = "0x8C66D25aFB24fadA873CD31c10cF28eD4bE5796f";
const JOHAN5 = "0x97B732Dd87A52227971E93D6e5861568faEE008c";

const GUILLE1 = "0x9Ee9a601CE31a1949cD05F16508288bDF42E8172";
const GUILLE2 = "0xaA000B6792B9Fc8a50f0e5890E8e32CBeCf9966c";
const GUILLE3 = "0x41B2FCa6F200e9cb2E0D36f2B0628C12239e7691";
const GUILLE4 = "0x61b5B7B6b49144BB6cc956863bAcbE45BbE47D83";
const GUILLE5 = "0x8D3ad4692de3e5EEE5897691654f9e7127EC6472";

async function updateInfo() {
	document.getElementById(MANUEL1).innerHTML = await getTransactionCount(MANUEL1);
	document.getElementById(MANUEL2).innerHTML = await getTransactionCount(MANUEL2);
	document.getElementById(MANUEL3).innerHTML = await getTransactionCount(MANUEL3);
	document.getElementById(MANUEL4).innerHTML = await getTransactionCount(MANUEL4);
	document.getElementById(MANUEL5).innerHTML = await getTransactionCount(MANUEL5);

	document.getElementById(JOHAN1).innerHTML = await getTransactionCount(JOHAN1);
	document.getElementById(JOHAN2).innerHTML = await getTransactionCount(JOHAN2);
	document.getElementById(JOHAN3).innerHTML = await getTransactionCount(JOHAN3);
	document.getElementById(JOHAN4).innerHTML = await getTransactionCount(JOHAN4);
	document.getElementById(JOHAN5).innerHTML = await getTransactionCount(JOHAN5);

	document.getElementById(GUILLE1).innerHTML = await getTransactionCount(GUILLE1);
	document.getElementById(GUILLE2).innerHTML = await getTransactionCount(GUILLE2);
	document.getElementById(GUILLE3).innerHTML = await getTransactionCount(GUILLE3);
	document.getElementById(GUILLE4).innerHTML = await getTransactionCount(GUILLE4);
	document.getElementById(GUILLE5).innerHTML = await getTransactionCount(GUILLE5);
}

async function getTransactionCount(wallet) {
	let provider = getProvider();
	let nonce = await provider.getTransactionCount(wallet);
	return nonce;
}

function getProvider() {
	return new ethers.providers.JsonRpcProvider(URL);
}
