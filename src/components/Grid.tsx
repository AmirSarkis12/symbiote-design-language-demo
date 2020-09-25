
import React, { useEffect } from 'react';
import Prism from 'prismjs'

function Grid() {
    // React hook to get syntax highlighing. Similar to componentDidMount()
    useEffect(() => {
        Prism.highlightAll();
    });

    const code1 =
    `<div className="container">
    <div className="row">
        <div className="col-1"><p className="inverted">1</p></div>
        <div className="col-1"><p className="inverted">1</p></div>
        <div className="col-1"><p className="inverted">1</p></div>
        <div className="col-1"><p className="inverted">1</p></div>
        <div className="col-1"><p className="inverted">1</p></div>
        <div className="col-1"><p className="inverted">1</p></div>
        <div className="col-1"><p className="inverted">1</p></div>
        <div className="col-1"><p className="inverted">1</p></div>
        <div className="col-1"><p className="inverted">1</p></div>
        <div className="col-1"><p className="inverted">1</p></div>
        <div className="col-1"><p className="inverted">1</p></div>
        <div className="col-1"><p className="inverted">1</p></div>
    </div>
    <div className="row">
        <div className="col-3"><p className="inverted">3</p></div>
        <div className="col-3"><p className="inverted">3</p></div>
        <div className="col-3"><p className="inverted">3</p></div>
        <div className="col-3"><p className="inverted">3</p></div>
    </div>
    <div className="row">
        <div className="col-4"><p className="inverted">4</p></div>
        <div className="col-4"><p className="inverted">4</p></div>
        <div className="col-4"><p className="inverted">4</p></div>
    </div>
    <div className="row">
        <div className="col-6"><p className="inverted">6</p></div>
        <div className="col-6"><p className="inverted">6</p></div>
    </div>
    <div className="row">
        <div className="col-12"><p className="inverted">12</p></div>
    </div>
</div>`

    const code2 =
        `<div className="container">
    <div className="row">
        <div className="col-4 col-xs-push-8"><p className="inverted">First, but visually last</p></div>
        <div className="col-4 col-xs-pull-4"><p className="inverted">Second, but visually first</p></div>
        <div className="col-4 col-xs-pull-4"><p className="inverted">Last, but visually second</p></div>
    </div>
</div>`

    const code3 =
        `<div className="container">
    <div className="row">
        <div className="col-6"><p className="inverted">6 wide and no offset</p></div>
        <div className="col-3 col-xs-offset-2"><p className="inverted">3 wide and 2 offset</p></div>
    </div>
</div>`

    const code4 =
        `<div className="container-fluid">
    <div className="row">
        <div className="col-3"><p className="inverted">3</p></div>
        <div className="col-3"><p className="inverted">3</p></div>
        <div className="col-3"><p className="inverted">3</p></div>
        <div className="col-3"><p className="inverted">3</p></div>
    </div>
    <div className="row">
        <div className="col-6"><p className="inverted">6</p></div>
        <div className="col-6"><p className="inverted">6</p></div>
    </div>
    <div className="row">
        <div className="col-12"><p className="inverted">12</p></div>
    </div>
</div>`

    return (
        <div>
            <h1>Grid</h1>

            <p>Our flexible grid is a mobile-first system that uses a series of containers, rows, and columns to lay out and align content. It is based upon the grid system from <a href="https://getbootstrap.com/" target="_blank" rel="noopener noreferrer">Bootstrap</a> and as such follows the tried and true twelve-column layout. After reviewing many government websites it was clear that the grids from bootstrap are commonly used for responsive layouts and that our users are likely to already be familiar with using it.</p>

            <h3>Breakpoints</h3>
            <p>Similar to Bootrap we use a series of breakpoints to ensure that users with every device have a curated user interface. Our breakpoints are as follows:</p>
            <ul className="styled-list">
                <li><p>xs-breakpoint: 576px</p></li>
                <li><p>sm-breakpoint: 768px</p></li>
                <li><p>md-breakpoint: 992px</p></li>
                <li><p>lg-breakpoint: 1366px</p></li>
            </ul>

            <p>These breakpoints are setup in the _settings.scss file and can be modified depending on your use case.</p>

            <h3>Structure</h3>
            <p>Containers are  used to contain, pad, and align the content within them.</p>

            <p>Rows are wrappers for columns. Columns have horizontal padding (gutter) for controlling the space between them. This padding is counteracted in the rows with negative margins to ensure that the content in your columns are visually aligned down the left side.</p>

            <p>Columns dictate the number of columns you’d like to use out of the possible 12 per row. So, if you want three equal-width columns across, you can use .col-4.</p>

            <h3>Visual example</h3>
            <p>The below example illustrates the 12 column structure. Note: extra styling is applied to show the visual distiction between the columns and rows.</p>

            <div className="grid-demo">
                <div className="container">
                    <div className="row">
                        <div className="col-1"><p className="inverted">1</p></div>
                        <div className="col-1"><p className="inverted">1</p></div>
                        <div className="col-1"><p className="inverted">1</p></div>
                        <div className="col-1"><p className="inverted">1</p></div>
                        <div className="col-1"><p className="inverted">1</p></div>
                        <div className="col-1"><p className="inverted">1</p></div>
                        <div className="col-1"><p className="inverted">1</p></div>
                        <div className="col-1"><p className="inverted">1</p></div>
                        <div className="col-1"><p className="inverted">1</p></div>
                        <div className="col-1"><p className="inverted">1</p></div>
                        <div className="col-1"><p className="inverted">1</p></div>
                        <div className="col-1"><p className="inverted">1</p></div>
                    </div>
                    <div className="row">
                        <div className="col-3"><p className="inverted">3</p></div>
                        <div className="col-3"><p className="inverted">3</p></div>
                        <div className="col-3"><p className="inverted">3</p></div>
                        <div className="col-3"><p className="inverted">3</p></div>
                    </div>
                    <div className="row">
                        <div className="col-4"><p className="inverted">4</p></div>
                        <div className="col-4"><p className="inverted">4</p></div>
                        <div className="col-4"><p className="inverted">4</p></div>
                    </div>
                    <div className="row">
                        <div className="col-6"><p className="inverted">6</p></div>
                        <div className="col-6"><p className="inverted">6</p></div>
                    </div>
                    <div className="row">
                        <div className="col-12"><p className="inverted">12</p></div>
                    </div>
                </div>
            </div>
            <pre>
                <code className="language-javascript">
                    {code1}
                </code>
            </pre>

            <h3>Column Options</h3>
            <p>The following options can be applied to the columns</p>

            <ul className="styled-list">
                <li><b>Pull and push</b> - The visual order of columns within a row can be modified by setting 'pull' and 'push' classes on each column.</li>
                <li><b>Offset</b> - A column can offset by a specified number of columns by using the offset class name.</li>
            </ul>

            <h3>Pull and push</h3>
            <div className="grid-demo">
                <div className="container">
                    <div className="row">
                        <div className="col-4 col-xs-push-8"><p className="inverted">First, but visually last</p></div>
                        <div className="col-4 col-xs-pull-4"><p className="inverted">Second, but visually first</p></div>
                        <div className="col-4 col-xs-pull-4"><p className="inverted">Last, but visually second</p></div>
                    </div>
                </div>
            </div>
            <pre>
                <code className="language-javascript">
                    {code2}
                </code>
            </pre>

            <h3>Offset</h3>
            <div className="grid-demo">
                <div className="container">
                    <div className="row">
                        <div className="col-6"><p className="inverted">6 wide and no offset</p></div>
                        <div className="col-3 col-xs-offset-2"><p className="inverted">3 wide and 2 offset</p></div>
                    </div>
                </div>
            </div>
            <pre>
                <code className="language-javascript">
                    {code3}
                </code>
            </pre>

            <h3>Container Option</h3>
            <p>The following option can be applied to the container</p>

            <ul className="styled-list">
                <li><b>Fluid</b> - Container can be the full width, spanning the entire width of your viewport.</li>
            </ul>
            <pre>
                <code className="language-javascript">
                    {code4}
                </code>
            </pre>
        </div>
    )
}

export default Grid