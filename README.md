# Consistent Push & Pull Payments on and off-chain 

`account-identification`, `payment-requests`, `invoices`, `transactions`, `psbt`

#### Default User Flows for payments when switching between On/Offchain payments is inconsistent

Payments by default on Lightning Network are pull based, while Bitcoin is push. If we are able to replicate pull payments on-chain and push payments on lightning, it could enable more consistent user experience for wallet users going between the networks.

There are specifications that can make some of this possible already.

Bitcoin

1. Bitcoin URI — BIP0021
2. Partially Signed Bitcoin Transaction — `BIP0174`

Lightning

1. Payment Request — `BOLT11`
2. Key Send / "Spontaneous Payments" — `lncli sendpayment --key_send`

Focused is placed on the user flow of requesting, sending and receiving a payment on Bitcoin and Lightning Network in relation to the above specs. The primary output format would be an Interactive Reference, which will combine technical details with the visuals — it will be part of this repo, as well as [@BitcoinDesign/Guide](https://github.com/BitcoinDesign/Guide).

### Output

1. On-chain: Interactive Reference for Push & Pull Payments
2. Lightning Network: Interactive Reference for Push & Pull Payments
3. Designers Guide for running a testing environment ([polar](https://www.google.com/url?q=https://lightningpolar.com/&sa=D&ust=1598482989499000&usg=AOvVaw2e0337F-zQBMjQAau70qqz) or similar)

### Stretch Goals

There are some additional areas that can be explored.

- Account Identification / Contact List
- Extending On-chain Pull Payments with Payjoin

