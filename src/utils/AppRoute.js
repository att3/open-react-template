import React from 'react';
import { Route } from 'react-router-dom';

const AppRoute = ({
  component: Component,
  layout: Layout,
  ...rest
}) => {
  console.log("a3")
  Layout = (Layout === undefined) ? props => (<>{props.children}</>) : Layout;
  console.log("a3")

  return (
    <Route
      {...rest}
      render={props => (
        <Layout>
          <Component {...props} />
        </Layout>
      )} />
  );
}

export default AppRoute;