/**
 * Shopify request module entry point.
 *
 * Aggregates and re-exports the request helpers used throughout the Shopify
 * task system, providing a single interface for storefront communication.
 *
 * Request helpers are organized by the Shopify service or checkout flow they
 * interact with:
 *
 * - AJAX       - Product, handle, and checkout requests.
 * - Frontend   - Browser-facing checkout, payment, and processing requests.
 * - GraphQL    - Checkout queue polling.
 * - PayPal     - PayPal session creation, approval, and callback handling.
 * - Storefront - Storefront API configuration and checkout operations.
 * - Wallets    - Wallet checkout, shipping, payment, and calculation requests.
 */

const { ajaxGetCheckout, ajaxGetHandle, ajaxGetProducts } = require("./ajax");
const { frontendGetCheckout, frontendGetPayment, frontendGetPaymentBackup, frontendPostPayment, frontendGetProcessing } = require("./frontend");
const { graphqlPostQueue } = require("./graphql");
const { paypalPostApprove, paypalGetCallback, paypalPostCreate } = require("./paypal");
const { storefrontPostCheckout, storefrontPatchCheckout, storefrontGetCheckout, storefrontGetConfig, storefrontGetPayments, storefrontGetRates, storefrontGetSession } = require("./storefront");
const { walletsPostCalculate, walletsPatchCheckout, walletsPostCheckout, walletsGetCheckout, walletsGetPayments, walletsGetRates } = require("./wallets");

module.exports = { ajaxGetCheckout, ajaxGetHandle, ajaxGetProducts, frontendGetCheckout, frontendGetPayment, frontendGetPaymentBackup, frontendPostPayment, frontendGetProcessing, graphqlPostQueue, paypalPostApprove, paypalGetCallback, paypalPostCreate, storefrontPostCheckout, storefrontPatchCheckout, storefrontGetCheckout, storefrontGetConfig, storefrontGetPayments, storefrontGetRates, storefrontGetSession, walletsPostCalculate, walletsPatchCheckout, walletsPostCheckout, walletsGetCheckout, walletsGetPayments, walletsGetRates };