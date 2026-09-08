# shopify-checkout
**shopify-checkout** is an open-source auto-checkout module written in Javascript, designed to automate the checkout process on any Shopify store via their legacy storefront API. This code was written before Shopify introduced their GraphQL checkout API, so it may not work on the newest stores. Forgive me for any messy code as this was one of the first-ever checkout modules I've ever written.

**Important Note:** This code is not intended for use as-is and should only be viewed as a proof of concept (missing dependencies).
## Features
  - Product out-of-stock bypass via the Storefront API (see modules/shopify/requests/wallets.js)
  - Product monitoring and variant selection (with cache bypass)
  - Proof of concept implementation of checkout flow (for non-gql stores)
  - Paypal checkout support (for non-gql stores)
  - Checkout captcha support (via 2captcha) (for non-gql stores)
## Disclaimer
This project is for educational purposes only. The developers and maintainers of this project do not endorse, support, or promote the use of this code for any activities that violate the terms of service of any websites or applications. By using this project, you agree to use it responsibly and ethically, and you acknowledge the potential risks associated with its use.
