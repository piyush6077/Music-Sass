"use client"
//we can add provider like directly in the root layout.tsx of the app but 
// for that we have to make the layout.tsx as "use client" which have 100 down side
// that's why we make this file provider.tsx


import { SessionProvider } from "next-auth/react"

const Provider = ({children}:{
    children:React.ReactNode
}) => {
        
    return(
        <SessionProvider>
            {children}
        </SessionProvider>
    )
}

export default Provider 