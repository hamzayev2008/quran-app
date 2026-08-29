const config = {
  prelive: {
    authBaseUrl: "https://prelive-oauth2.quran.foundation",
    apiBaseUrl: "https://apis-prelive.quran.foundation",
  },
  production: {
    authBaseUrl: "https://oauth2.quran.foundation",
    apiBaseUrl: "https://apis.quran.foundation",
  },
} as const;

export function getQuranFoundationConfig() {
  const env = process.env.QF_ENV || "prelive";

  if (env !== "prelive" && env !== "production") {
    throw new Error(
      "QF_ENV must be either 'prelive' or 'production'"
    );
  }

  const clientId = process.env.QF_CLIENT_ID;
  const clientSecret = process.env.QF_CLIENT_SECRET;
  const redirectUri = process.env.QF_REDIRECT_URI;

  if (!clientId) {
    throw new Error("QF_CLIENT_ID is missing");
  }

  if (!clientSecret) {
    throw new Error("QF_CLIENT_SECRET is missing");
  }

  if (!redirectUri) {
    throw new Error("QF_REDIRECT_URI is missing");
  }

  return {
    clientId,
    clientSecret,
    redirectUri,
    ...config[env],
  };
}