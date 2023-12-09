import credentialedProxyHandler from "utils/proxy/handlers/credentialed";

const widget = {
  api: "https://api.polygon.io/{endpoint}",
  proxyHandler: credentialedProxyHandler,

  mappings: {
    "v3/reference/tickers": {
      endpoint: "v3/reference/tickers",
      params: ["ticker"],
    },
  },
};

export default widget;
