import React from "react";
import { Router } from "@reach/router";
import Events from "./pages/Events";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Radio from "./pages/Radio";
import ArtworkDetails from "./pages/ArtworkDetails";
import { AnimatePresence } from "framer-motion";
import { animateDirection } from "./components/Page";

export const paths = {
  home: "/",
  about: "/about",
  gallery: "/gallery",
  events: "/events",
  radio: "/radio",
  artwork: "/artwork",
};

const Routes = ({ location }) => {
  console.log(location);
  return (
    <AnimatePresence>
      <Router location={location} key={location.pathname}>
        <About
          isVisible={location.pathname === paths.about}
          direction={animateDirection.left}
          path={paths.about}
        />
        <Gallery
          isVisible={location.pathname === paths.gallery}
          direction={animateDirection.right}
          path={paths.gallery}
        />
        <Events
          isVisible={location.pathname === paths.events}
          direction={animateDirection.bottom}
          path={paths.events}
        />
        <Radio
          isVisible={location.pathname === paths.radio}
          direction={animateDirection.bottom}
          path={paths.radio}
        />
        <ArtworkDetails
          isVisible={location.pathname === paths.radio}
          direction={animateDirection.top}
          path={paths.artwork}
        />
      </Router>
    </AnimatePresence>
  );
};

export default Routes;
