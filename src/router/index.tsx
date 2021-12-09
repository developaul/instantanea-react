import { Suspense } from "react";
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";

import UserProvider from '../Providers/UserProvider';

import { routes } from "./routes";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        {routes.map(({ path, Component, isPrivate, FallBack }) => (
          <Route
            key={path}
            exact
            path={path}
            render={() => (
              <Suspense
                fallback={FallBack ? <FallBack /> : 'loading'}
              >
                {(!isPrivate) ? (
                  <Component />
                ) : (
                  <UserProvider>
                    <Component />
                  </UserProvider>
                )}
              </Suspense>
            )}
          />
        ))}
      </Switch>
    </BrowserRouter>
  )
}

export default Router
