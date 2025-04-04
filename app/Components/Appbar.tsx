"use client"
import {signIn, useSession , signOut} from "next-auth/react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Music } from "lucide-react"

const Appbar = () => {
    const session = useSession()

    return (
            <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                    <div className="container flex h-20 items-center space-x-4 sm:justify-between sm:space-x-0">
                      <div className="flex gap-3 items-center text-xl font-bold">
                        <div className="bg-primary/10 p-2 rounded-full">
                          <Music className="h-6 w-6 text-primary" />
                        </div>
                        <span>FanTunes</span>
                      </div>
                      <div className="flex flex-1 items-center justify-end space-x-4">
                        <nav className="hidden md:flex items-center space-x-6">
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
                          <Button variant="ghost" size="sm" className="ml-4">
                            Log in
                          </Button>
                          {session.data?.user
                                    ? 
                                    <Button className='' onClick={()=>signOut()}>
                                       Logout 
                                    </Button>
                                    : <button className='' onClick={()=>signIn()}> SignIn </button>
                                  }
                                
                                  
                          <Button size="sm" className="px-6">
                            Sign up
                          </Button>
                        </nav>
                        <Button variant="outline" size="icon" className="md:hidden">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-5 w-5"
                          >
                            <line x1="4" x2="20" y1="12" y2="12" />
                            <line x1="4" x2="20" y1="6" y2="6" />
                            <line x1="4" x2="20" y1="18" y2="18" />
                          </svg>
                        </Button>
                      </div>
                    </div>
                  </header>             
  )
}

export default Appbar
 
