import { RecordString } from "ts-generic-magic";

type LocalEnv = RecordString<
  "NEXT_PUBLIC_REACT_APP_GITHUB_AUTH_TOKEN" | "NEXT_PUBLIC_BACKEND_URL"
>;

declare global {
  namespace NodeJS {
    interface ProcessEnv extends LocalEnv {}
  }
}

export {};
