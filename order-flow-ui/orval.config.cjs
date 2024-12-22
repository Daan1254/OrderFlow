module.exports = {
    OrderFlowApi: {
      output: {
        mode: "tags-split",
        target: "api/endpoints/order-flow-api.ts",
        schemas: "api/model",
        client: "vue-query",
      },
      input: {
        target: "http://127.0.0.1:3000/api-json",
      },
    },
};