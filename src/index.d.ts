declare module "*.svg?url" {
  import { StaticImport } from "next/image";

  const defaultExport: StaticImport | string;
  export default defaultExport;
}

declare module "*.svg" {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}

declare let process: {
  env: {
    NODE_ENV: string;
    VERSION: string;
  };
};
declare namespace google {
  namespace accounts {
    namespace id {
      function initialize(options: {
        client_id: string;
        callback: (response: CredentialResponse) => void;
      }): void;

      function renderButton(
        parent: HTMLElement,
        options: { theme?: string; size?: string }
      ): void;

      function prompt(): void;

      interface CredentialResponse {
        credential: string;
        select_by: string;
      }
    }
  }
}
