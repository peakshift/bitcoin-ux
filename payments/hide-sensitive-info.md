# Hiding sensitive information in bitcoin wallets

## Abstract

Imagine this scenario. A user is in a public place, they need to open up their bitcoin wallet to maybe make a payment but they don't feel comfortable enough to have their balances displayed in bold on their phone screens once the wallet is opened. This here a problem because users want to feel safe whenever they use their wallets.

This is where the ***hide balance*** feature comes in handy. With this feature, users have the ability to conceal their wallet balance and other sensitive information, when they feel the need to.



## Methods

The hide balance feature can be achieved in the following ways

### Hide and reveal balance with the eye icon on screen

On the home screen, next to the balance, there could be an eye icon which when tapped, would hide the balance and when tapped again, would reveal it

#### What could go wrong

Here it is clearly visible and obvious that there are hidden items on the screen, this would only make prying eyes more curious.

<img src="assets/img/Desktop - 1.png" alt="Desktop - 1" style="zoom:67%;" />



### Hide balance by default on wallet launch

Here, the wallet balance is hidden by default. Also there is no indicator that the balance is actually hidden, the user can then reveal it if they choose to by tapping on what was used to conceal the balance. The balance can be hidden by the app logo, an empty card or whatever is best fit for the design

#### What could go wrong

It's possible that a new user would not know that the balance is hidden and can be easily revealed by tapping on the logo. They may end up searching all over for the balance and eventually give up



<img src="assets/img/Desktop - 2-1608020386198.png" alt="Desktop - 2" style="zoom:67%;" />



### Hide balance and transactions completely without indications that it is hidden 

Here, when the user hides the balance, the wallet looks as if the user hasn't made any transactions. They can unhide the balance by selecting "unhide" in the side nav but before is can be revealed, the pin created by the user (when setting up the app) will be requested.

<img src="assets/img/Desktop - 7.png" alt="Desktop - 7" style="zoom:67%;" />



#### What could go wrong

The user may get frustrated of always having to input a pin whenever they want to reveal the balance especially when they intended to hide it for only a short while



### Applications that use this feature

#### Wallet of Satoshi

On this wallet,  when the hide balance is selected, the balance on the home screen is hidden as well as the conversation rate but the payments made and received are still very much visible on the home screen. 

##### user flow

- Launch app
- open side nav
- select "advanced settings"
- select "hide balance" 

<img src="assets/img/Desktop - 5.png" alt="Desktop - 5" style="zoom:67%;" />



#### Edge wallet

On this wallet,  there is no "hide balance" button or toggle. By tapping on the balance, it becomes hidden then a large "show balance" is displayed on the screen. This doesn't do so well for security.

##### user flow

- launch app
- tapping on the balance hides it automatically

<img src="assets/img/Desktop - 3.png" alt="Desktop - 5" style="zoom:67%;" />





#### Wasabi Wallet

On this wallet,  when the hide balance icon (Eye icon) is selected, the  balance on the home screen is hidden as well as your bitcoin address 

#### user flow

- launch app
- click eye icon to hide and reveal balance. It also hides addresses

<img src="assets/img/Desktop - 6.png" alt="Desktop - 6" style="zoom:100%;" />



#### Luno Wallet

On this wallet,  there is also no "hide balance" button or toggle. By tapping on the balance, it becomes hidden and the "Luno logo" is displayed in it's place.

#### user flow

- launch app
- tapping on the balance hides it automatically

<img src="assets/img/Desktop - 4.png" alt="Desktop - 4" style="zoom:100%;" />



## Why is this pattern important to designers?

By including this pattern in design of wallets, we give users more sense of privacy when they use the app. To some users this also provides a little bit of security as a large balance, when discovered by others, puts the owner at risk of being targeted.

Most wallets that make use of "hide balance" implement it in such a way that is also really easy to reveal it. This is convenient for the wallet owner to go back and forth between hiding and revealing the balance, but this also makes it easy for anyone else to do the same.

Also, on these wallets they tend to hide just the balance, every other sensitive information like all the transactions made and received are still visible once you leave the screen where the balance is hidden.









[^1]: https://medium.com/@olanrewajusodiq64/the-ui-ux-of-hide-balance-designing-to-improve-asset-security-e4b20668f315



