The goal of this document is to explain different type of **merchant** personas in BTCPay Server. The structure of a persona provided here will be further used in [design sprints](design-sprints.md).

## BTCPay Server Merchant Persona

Due to its flexible nature, BTCPay Server has wide-range of [use-cases](https://docs.btcpayserver.org/UseCase/).
The focus in this document is on the users that use BTCPay Server to accept payments, more precisely on **merchants**.

Due to behavioral differences in how the software is handled we categorize merchants as:

- Retail Merchants
- Online Merchants

### Retail Merchants

### Online Merchants

This category of merchants uses BTCPay Server to accept payments online. Their goal is to sell a product (physical or digital), a service or accept donations.

#### Medium-size merchants

These merchants have an established medium-sized business. The reason they want to accept Bitcoin is usually request by their customer base or they want to attract more customers by accepting Bitcoin. Majority of them uses an e-commerce CMS like Shopify, WordPress, Magento or Prestashop. They use a third-party host or have a self-hosted instance of BTCPay. The owner of these shops or an employee is usually the one reaching out for support or asking questions about BTCPay Server. They're interested in BTCPay mostly to attract new customers, to avoid fees, or accumulate Bitcoin. 

#### Enterprise

An enterprise is a business that has large volume of customers. The reason they've implemented BTCPay is most likely problems they've experienced with BitPay BIP70 compatibility or simply a large portion of their customer base requested it. 

These enterprises commonly use a few Bitcoin payment processors either because they allow more coins or because they've used it in the past. They have developer and support departments that handle customer queries and implementation. Their integrations are quite custom and deeply integrated within their workflow. 

Example: [Cheap Air](https://www.cheapair.com/) and their [story](https://www.reddit.com/r/Bitcoin/comments/8ymzpj/update_from_cheapair_now_using_btcpay/), NameCheap their [story](https://www.namecheap.com/about/press-releases/press-releases-info/20-09-21/namecheap_now_offers_bitcoin_payment_option_via_btcpay/) [user flow](https://www.namecheap.com/support/knowledgebase/article.aspx/10312/2200/how-do-i-add-funds-to-my-namecheap-account-using-btcpay). 

#### Enthusiast

An enthusiast usually deploys his online store for fun and experiment. They don't have a website prior to deploying BTCPay Server. These users like to experiment and learn. For them this is a discovery journey. Most of them use [the built-in apps](https://docs.btcpayserver.org/Apps/) or deploy WooCommerce store on top of BTCPay.These are small shops or attempts to collect Bitcoin within a certain type of group (Bitcoin Twitter for example). Enthusiasts use BTCPay's other features such as wallet because of it's flexibility and privacy features.

#### Privacy-orientated merchants

Using BTCPay Server because of the privacy features. These merchants are usually VPN's, hosting providers, VOIP services. [Example here](https://directory.btcpayserver.org/filter/merchants/domains-hosting-vpns/)


#### Charity

Usually an organization that's trying to raise funding for a particular cause, or receive donations in Bitcoin. Larger organizations usually convert their donations to fiat by exchanging their bitcoin on an exchange. These charities have deep understanding of privacy and care about privacy. They don't pay attention to invoices, underpaid amounts or manage their invoices within BTCPay Server. They are okay with whatever amount they receive.
Example of Charity persona: [The Tor Project](https://donate.torproject.org/cryptocurrency/), [Human Rights Foundation](https://hrf.org/donate-bitcoin/), [Hong Kong Free Press](https://support.hongkongfp.com/)

#### Censored merchants

Heavily-censored business entities that have no other way to accept payments.
Example: [Gab](https://gab.com/) [Feminists Coalition](https://www.coindesk.com/nigerian-activists-bitcoin-endsars-police-brutality)

#### Dark web merchants

The unexplored part of users that may be using BTCPay Server that we have no information or knowledge off. It's quite possible that there's a big economic activity going, but it's only an assumption. There aren't examples or indications that these type of merchants exist but we can't exclude the possibility considering the censorship-resistance and private nature of the software.