interface Config {
  SecretKey: string;
  ApiUrl: string;
  // Add more environment variables as needed
}

// Check if the required environment variables are present during development
const checkEnvVars = (envVars: Config) => {
  for (const [key, value] of Object.entries(envVars)) {
    if (!value) {
      throw new Error(`Missing environment variable: ${key}`);
    }
  }
};

const config: Config = {
  SecretKey: import.meta.env.VITE_SECRET_KEY as string,
  ApiUrl: import.meta.env.VITE_API_URL as string,
};

if (import.meta.env.NODE_ENV !== 'production') {
  // Only check in development mode
  checkEnvVars(config);
}

export default config;
