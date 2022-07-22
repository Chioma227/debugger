import React from 'react'
import { useState } from 'react'
// import { useEffect } from 'react'
import Login from "./Login"
import LogOut from "./Logout"

const file = () => {
    const [showUser, setShowUser] = useState(true)
    const SetUser =() => {
        if(setShowUser){
            return <Login/>
        }else if(!setShowUser){
            return <LogOut/>
        }
    }
  return (
    <div>
      {SetUser}
    </div>
  )
}

export default file
