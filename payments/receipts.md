# Receipts — Giving context to bitcoin payments

*Investigating methods of looking up additional payment meta data from an online merchant website, or from the customers local and cloud storage.*

- **Assuming** online payments with bitcoin become massively adopted, and merchants do not ask for customers email address which is typically used to lookup orders.
- A problem would exist where users have a difficult time keeping track of where/what of their purchases.
- We need more meta data for our payments.
- BOLT11 has a `decription_hash` field which is a sha256 of some external data / file containing the full invoice (a pdf, item list json, etc).

*Below is a scenario for local or online stored receipts to address the problems highlighted in the above assumption.*

```gherkin
Feature: Reciepts
   As a user I want to access previous purchase information
   So that I can properly managing my expenses or get a refund

Scenario: Retrieve an online receipt of a paid invoice
     Given I shop at an online merchant
     And I have paid invoice "sha32434z23z3434234"
     And do not provide my email address to them
     When I open the BOLT11 invoice in my wallet
     Then I see it has a link to the item list

Scenario: Retrieve a locally stored receipt of a paid invoice
     Given I shop at an online merchant
     And I have paid invoice "sha32434z23z3434234"
     And do not provide my email address to them
     When I open the BOLT11 invoice in my wallet
     And the BOLT11 invoice "description_hash" is "sha32434z23z3434234"
     Then I see a file attached "sha32434z23z3434234.pdf"
## alternative method
Scenario: Encode low resolution image of receipt in BOLT11 invoice  
     Given I shop at an online merchant
     And I have paid invoice "sha32434z23z3434234"
     And do not provide my email address to them
     When I open the BOLT11 invoice in my wallet
     And the BOLT11 invoice "description_hash" is "sha32434z23z3434234"
     Then I see a file attached "sha32434z23z3434234.pdf"
```

*While links or pdf invoices may be more widespread it’s may also be worth mentioning* *[standard schemas for receipts](https://schema.org/Invoice)* *can provide developers with more flexibility when building UIs.*

---

### NOTE

1. I use lightning as an example above but in another proposal I suggest the persistency of a payment request (BIP21) for onchain in order to avoid address reuse. 
2. There has been mention (see lnurl-mafia) of encoding an image of the receipt in a BOLT11 invoice description/_hash fields — due to limtiations of how much data can be stored in these fields, it would require .