export type ClientResponse = {
  user: {
    id: string;
    name: string;
    avatar: string;
    premium: boolean;
  };
  authMethod: string | "session" | "token";
  description: string[];
  authMethods: Record<string, string>;
};
