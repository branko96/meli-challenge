import React from "react"
import { Switch, Route } from "react-router-dom"
import Home from "../containers/Home"
import ProductDetail from "../containers/ProductDetail"
import ItemsSearch from "../containers/ItemsSearch";

const RootNavigator = () => {
  return (
      <div>
          <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/items/:id" component={ProductDetail} />
              <Route path="/items" component={ItemsSearch} />
          </Switch>
      </div>
    )
}

export default RootNavigator
