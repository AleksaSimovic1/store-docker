"use client"

import Link from "next/link"
import { useParams } from "next/navigation"
import React from "react"

export default function LocalizedClientLink({
  children,
  href,
  ...props
}: {
  children?: React.ReactNode
  href: string
  className?: string
  onClick?: () => void
  passHref?: true
  [x: string]: any
}) {
  const { countryCode } = useParams()

  return (
    <Link href={`/${countryCode}${href}`} {...props}>
      {children}
    </Link>
  )
}