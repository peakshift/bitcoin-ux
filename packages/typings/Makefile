electrum:
	json-ts --namespace Electrum --rootName Config ~/.electrum/config > electrum.d.ts
	typescript-json-schema electrum.d.ts "Electrum.Config" -o json-schema/electrum.json
electrum_backup:
	json-ts --prefix "" --namespace Electrum --rootName Backup ../../../../wallet_1.backup > electrum-backup.d.ts
	typescript-json-schema electrum-backup.d.ts "Electrum.Backup" -o json-schema/electrum-backup.json
specter:
	typescript-json-schema specter.d.ts "Specter.AppSettings" -o json-schema/specter.json
