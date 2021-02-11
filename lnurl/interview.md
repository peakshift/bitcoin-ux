# LNURL / Documentation UX / Expert Interview

:::info
The goal of this series of interviews we'll be doing is to gain an understanding of the limitations of lightning that birthed LNURL. We will also be exploring the setup requirements and use cases, that can serve as a way to onboard developers looking to implement one of the LNURL solutions.
:::

## Foundations
Starting with a basic of understanding of how lightning works, and how a lightning newbie may interact with it.

### Setup lightning
You set up a lightning node, lets say with an application like Umbrel then you're able to open channels with various parties who you may be transacting with, or whom you have some relationship where they provide me the capacity to route payments through them (lightning service provider).

### Personal use
You may then choose to connect to your node with an application like Zues, or Zap which would allow you to generate invoices remotely that you can then share with the payer.

## Integrating payments
Enter LNURL, LNURL is a specification for interacting with my lightning node through HTTP.

- What options do I have besides HTTP?

## lnurl-pay
### Conventional lightning solutions
- Generate many invoices upfront with long expiration times.

### Problems with conventional lightning solutions
- ...

### Comparison to on-chain
- xpubs can be used on-chain as an on-chain invoice generator.
- this is not the same as a static address though, bip47 payment codes would be the closest solution to provide a static payment code.

### Use Cases
You will run into the use case for `lnurl-pay` if you want to automate the creation of invoices. 

#### Ecommerce
In a merchant setup you would need to generate invoices on demand for customers to pay.

- lnurl-pay (?)

#### APIs
If your API requires a payment to provide a response it would need to generate an invoice for consumers.

- lnurl-auth(?)
- lnurl-pay(?)

---

- lnurl-channel(?)
- lnurl-withdraw(?)

---
## The Solutions
### lnurl-pay
- one line explanation
    - Pay to static QR/NFC/link
- user story
    - ...
- alternative solutions
- what convention does it abstract?

### lnurl-withdraw
- one line explanation
    - Withdrawing funds from a lightning service
- user story
    - Today users are asked to provide a withdrawal Lightning invoice to a service, this requires some effort and is especially painful when user tries to withdraw funds into mobile wallet while using a desktop website. Instead of asking for Lightning invoice a service could display a "withdraw" QR code which contains a specialized LNURL.
- alternative solutions
- what convention does it abstract?
### lnurl-channel
- one line explanation
- user story
    - Suppose a user has a balance on a certain service which he wishes to turn into an incoming channel and service supports such functionality. This would require many parameters so the resulting QR may be overly dense and cause scanning issues. Additionally, the user has to make sure that a connection to target LN node is established before an incoming channel is requested.
- alternative solutions
- what convention does it abstract?
### lnurl-auth
- one line explanation
    - Authorization with Bitcoin Wallet
- user story
    - A special linkingKey can be used to login user to a service or authorise sensitive actions. This preferrably should be done without compromising user identity so plain LN node key can not be used here. Instead of asking for user credentials a service could display a "login" QR code which contains a specialized LNURL.
- alternative solutions
- what convention does it abstract?

### Persona / Web Developer

- (As a web developer famililar with creating HTTP REST APIs -- and I have some basic understanding of lightning for personal payments, but want to integrate it into my web service) 

I'm able to plead ignorance on how lightning works on the underlying level, because as a front-end developer or backend developer, I may not have much knowledge of the inner workings of lightning but want to take advantage of the capability or the opportunities that LNURL can provide me.

## Why not just use AMP?
## Why not just use "Offers" in BOLT12?
## Why not just use keysend?