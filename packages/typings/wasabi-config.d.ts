declare module WasabiWallet {
	export interface Config {
		Network: string;
		MainNetBackendUriV3: string;
		TestNetBackendUriV3: string;
		MainNetFallbackBackendUri: string;
		TestNetFallbackBackendUri: string;
		RegTestBackendUriV3: string;
		UseTor: boolean;
		StartLocalBitcoinCoreOnStartup: boolean;
		StopLocalBitcoinCoreOnShutdown: boolean;
		LocalBitcoinCoreDataDir: string;
		TorSocks5EndPoint: string;
		MainNetBitcoinP2pEndPoint: string;
		TestNetBitcoinP2pEndPoint: string;
		RegTestBitcoinP2pEndPoint: string;
		JsonRpcServerEnabled: boolean;
		JsonRpcUser: string;
		JsonRpcPassword: string;
		JsonRpcServerPrefixes: string[];
		MixUntilAnonymitySet: string;
		PrivacyLevelSome: number;
		PrivacyLevelFine: number;
		PrivacyLevelStrong: number;
		DustThreshold: string;
	}

	export interface WalletJSON {
		EncryptedSecret: string;
		ChainCode: string;
		MasterFingerprint: string;
		ExtPubKey: string;
		PasswordVerified: boolean;
		MinGapLimit: number;
		AccountKeyPath: string;
		BlockchainState: BlockchainState;
		HdPubKeys: HdPubKey[];
	}

	export interface BlockchainState {
		Network: string;
		Height: string;
	}

	export interface HdPubKey {
		PubKey: string;
		FullKeyPath: string;
		Label: string;
		KeyState: number;
	}
}
