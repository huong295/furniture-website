import NextAuth, { NextAuthOptions } from "next-auth";
import AzureADProvider from 'next-auth/providers/azure-ad';

export const authOptions: NextAuthOptions = {
  providers: [
    AzureADProvider({
      clientId: "af3c9ef1-06de-419a-b19a-04b5aa90b3ad",
      clientSecret: "w9~8Q~-1lW2yFz.1zE~nv.d.Gl.RAUec_2z-Oai~",
      tenantId: "1d4b757f-090c-43f2-ae8c-b8d183ec83e1",
    })
  ]
}

export default NextAuth(authOptions);