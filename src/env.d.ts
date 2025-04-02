declare namespace NodeJS {
  interface ProcessEnv {
    readonly BACKEND_URL: string
  }
}

interface ImportMetaEnv {
  readonly PUBLIC_BACKEND_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
