declare namespace Electrum {
	export interface Config {
		advanced_preview: boolean;
		alias: string;
		auto_connect: boolean;
		backup_dir: string;
		batch_rbf: boolean;
		blockchain_preferred_block: BlockchainPreferredBlock;
		check_updates: boolean;
		coin_chooser_output_rounding: boolean;
		config_version: number;
		confirmed_only: boolean;
		"console-history": any[];
		currency: string;
		dark_icon: boolean;
		decimal_point: number;
		dynamic_fees: boolean;
		fiat_address: boolean;
		gui_last_wallet: string;
		history_rates: boolean;
		history_rates_capital_gains: boolean;
		is_maximized: boolean;
		log_to_file: boolean;
		mempool_fees: boolean;
		num_zeros: number;
		persist_daemon: boolean;
		qt_gui_color_theme: string;
		receive_tabs_index: number;
		recently_open: string[];
		request_expiry: number;
		rpcpassword: string;
		rpcuser: string;
		run_local_watchtower: boolean;
		show_channels_tab: boolean;
		show_console_tab: boolean;
		show_contacts_tab: boolean;
		use_exchange_rate: boolean;
		use_watchtower: boolean;
	}
	export interface BlockchainPreferredBlock {
		hash: string;
		height: number;
	}
}
