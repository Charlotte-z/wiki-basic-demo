declare global {
  declare namespace NodeJS {
    interface Process {
      readonly browser: boolean;
    }

    interface ProcessEnv {
      readonly NODE_ENV: "development" | "production" | "test";
      readonly REACT_APP_GITHUB_AUTH_TOKEN: string;
    }
  }
}
