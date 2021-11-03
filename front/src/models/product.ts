type CurrencyType = "ARS" | "USD"
type ConditionType = "Nuevo" | "Usado"

interface PriceType {
  amount: number
  currency: CurrencyType
  decimals: number
}

export interface Product {
  id: string
  title: string
  picture: string
  price: PriceType
  condition: ConditionType
  freeShipping: boolean
  soldQuantity?: number
  description?: string
}
