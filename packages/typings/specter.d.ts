declare module Specter {
	// The app's settings, there iss one instance
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

	// The app's configurations
    export interface Config {
        rpc: Rpc;
        auth: string;
        explorers: Explorers;
        proxy_url: string;
        only_tor: boolean;
        tor_control_port: string;
        hwi_bridge_url: string;
        uid: string;
        unit: string;
        price_check: boolean;
        alt_rate: number;
        alt_symbol: string;
        price_provider: string;
        validate_merkle_proofs: boolean;
    }

	export interface Key {
		original: string;
		fingerprint: string;
		derivation: string;
		type: string;
		purpose: string;
		xpub: string;
	}

    export interface Rpc {
        autodetect: boolean;
        datadir: string;
        user: string;
        password: string;
        port: string;
        host: string;
        protocol: string;
    }

    export interface Explorers {
        main: string;
        test: string;
        regtest: string;
        signet: string;
    }
}