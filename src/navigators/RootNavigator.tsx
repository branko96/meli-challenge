import React from "react"
import { HashRouter as Router, Switch, Route } from "react-router-dom"
import Home from "../containers/Home"
import ProductDetail from "../containers/ProductDetail"

const RootNavigator = () => {

    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/product" component={ProductDetail} />
                </Switch>
            </div>
        </Router>
    )
}

export default RootNavigator
