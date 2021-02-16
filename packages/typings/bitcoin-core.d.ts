declare module BitcoinCore {
	export interface Conf {
		// Networks
		testnet: boolean;
		regtest: boolean;
		// Sections
		main: Configs;
		test: Configs;
	}

	export interface Configs {
		proxy: string;
		bind: string;
		whitebind: string;
		addnode: string;
		connect: string;
		listen: number;
		port: number;
		maxconnections: number;
		server: number;
		rpcbind: string;
		rpcauth: string;
		rpcuser: string;
		rpcpassword: string;
		rpcclienttimeout: number;
		rpcallowip: string;
		rpcport: number;
		rpcconnect: string;
		wallet: string;
		txconfirmtarget: number;
		paytxfee: number;
		keypool: number;
		prune: number;
		// User interface options
		min: number;
		minimizetotray: number;
	}
}
