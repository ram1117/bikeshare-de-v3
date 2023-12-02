"use client"

import React, { useRef } from "react"
import { Provider } from "react-redux"
import { makeStore, AppStore } from "./store"

interface StoreProviderProps {
  children: React.ReactNode
}

function StoreProvider({ children }: StoreProviderProps) {
  const storeRef = useRef<AppStore>()
  if (!storeRef.current) {
    storeRef.current = makeStore()
  }
  return <Provider store={storeRef.current}>{children}</Provider>
}

export default StoreProvider
