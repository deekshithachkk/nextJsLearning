import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
export default NextAuth({
  providers: [
    CredentialsProvider({
      type: 'credentials',
      credentials: {},
      authorize(credentials, req) {
        const {email, password} = credentials as {
          email: string,
          password: string,
        };
        console.log(email)
        // validate here your username and password
        if(email !== 'abc@email.com' && password !== "123") {
          throw new Error('invalid credentials');
        }
        // confirmed users
        return { name: 'Alex', email: 'alex@email.com'}
      }
    }),
  ],
  pages: {
    signIn: "/auth/signin",  
  }
})