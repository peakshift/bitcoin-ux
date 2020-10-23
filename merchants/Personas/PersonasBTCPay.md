The goal of this document is to explain different type of **merchant** persona in BTCPay Server. The structure of a persona provided here will be further used in a design sprint.

## BTCPay Server Merchant Persona

While BTCPay Server as a software has plenty of [use-cases](https://docs.btcpayserver.org/UseCase/) here, our focus is on users that use it in order to accept payments. Furthermore, the main focus will be on merchants.

The most logical way to distinguish merchants in BTCPay Server is to divide them in:
- Retail Merchants (brick and mortar stores)
- Online Merchants

### Retail Merchants

### Online Merchants

Online merchants are persona that are using BTCPay Server to accept payments online. Their goal is to either sell a product (physical or digital), a service or accept donations.

#### Bitcoin Enthusiast
Bitcoin enthusiasts usually deploys his online store for fun and experiment. These users have technical skills and want to try BTCPay Server out. These are small shops or attempts to collect Bitcoin within a certain type of group (Bitcoin Twitter).

#### Medium-size merchants
These merchants use CMS in most of the cases for their online stores. They use BTCPay via available plugins and easily connect it to their stores.

#### Privacy-orientated merchants

Using BTCPay Server because of the privacy features. These merchants are usually VPN's, hosting providers, VOIP services. [Example here](https://directory.btcpayserver.org/filter/merchants/domains-hosting-vpns/)

#### Enterprise

An enterprise is a business that has large volume of customers. The reason they've implemented BTCPay is most likely problems they've experienced with BitPay BIP70 compatibility or simply a large portion of their customer base requested it. These enterprises commonly use a few Bitcoin payment processors either because they allow more coins or because they've used it in the past. They have developer and support departments that handle customer queries. Their integrations are custom and deeply integrated within their workflow.

Example: [Cheap Air](https://www.cheapair.com/) and their [story](https://www.reddit.com/r/Bitcoin/comments/8ymzpj/update_from_cheapair_now_using_btcpay/), NameCheap their [story](https://www.namecheap.com/about/press-releases/press-releases-info/20-09-21/namecheap_now_offers_bitcoin_payment_option_via_btcpay/) [user flow](https://www.namecheap.com/support/knowledgebase/article.aspx/10312/2200/how-do-i-add-funds-to-my-namecheap-account-using-btcpay). 

#### Charity

Usually an organization that's trying to raise funding for a particular cause, or receive donations in Bitcoin. Larger organizations usually convert their donations to fiat by exchanging their bitcoin on an exchange. These charities have deep understanding of privacy and care about privacy. They don't pay attention to invoices, underpaid amounts or manage their invoices within BTCPay Server. They are okay with whatever amount they receive.
Example of Charity persona: [The Tor Project](https://donate.torproject.org/cryptocurrency/), [Human Rights Foundation](https://hrf.org/donate-bitcoin/), [Hong Kong Free Press](https://support.hongkongfp.com/)

#### Censored merchants

Example: [Gab](https://gab.com/) [Feminists Coalition](https://www.coindesk.com/nigerian-activists-bitcoin-endsars-police-brutality)

#### Dark web merchants

Unfortunately the unexplored part of users that may be using BTCPay Server that we have no information or knowledge on, but it's quite possible that there's a big economic activity going on. There aren't examples or indications that these type of merchants exist but we can't exclude the possibility considering the censorship-resistance and private nature of the software.