import * as bolt11 from "bolt11";
import { Invoice, encode } from "@lntools/invoice";

/**
 * Comparing bolt11 libraries
 *
 * https://github.com/bitcoinjs/bolt11/blob/master/payreq.d.ts
 * https://github.com/altangent/lntools/tree/master/packages/invoice#api
 *
 * Takeaway so far:
 * - Class instances for invoices nice
 * - @lntools/invoice seems like a higher level api
 * - @lntools/invoice abstracts away tags, good for speed, bad for understanding whats happening under the hood
 */

const PRIVATE_KEY =
	"e126f68f7eafcc8b74f54d269fe206be715000f94dac067d1c04a8ca3b2db734";

const mock: bolt11.PaymentRequestObject = {
	satoshis: 2000,
	timestamp: 1592154305,
	tags: [
		{
			tagName: "purpose_commit_hash",
			data: "3925b6f67e2c340036ed12093dd44e0368df1b6ea26c53dbe4811f58fd5db8c1",
		},
		{
			tagName: "payment_hash",
			data: "0001020304050607080900010203040506070809000102030405060708090102",
		},
		{
			tagName: "fallback_address",
			data: {
				code: 0,
				address: "bc1qw508d6qejxtdg4y5r3zarvary0c5xw7kv8f3t4",
				addressHash: "751e76e8199196d454941c45d1b3a323f1433bd6",
			},
		},
	],
};

// const mock2: bolt11.PaymentRequestObject = {
// 	destination: "...",
// }

test("generate lightning invoice", () => {
	let new_invoice = new Invoice();
	new_invoice.network = "bc";
	new_invoice.valueSat = "2500000";
	new_invoice.timestamp = 1496314658;
	new_invoice.paymentHash = Buffer.from(
		"0001020304050607080900010203040506070809000102030405060708090102",
		"hex"
	);
	new_invoice.shortDesc = "coffee beans";
	expect(new_invoice.paymentHash.length).toBe(32);
	let encoded_invoice = encode(new_invoice, Buffer.from(PRIVATE_KEY, "hex"));
	expect(
		"lnbc25m1pvjluezpp5qqqsyqcyq5rqwzqfqqqsyqcyq5rqwzqfqqqsyqcyq5rqwzqfqypqdq5vdhkven9v5sxyetpdeessp5zyg3zyg3zyg3zyg3zyg3zyg3zyg3zyg3zyg3zyg3zyg3zyg3zygs9q5sqqqqqqqqqqqqqqqpqsq67gye39hfg3zd8rgc80k32tvy9xk2xunwm5lzexnvpx6fd77en8qaq424dxgt56cag2dpt359k3ssyhetktkpqh24jqnjyw6uqd08sgptq44qu"
	).toBe(encoded_invoice);
	// const new_invoice = bolt11.encode(mock);
	// console.log(new_invoice);
});

test("parse lightning invoice", () => {
	const encoded_invoice =
		"lnbc25m1pvjluezpp5qqqsyqcyq5rqwzqfqqqsyqcyq5rqwzqfqqqsyqcyq5rqwzqfqypqdq5vdhkven9v5sxyetpdeessp5zyg3zyg3zyg3zyg3zyg3zyg3zyg3zyg3zyg3zyg3zyg3zyg3zygs9q5sqqqqqqqqqqqqqqqpqsq67gye39hfg3zd8rgc80k32tvy9xk2xunwm5lzexnvpx6fd77en8qaq424dxgt56cag2dpt359k3ssyhetktkpqh24jqnjyw6uqd08sgptq44qu";
	const decoded_invoice = bolt11.decode(encoded_invoice);
	expect(decoded_invoice.coinType).toBe("bitcoin");
	expect(decoded_invoice.satoshis).toBe(2500000); // https://www.bitcoindenominations.org
	expect(decoded_invoice.timestamp).toBe(1496314658);
	expect(decoded_invoice.timeExpireDate).toBe(1496314658);
	expect(decoded_invoice.signature).toBe(
		"d7904cc4b74a22269c68c1df68a96c214d651b9376e9f164d3604da4b7deccce0e82aaab4c85d358ea14d0ae342da30812f95d976082eaac813911dae01af3c1"
	);
	if (decoded_invoice.tags) {
		let payment_hash = decoded_invoice.tags.filter(
			(tag) => tag.tagName === "payment_hash"
		); // should only be one payment_hash tag
		if (payment_hash)
			expect(payment_hash[0].data).toBe(
				"0001020304050607080900010203040506070809000102030405060708090102"
			);

		let description = decoded_invoice.tags.filter(
			(tag) => tag.tagName === "description"
		); // should only be one payment_hash tag
		if (description) expect(description[0].data).toBe("coffee beans");
	}
});
