import {ATTR_ITEM_CONDITION} from "./constants";

export const getCategories = (filters: any[]) => {
  const categoryFilter = filters.filter((f: any) => f.id === "category")[0]

  return categoryFilter?.values.map((category: any) => category.name) || []
}

export const getCondition = (attributes: any[]) => {
  return attributes.filter((attr: any) => attr.id === ATTR_ITEM_CONDITION)[0].value_name
}

export const parseItems = (rawItems: any[]) => {
  return rawItems.map((item: any) => parseItem(item))
}

export const parseItem = (item: any) => {
  const {
    id,
    title,
    thumbnail,
    shipping: {
      free_shipping
    },
    price: amount,
    prices: {
      presentation
    },
    attributes
  } = item

  const condition = getCondition(attributes)
  const { display_currency: currency } = presentation

  return {
    id,
    title,
    picture: thumbnail,
    free_shipping,
    price: {
      amount,
      currency
    },
    condition,
  }
}

export const parseItemShow = (item: any) => {
  const {
    id,
    title,
    pictures,
    shipping: {
      free_shipping
    },
    price: amount,
    currency_id: currency,
    sold_quantity,
    attributes
  } = item

  const condition = getCondition(attributes)
  const picture = pictures[0].secure_url

  return {
    id,
    title,
    picture,
    free_shipping,
    price: {
      amount,
      currency
    },
    condition,
    sold_quantity
  }
}
