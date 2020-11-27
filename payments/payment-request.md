# Payment Requests

**Payment Requests** are abstractions of addresses and payment meta-data combined.

They do not represent an account, the account will be synonymous to the wallet. 

It should be noted that Payment Requests can have multiple payments made to them.

There is no forced limit but you should only send a payment request to one payer in order to safeguard your privacy as using payment requests with multiple payers will expose your other funds to them.

![payment-request-creation](assets/img/payment-request-creation.svg)

- https://blog.btcpayserver.org/payment-requests/

## Distribution

1. QR Code
2. URI
3. Encoded String
4. Web Link

## Deciding on how to transport payment requests?

### At a distance (has contact information)

- Email
- SMS / Whatsapp
- Inside Payment App
- Phone

- Web Link (e.g. BTC Pay Server)

### At a distance (public)

- On Website
- Twitter

### Close Proximity (no contact exchange/contactless)

- NFC (Contactless Payment)
- QR Code
- Print (invoice, flyer, menu)

### Close Proximity (setep required)

- Bluetooth