declare module Specter {
	export interface Device {
		name: string;
		alias: string;
		type: string;
		keys: Key[];
		fullpath: string;
	}

	export interface Key {
		original: string;
		fingerprint: string;
		derivation: string;
		type: string;
		purpose: string;
		xpub: string;
	}
}
