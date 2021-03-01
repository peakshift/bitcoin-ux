#  Wallet security

## Intro

If you make use of wallets, then you probably have heard of private keys and private key management. A private key is a number, usually encrypted, that allows bitcoin to be spent. Private keys are sensitive information that need to be properly secured because if they fall into the wrong hands, all your bitcoin could be stolen. Hence, we could say that ensuring security in wallets is majorly about securing your private key.

This chapter focuses however not on private key management, but on information security in the general sense. It looks at the importance, existing mechanisms and also best practices that improve and ensure security in wallets. It also considers the roles designers play in ensuring this security through design.

## Why it is important

- talk about risk of loss and theft

  

## Existing Mechanisms

### Signing Messages -verifying your identity, proving ownership of fund

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

This is required to unlock the app. This adds and extra layer of privacy and security as no one will be able to get access to your phone.

- cold or offline storage

  

## What role do designers play in  ensuring security

- Safety by design (talk about privacy by design here)
- Adversarial Thinking



