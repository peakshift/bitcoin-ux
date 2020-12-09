# Account Scanning

## Intro

Imagine a situation where you get a new wallet and you need to recover your previous wallet bitcoin balance? This is where account scanning comes in. ***Account scanning***  refers to the process whereby a wallet scans through a user’s account in search of payment requests with transactions, to sum the user’s bitcoin balance.


Accounts store the addresses/payment requests. The majority of users have one account but on a rare occasions, a user may have two or more accounts. Regardless of this possibility, the wallet is most likely to scan just the first account by default.

The wallet scans the account for addresses that contain payment requests, then it further scans the addresses for payment requests that were fulfilled / have transactions made on them. By identifying these tranactions, the wallet can then add up all transactions to get the users balance from the previous wallet. 

Wallets scan 20 addresses by default, hence if no transaction is found on the first 20 addresses, the wallet will assume that you have no previous transactions on that account. This means that if a user has transactions on the 21st address, the wallet will not display that transaction balance. The result of this is that the user will get a wrong balance.



## Design Solution

Having identified that users not being able to get their correct balance in a situation like the above mentioned, is problematic, we came up with a two solutions.

### Solution  One - Automatically  increasing  the number of addresses scanned 

Here, after the initial scan of 20 addresses and no transaction is found or the transactions found aren't complete / balance doesn't add up to what the user has, they have the freedom to scan more addresses by selecting "scan again". This way, the user can scan multiple addresses until they get their correct balance

<img src="assets/img/Frame 106-1607440332599.png" alt="Frame 106" style="zoom:67%;" />

#### User Flow

- select "restore wallet"
- enter recovery phrase
- account scan begins automatically
- balance and number of transactions found will increase as more transactions are identified in the addresses.
- if no transactions are found in the first 20 addresses, the user can select "scan again" to begin another scan but this time, the wallet automatically scans more addresses than it did the first time.
- if transactions are found, the final balance is displayed along with the number of transactions found. The individual transactions will also be displayed. The user can also scan again here if the balance is still less than what they had.



### Solution  Two - Manually increasing  the number of addresses scanned 

Just like the first solution, the user can scan more addresses if the need arises, but in this case, the user enters how many addresses they want scanned in the next scanning process. That is, they get to enter a custom number.

<img src="assets/img/Frame 109-1607448280310.png" alt="Frame 109" style="zoom:67%;" />

#### User Flow

- select "restore wallet"
- enter recovery phrase
- account scan begins automatically
- balance and number of transactions found will increase as more transactions are identified in the addresses.
- if no transactions are found in the first 20 addresses, the user can select "scan again" to begin another scan.
- a pop-up comes up, propmting the user to input a custom No. of addresses per scan
- user selects " done " and a new scan begins
- if transactions are found, the final balance is displayed along with the number of transactions found. The individual transactions will also be displayed. The user can also scan again here if the balance is still less than what they had.