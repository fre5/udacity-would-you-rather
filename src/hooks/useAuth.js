import React, { createContext, useContext, useState } from 'react'

const authContext = createContext()

const useAuth = () => {
  const [authed, setAuthed] = useState(false)

  return {
    authed,
    login() {
      return new Promise((res) => {
        setAuthed(true)
        res()
      })
    },
    logout() {
      return new Promise((res) => {
        setAuthed(false)
        res()
      })
    }
  }
}

export const AuthProvider = ({ children }) => {
  const auth = useAuth()

  return <authContext.Provider value={auth} />
}

export default function AuthConsumer() {
  return useContext(authContext)
}

