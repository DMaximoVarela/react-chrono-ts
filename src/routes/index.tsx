import Landing from "@Pages/landing";
import { Route, Switch } from "wouter";

const Router = () => (
  <>
    <Switch>
      <Route path="/" component={Landing} />
      <Route>404: No such page!</Route>
    </Switch>
  </>
);

export default Router;
