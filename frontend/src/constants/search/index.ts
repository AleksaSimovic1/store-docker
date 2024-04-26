const SEARCH_ENDPOINT =
  process.env.NEXT_PUBLIC_SEARCH_ENDPOINT ?? "http://localhost:7700"
const SEARCH_API_KEY = process.env.NEXT_PUBLIC_SEARCH_API_KEY ?? ""

const sortOrderMap: Record<string, string> = {
  newest: "-created_at",
  oldest: "created_at",
  price_asc: "variants.prices.amount",
  price_desc: "-variants.prices.amount",
}

export { SEARCH_ENDPOINT, SEARCH_API_KEY, sortOrderMap }