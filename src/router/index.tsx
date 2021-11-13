import { Suspense } from "react";
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";

import { routes } from "./routes";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Suspense fallback={'loading...'}>
          {routes.map(({path, Component}) => (
            <Route
              exact
              path={path}
              component={Component}
            />
          ))}
        </Suspense>
      </Switch>
    </BrowserRouter>
  )
}

export default Router
