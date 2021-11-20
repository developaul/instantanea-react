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
        {routes.map(({ path, Component }) => (
          <Route
            key={path}
            exact
            path={path}
            render={() => (
              <Suspense
                fallback={'loading...'}
              >
                <Component />
              </Suspense>
            )}
          />
        ))}
      </Switch>
    </BrowserRouter>
  )
}

export default Router
