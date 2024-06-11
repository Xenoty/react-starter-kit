interface Config {
  SecretKey: string;
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
  SecretKey: import.meta.env.VITE_SECRET_KEY || 'empty_secret',
  // yourEnvVariable: process.env.REACT_APP_YOUR_VARIABLE || '',
};

if (process.env.NODE_ENV !== 'production') {
  // Only check in development mode
  checkEnvVars(config);
}

export default config;
