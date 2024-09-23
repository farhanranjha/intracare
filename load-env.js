const fs = require("fs");
const Infisical = require("@infisical/sdk").InfisicalSDK;

const client = new Infisical({
  siteUrl: process.env.INFISICAL_URL,
});

(async () => {
  await client.auth().universalAuth.login({
    clientId: process.env.INFISICAL_CLIENT_ID,
    clientSecret: process.env.INFISICAL_CLIENT_SECRET,
  });

  const enviroment = process.env.NODE_ENV ? process.env.NODE_ENV : "dev";

  const secrets = await client.secrets().listSecrets({
    environment: enviroment,
    projectId: process.env.INFISICAL_PROJECT_ID,
    path: "/",
  });

  for (const secret of secrets.secrets) {
    fs.appendFileSync(".env", `\n${secret.secretKey}=${secret.secretValue}`);
  }
})();
