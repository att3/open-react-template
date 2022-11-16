import React, { useRef, useEffect } from 'react';
import { useLocation, Switch } from 'react-router-dom';
import AppRoute from './utils/AppRoute';
import ScrollReveal from './utils/ScrollReveal';
import ReactGA from 'react-ga';

// Layouts
import LayoutDefault from './layouts/LayoutDefault';

// Views 
import Home from './views/Home';


const trackPage = page => {
  ReactGA.set({ page });
  ReactGA.pageview(page);
};

const App = () => {

  console.log("a")
  const childRef = useRef();
  console.log("a")
  let location = useLocation();
  console.log("a")

  useEffect(() => {
    const page = location.pathname;
    console.log("ab")
    document.body.classList.add('is-loaded')
    console.log("ab", childRef)
    if (childRef != null && childRef.current != null)
      childRef.current.init();
    console.log("ab")
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  console.log("a1");


return (
  <ScrollReveal
    ref={childRef}
    children={() => (
      <Switch>
        <AppRoute path="*" component={Home} layout={LayoutDefault} />
      </Switch>
    )} />
);
}

export default App;