const { app } = require("@azure/functions");

app.http("GetUserId", {
  methods: ["GET"],
  authLevel: "anonymous",
  handler: async (request, context) => {
    context.log(`Get User Id has been fetched successfully"${request.url}"`);

    const name = request.query.get("name") || (await request.text()) || "Fetched User Id Sucess!!";

    return { body: `Hello, ${name}!` };
  },
});
