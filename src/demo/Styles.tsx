import React from 'react';

function Styles() {
    return (
        <div className="container">
            <div className="col-12">
                <h1>Styles</h1>

                <p>We have sought to reduce the complexity in styling and re-styling our design system as much as possible. Our code is based on a simple atomic structure in that the least complex units of design (atoms) are the building blocks of our design system which we use to craft molecules which use one or more atoms and from their more complex components such as our Main Navigation component or our Carousel component which are considered as organisms.</p>

                <p>We have endevoured to use simple, clear and refined stylesheets which have little to no overridding or competing rules. This serves developers who wish to modify this design system as hunting around for rules and mixins has been reduced to an absolute minimum.</p>

                <p>Our file structure has also been kept extremely flat, in that a single stylesheet handles all the settings for our design system. A single location (_settings.scss) governs the main look and feel. This leads to reduced time wasted hunting down all the locations where certain colours, spacing or tyopgraphy is set.</p>

                <p>We have collated the mixins used through out the system in to their own stylesheet. Therefore, leading to very consistant styles throughout the design system.</p>

                <p>Every component within the atomic design uses its own stylesheet therefore every component can be modified in isolation.</p>

            </div>
        </div>
    )

}

export default Styles