import React from 'react';

function Typography() {
    return (
        <div>
            <h1>Typography</h1>

            <h3>Relative units</h3>
            <p>We have set a base font size that all other font sizes will be derived from. We chose to use a relative unit as all other fonts sizes will be scaled up or down from this in an expected manner. Most browsers set 1em unit as 16px, therefore all font sizes will be scaled up or down from this value. We have set the base font size by assigning a font size to the html in the _normalice.scss file.</p>

            <p>We have also used relative units (rem) to set font sizes for other elements. This is crucial because it means that changing the base font size will also change all other font sizes. So if we want to adjust the font sizes for specifc breakpoints, we can modify all font sizes by adjusting the base font size alone. This is also crucial as it it allows visually impaired users to scale up or down their fonts consistently, helping to meet the WCAG 2.1 AA guideline of allowing users to scale fonts by up to 200%.</p>

            <h3>Line heights</h3>
            <p>A common recommended line height for paragraphs of text is usually between 1.3 and 1.7. This value is dependant on the typeface being used with finer fonts recommended being closer to the lower end of that recommendation. The opposite is true if it’s a heavy or optically large font as users with poor vision may benefit from the extra spacing around heavier groups of text. As we have opted to use Open Sans Light for headings and Open Sans Regular as it is a visually light font we have chosen line heights closer to the lower end of the spectrum.</p>

            <h3>Visual hierarchy</h3>

            <p>A key step in establishing a visual hierarchy is sticking with a limited range of font sizes to pick from. Instead of randomly assigning font sizes to our headings levels, we used a minor third modular scale to help assign sizes based on a consistent ratio. We have aimed to make the structure of a page as clear as possible.</p>

            <div className="visual-hierarchy">
                <h1>Heading 1</h1>
                <h3>Heading 2</h3>
                <h3>Heading 3</h3>
                <h4>Heading 4</h4>
                <h5>Heading 5</h5>
                <p>Body</p>
            </div>

            <h3>Heading levels</h3>

            <p>When presenting content choose heading levels that naturally promote hierarchy, never choose solely based on the what heading size may look the most appealing. For example, if a larger heading size looks nicer when sitting below a smaller heading size it may confuse screen readers as they read in order of heading sizes. </p>
        </div>

    )
}

export default Typography