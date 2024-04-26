"use client"

import React, { ReactNode } from "react"
import { Provider } from "jotai"

export default function JotaiProvider({ children }: { children: ReactNode }) {
  return <Provider>{children}</Provider>
}