# Wallet Security

## Risks

- Accidental deletion of wallet app
  - wipes private keys?
  - wiping of meta data
- Extortion

## Personal Finance

### Checking Account

- Hot wallet
- Less security measures

### Savings Accounts

- Holds large amounts

#### Additional authenication methods

- Multisig
- Anti fraud measures(?)

#### Velocity

- Percentage of coins moving in relative to the rest
- 100% draining of the wallet would be flagged and additional authentication would be needed

## Extortion Prevention Measures

Protecting against the 5$ wrench attack.

### Hide Balance Switch

```gherkin
Feature: Hide Balance
	As user I want to hide my balance
	So that... 
```

The "Hide my Balance" switch should not be prominant -- e.g on the same page where the balance is shown.

### Delay balance reveal when app opens

Once a user opens the app, a spinning balance animation is activated — simmilar to a slot machine and the user is asked are you alone?

### Special Pin Code to Access an Account with Less Funds

```gherkin
Feature: Secret Account
	As a user I want ...
	So that I can ...
	
	Scenario: Open smaller balance account
		Given I have set a pin code for my main wallet
		And I have set a pin for my 
		When 
		Then 
```

> 1. You can have several wallets on the Trezor with different amounts of BTC on them.
> 2. In case someone hits you with a wrench, tell them the password to your $ 100 wallet.
> 3. If they pull out the bigger guns, give them the 1000​ one.
> 4. But never disclose the million dollar password, as long as they don't know for sure you have it Wink
>
> [qwk](https://bitcointalk.org/index.php?action=profile;u=24140) — https://bitcointalk.org/index.php?topic=5112748.msg49853611#msg49853611

- [ ] How can this be facilitated with Photon?

Q: Can you send money from the "fake" account?

A: You can fund it with some small amount that you’re willing to lose.

### Other Ideas

1. Choosing a different app icon to obscure the Wallet App to make it look like a game.
2. Obscuring the currency
3. Home Wifi show full balance (gps, or wifi name)
4. Separate accounts, spending, savings, larger amounts are hidden from the main view when the app opens.

### Notifications Shows Balance

User should disallow content of message to be shown when phone is locked.