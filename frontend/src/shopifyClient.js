import Client from "shopify-buy";

// Replace with your store URL and Storefront API token
const client = Client.buildClient({
  domain: "rohitdemostorein.myshopify.com", // your Shopify store
  storefrontAccessToken: "92d4d7a867acfa56991c8a4eb228a543", // from custom app
});

export default client;
