"use client"
import {signIn, useSession , signOut} from "next-auth/react"

const Appbar = () => {
    const session = useSession()

    return (
    <div>
        <div className='flex justify-between'>
            <div>
                MusicSass
            </div>
            {session.data?.user
              ? <button className='' onClick={()=>signIn()}> SignIn </button>
              : <button className='' onClick={()=>signOut()}> LogOut </button>
            }
       </div>
    </div>
  )
}

export default Appbar
 
