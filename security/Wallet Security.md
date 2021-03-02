#  Wallet security

## Intro

Wallet security is a term that is used to describe the mechanisms, processes or actions that ensure security of users wallet against physical and digital attackers. This information needs to be properly secured because if they fall into the wrong hands, all your bitcoin could be stolen.

This chapter focuses therefore on information security in the general sense. It looks at the importance, existing mechanisms and also best practices that improve and ensure security in wallets. It also considers the roles designers play in ensuring this security through design.



## Why it is important

- talk about risk of loss and theft

  

## Existing Mechanisms

### Signing Messages - verifying your identity, proving ownership of fund

This is an bitcoin functionality that allows you sign messages to prove that you are in control of some funds belonging to a particular bitcoin address.



#### How it works

- Put in message and address that transaction was made on

- A message signature is produced

- Send this to whoever is requesting

- On their end they will copy the info and paste it in their wallet to verify

  

#### Scenarios where it can it be used

1. Let’s say you need a refund from a merchant you made payment to. Because of the lack of identification on bitcoin transactions, the merchant is going to need to confirm that you made that transaction. Hence they will request a signed message with the address from which the payment was made

2. Let’s say you make a payment for some goods on the internet with bitcoin. The merchant would require some proof of payment from you... it could also contain the address for delivery so that the merchant makes sure they are sending it to the right customer

   

#### What effect does this have on security

Being that Bitcoin addresses aren't tied to identities there is really no way to know if a network has been intercepted by some malicious third-party which you end up sending your bitcoin to. Signing messages allows you to verify that the persons receiving or sending bitcoins is who they say they are.



### Encryption - messages, passcode

Every device that is connected to the internet is vulnerable to some form of cyber attack. Wallet encryption require you to create password that would subsequently be required  when a transaction is to be made. It is an extra layer of security ( usually optional ) that prevents anyone who isn't you from processing a transaction.



### PIN code and Biometric Authentication

In some wallets, the user is required to create lock for the wallet. This could come in form of a PIN code or a form of biometric authentication like fingerprint lock or face ID. This adds and extra layer of privacy and security as no one will be able to get access to your wallet.



### Cold or offline storage

Hot and cold describe a wallet in terms of being connected to the internet. Where a hot wallet is connected to the internet, a cold wallet is not. The idea is that a cold wallet is less susceptible to third-party theft over the internet as a transaction can only be confirmed by an action on the hardware wallet. This makes it extremely difficult, if not impossible, for hackers or cyber criminals to have access to your bitcoins.

#### Types of cold storage

1. **Paper wallets:** This is a document that has the public and private keys written on it. It also has a QR code that can be scanned to make a transaction. To keep your bitcoins secured, this wallet has to be stored in safe place.
2. **Hardware wallets**: These are wallets that store your private keys on hardware devices which can be connected to a computer to carryout transactions. It should be protected against damage and theft. Some hardware wallets include Ledger, Trezor, etc
3. **Offline software**: These are software wallets that do not need to be connected to the internet for  transactions to be carried out. Electrum is an example of such a wallet

#### 

## What role do designers play in ensuring security

- Safety by design (talk about privacy by design here)
- Adversarial Thinking



