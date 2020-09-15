import React from "react";
import ArtworkPage from "../ArtworkPage";

const Cinder = () => {
    return (
        <ArtworkPage
            title="Cinder"
            artist="Pat Younis"
            imageUrls={["img/cinder.jpg"]}
            description={
                <div>
                    Part of an installation of the same name, Cinder is designed like a campfire setting to encourage 
                    interaction between two people over a smoldering (virtual) fire. The concept was to create a space 
                    that was more for facilitating conversation, rather than having an objective that tied directly 
                    with the interactive elements.
                </div>
            }
            date="2017"
            medium="Leap motion, Unity game engine, camp"
        />
    );
};

export default Cinder;
