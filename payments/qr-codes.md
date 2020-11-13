# Bitcoin & QR Codes

- QR codes can hold up to 7,089 numeric characters and up to 4,296 alphanumeric characters value of data[^1]
- QR Code has an error correction capability.[^1]

![bitcoin-qr-codes](./assets/img/bitcoin-qr-codes.svg)

## BIP21 URI

- Address
- Label
- Message
- Amount

## BOLT11 URI

- Amount
- Description
- Description Hash
- Fallback (Onchain)

## BOLT11 invoices encoded in BIP21 URIs

User flow visualising a wallet supporting both onchain and lightning payments, with lightning set as the default and the onchain fallback in the event of errors.[^2]

### Rationale

- There are more wallets which have BIP21 implemented than lightning network (asumption).
- Payers wallet supports both lightning network and bitcoin on-chain.

— *Assumptions* ☝️

- [ ] 

![bip21-compatible-bolt11](./assets/img/bip21-compatible-bolt11.svg)

- [ ] Allow user to over-ride wallets' default network (lightning)
- [ ] Continue onchain flow after after error message
- [ ] Consider automatic error handling?
- [ ] Talk about duplicated payment meta data (description/label), increased data size of the qr code leads to more difficulty with scanning

### Drawbacks

- [ ] QR Complexity
  - QR Codes with more modules are difficult to read on devices with low resolutions
  - Duplicated Data

[^1]: https://www.krishisanskriti.org/vol_image/30Jan201902013002b%20%20%20%20%20Aquil%20Ahmad%20Khan%20%20372-374.pdf "Journal of Basic and Applied Engineering Research / p-ISSN: 2350-0077; e-ISSN: 2350-0255; Volume 5, Issue 5; July-September, 2018, pp. 372-374"
[^2]: https://www.reddit.com/r/Bitcoin/comments/8wyloi/making_lightning_invoices_backwards_compatible/ "Making Lightning Invoices backwards compatible with standard BIP21 URIs"
[^3]: https://github.com/LN-Zap/zap-desktop/pull/3131 "Support bolt11 invoices encoded in bip21 uris"