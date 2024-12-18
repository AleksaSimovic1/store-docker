import React from "react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../shared/ui/select"
import { type SelectProps } from "@radix-ui/react-select"
import { type Country } from "@medusajs/medusa"
import Flag from "../shared/ui/flag"

interface CountrySelectProps extends SelectProps {
  countries: Country[]
}

export default function CountrySelect({
  countries,
  ...rest
}: CountrySelectProps) {
  return (
    <Select {...rest}>
      <SelectTrigger>
        <SelectValue placeholder="Select a country" />
      </SelectTrigger>
      <SelectContent
        ref={(ref) => {
          if (!ref) return
          ref.ontouchstart = (e) => {
            e.preventDefault()
          }
        }}
      >
        {countries.map((country) => (
          <SelectItem value={country.iso_2} key={country.id}>
            <span className="sr-only">{country.display_name}</span>
            <Flag countryCode={country.iso_2} />
            {country.display_name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
