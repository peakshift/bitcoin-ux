declare module Specter {
	// The apps settings, there iss one instance
    export interface AppSettings {
		mode: "specterd" | "hwibridge";
        specterURL: string;
        tor: boolean;
        proxyURL: string;
        specterdVersion: string;
        specterdHash: string;
        specterdCLIArgs: string;
        versionInitialized: string;
    }

    // Device config, there may be multiple instances
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
