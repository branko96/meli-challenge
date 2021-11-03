import express from "express";
const router = express.Router();
import axios, { AxiosResponse } from "axios";
import {
  MLA_BASE_URL,
  MLA_GET_ITEM_DESC_PATH,
  MLA_GET_ITEM_PATH,
  MLA_SEARCH_PATH
} from "../utils/constants";
import {getCategories, parseItems, parseItemShow} from "../utils/itemHelper";

router.get( "/", ( req, res ) => {
    res.send( "Hello world  " );
});

router.get( "/items", async ( req, res ) => {
    if (!req.query.query) {
        res.send("Query is required")
        return
    }
    const { query } = req.query

    const response = await axios.get(`${MLA_BASE_URL}${MLA_SEARCH_PATH}${query}`).then((r: AxiosResponse<any>) => {
        const { data: { available_filters: filters, results } } = r
        const categories = getCategories(filters)
        const rawItems = results.slice(0, 4)
        const items = parseItems(rawItems)

        return {
            categories,
            items
        }
    });

    res.send(response);
});

router.get( "/items/:id", async ( req, res ) => {
  if (!req.params.id) {
    res.send("Item ID is required")
  }
  const { id } = req.params

  const description = await axios.get(`${MLA_BASE_URL}${MLA_GET_ITEM_PATH}${id}${MLA_GET_ITEM_DESC_PATH}`).then((r: AxiosResponse<any>) => {
    const {
      data: {
        plain_text
      }
    } = r
    return plain_text
  });

  const response = await axios.get(`${MLA_BASE_URL}${MLA_GET_ITEM_PATH}${id}`).then((r: AxiosResponse<any>) => {
    const { data: rawItem } = r
    const item = parseItemShow(rawItem)

    return {
      ...item,
      description
    }
  });

  res.send(response);
});

export default router;
