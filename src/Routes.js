import React from "react";
import { Router, Location } from "@reach/router";
import Events from "./pages/Events";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Radio from "./pages/Radio";
import ArtworkDetails from "./pages/ArtworkDetails";
import { AnimatePresence } from "framer-motion";

export const paths = {
  home: "/",
  about: "/about",
  gallery: "/gallery",
  events: "/events",
  radio: "/radio",
  artwork: "/artwork/:id",
};

const Routes = ({ location }) => {
  console.log(location);
  return (
    <AnimatePresence>
      <Router location={location} key={location.pathname}>
        <About
          isVisible={location.pathname === paths.about}
          direction="left"
          path={paths.about}
        />
        <Gallery
          isVisible={location.pathname === paths.gallery}
          direction="right"
          path={paths.gallery}
        />
        <Events
          isVisible={location.pathname === paths.events}
          direction="bottom"
          path={paths.events}
        />
        <Radio
          isVisible={location.pathname === paths.radio}
          direction="bottom"
          path={paths.radio}
        />
        <ArtworkDetails path={paths.artwork} />
      </Router>
    </AnimatePresence>
  );
};

export default Routes;
