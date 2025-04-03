import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import { prismaClient } from "../../lib/db"


console.log(process.env.GOOGLE_CLIENT_ID  )


const handler = NextAuth({
    providers: [
        GoogleProvider({
          clientId: process.env.GOOGLE_CLIENT_ID ?? "",
          clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? ""
        })
    ],
    callbacks: {
      async signIn(params){
        
        if(!params.user.email){
          return false
        }
        
        try {
          await prismaClient.user.create({
            data: {
              email: params.user.email,
              provider: "Google"
            }
          })
        } catch(error){
          
        }
        return true
      }
    },
    secret: process.env.NEXTAUTH_SECRET, 
    debug:true
}) 

export { handler as GET, handler as POST }