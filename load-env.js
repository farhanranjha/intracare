const fs = require("fs");
const Infisical = require("@infisical/sdk").InfisicalSDK;

const client = new Infisical({
  siteUrl: process.env.INFISICAL_URL,
  auth: {
    universalAuth: {
      clientId: process.env.INFISICAL_CLIENT_ID,
      clientSecret:
        process.env.INFISICAL_CLIENT_SECRET,
    },
  },
});

(async () => {

  const enviroment = process.env.NODE_ENV ? process.env.NODE_ENV : "dev"

  const secrets = await client.secrets().listSecrets({
    environment: enviroment,
    projectId: process.env.INFISICAL_PROJECT_ID,
    path: "/",
  });

  for (const secret of secrets) {
    fs.appendFileSync(".env", `\n${secret.secretKey}=${secret.secretValue}`);
  }
})();
