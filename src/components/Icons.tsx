import React, { useEffect } from 'react';
import Prism from 'prismjs'

function Icons() {
    // React hook to get syntax highlighing. Similar to componentDidMount()
    useEffect(() => {
        Prism.highlightAll();
    });

    const code1 =
        `<i className="las la-biking xl"></i>
<i className="las la-biking lg"></i>
<i className="las la-biking"></i>
<i className="las la-biking sm"></i>
<i className="las la-biking xs"></i>
<i className="las la-biking xxs"></i>`;

    const code2 =
        `<i className="las la-globe xl"></i>
<i className="las la-wind xl"></i>
<i className="las la-fire xl"></i>
<i className="las la-globe inverted xl"></i>
<i className="las la-wind inverted xl"></i>
<i className="las la-fire inverted xl"></i>`;
    return (
        <div>
            <h1>Icons</h1>
            <p>We have used an open-source icon library from <a href="https://icons8.com/" target="_blank" rel="noopener noreferrer">Icon8</a> called Line Awesome. It is an extensive, free and most importantly beautifully curated set of icons.</p>

            <p>Line awesome provides all the features of the popular Font Awesome font library but at no cost, while maintaing a 1:1 swap of all icons within the library. If you are familar with how to use Font Awesome then there is no learning curve when using the icons that we have packaged in this design system.</p>

            <h3>When to use this component</h3>
            <p>Use icons for supplementary information that is related to the content surrounding it. For example, instead of using the word ‘Warning’ you may use Line Awesome's exclamation icon to quickly convey your point.</p>

            <h3>When not to use this component</h3>
            <p>Do not use icons next to each other. It can cause confusion as icons draw attention and it is difficult to establish hiesrachy when multiple same sied icons are within the same proximity.</p>

            <h3>Examples</h3>
            <div className="icons-examples">
                <i className="las la-home xl"></i>
                <i className="las la-exclamation-circle xl"></i>
                <i className="las la-calendar xl"></i>
                <i className="las la-comments xl"></i>
                <i className="las la-paste xl"></i>
                <i className="las la-wrench xl"></i>
                <i className="las la-dollar-sign xl"></i>
                <i className="las la-bell xl"></i>
                <i className="lab la-twitter xl"></i>
                <i className="las la-wallet xl"></i>
                <i className="las la-music xl"></i>
                <i className="las la-leaf xl"></i>
                <i className="las la-biking xl"></i>
                <i className="las la-heart xl"></i>
                <i className="las la-calculator xl"></i>
                <i className="las la-info xl"></i>
                <i className="las la-cloud xl"></i>
                <i className="las la-hand-holding-heart xl"></i>
                <i className="las la-user xl"></i>
                <i className="las la-truck xl"></i>
                <i className="las la-beer xl"></i>
                <i className="las la-tachometer-alt xl"></i>
                <i className="las la-bullhorn xl"></i>
                <i className="las la-print xl"></i>
                <i className="las la-route xl"></i>
                <i className="lab la-facebook xl"></i>
                <i className="las la-tag xl"></i>
                <i className="las la-power-off xl"></i>
                <i className="las la-tools xl"></i>
                <i className="las la-save xl"></i>
                <i className="lab la-instagram xl"></i>
                <i className="las la-coffee xl"></i>
                <i className="las la-list xl"></i>
                <i className="las la-sync xl"></i>
                <i className="las la-trash xl"></i>
                <i className="las la-smile-beam xl"></i>
                <i className="las la-lightbulb xl"></i>
                <i className="las la-chart-pie xl"></i>
                <i className="las la-running xl"></i>
                <i className="las la-handshake xl"></i>
                <i className="las la-key xl"></i>
                <i className="las la-cog xl"></i>
            </div>

            <h3>Options</h3>

            <p>The following options can be applied and combined within the Icon component.</p>
            <ul className="styled-list">
                <li><b>Size</b> - Extra large, large, medium (default), small, extra small, extra extra small. Use this to match the context, for example, a small button makes sense next to a paragrah.</li>
                <li><b>Color</b> - Default, Inverted. Use this option when using an icon on a dark or light background in order to achieve the correct contrast</li>
            </ul>

            <h3>Size</h3>
            <div className="icons-size">
            <i className="las la-biking xl"></i>
            <i className="las la-biking lg"></i>
            <i className="las la-biking"></i>
            <i className="las la-biking sm"></i>
            <i className="las la-biking xs"></i>
            <i className="las la-biking xxs"></i>
            </div>


            <pre>
                <code className="language-javascript">
                    {code1}
                </code>
            </pre>

            <h3>Color</h3>
            <div className="icons-color">
                <div className="light">
                    <i className="las la-globe xl"></i>
                    <i className="las la-wind xl"></i>
                    <i className="las la-fire xl"></i>
                </div>

                <div className="dark">
                    <i className="las la-globe inverted xl"></i>
                    <i className="las la-wind inverted xl"></i>
                    <i className="las la-fire inverted xl"></i>
                </div>
            </div>
            <pre>
                <code className="language-javascript">
                    {code2}
                </code>
            </pre>

            <h3>More Information</h3>
            <p>For more information on the available set of icons, please visit Icon8's Line Awesome page <a href="https://icons8.com/line-awesome" target="_blank" rel="noopener noreferrer">here</a>.</p>
        </div>
    )
}

export default Icons