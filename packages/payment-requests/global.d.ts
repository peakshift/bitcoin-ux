export interface IPaymentRequest {
	encode(
		address: string,
		amount: string,
		label?: string,
		message?: string,
		payjoin?: {
			pj: string,
			v: string,
			pjos: string		
		},
		lightning?: string,
		options?: {}
	): string;
	decode();
	optimize();
}