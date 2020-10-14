import bip39 from "bip39";
import bip32 from "bip32";

test("generate mnenomic", async () => {
	// entropy
	const arr = new Uint8Array(32);
	const entropy = Buffer.from(arr);
	console.log(entropy, entropy.length)
	// mnemonic
	const mnemonic = bip39.entropyToMnemonic(entropy);
	console.log(mnemonic)
	// seed
	const seed = bip39.mnemonicToSeed(mnemonic);
	console.log(seed);
});
