"use client"
import {signIn, useSession , signOut} from "next-auth/react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Music } from "lucide-react"

const Appbar = () => {
    const session = useSession()

    return (
    
        <div className='flex w-[95%] justify-between'>
            <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                    <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
                      <div className="flex gap-2 items-center text-xl font-bold">
                        <Music className="h-6 w-6 text-primary" />
                        <span>FanTunes</span>
                      </div>
                      <div className="flex flex-1 items-center justify-end space-x-4">
                        <nav className="flex items-center space-x-2">
                          <Link
                            href="#features"
                            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                          >
                            Features
                          </Link>
                          <Link
                            href="#how-it-works"
                            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                          >
                            How It Works
                          </Link>
                          <Link
                            href="#creators"
                            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                          >
                            Creators
                          </Link>
                          {session.data?.user
                            ? 
                            <Button className='' onClick={()=>signOut()}>
                               Logout 
                            </Button>
                            : <button className='' onClick={()=>signIn()}> SignIn </button>
                          }
                        </nav>
                      </div>
                    </div>
                  </header>
       </div>
  )
}

export default Appbar
 
