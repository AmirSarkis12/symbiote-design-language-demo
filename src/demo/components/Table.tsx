import React, { useEffect } from 'react';
import Prism from 'prismjs'

function Table() {
    // React hook to get syntax highlighing. Similar to componentDidMount()
    useEffect(() => {
        Prism.highlightAll();
    });

    const code1 =
        `<table>
    <thead>
        <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Date of Birth</th>

        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Notorious</td>
            <td>Big</td>
            <td>(03) 9999 9999</td>
            <td><a href="mailto:x@x.com">thenotoriousbig@badboyrecords.com</a></td>
            <td>21/05/1972</td>
        </tr>
        <tr>
            <td>Grandmaster</td>
            <td>Flash</td>
            <td>(02) 8888 8888</td>
            <td><a href="mailto:x@x.com">gmasterflash@sugarhillrecords.com</a></td>
            <td>01/01/1958</td>
        </tr>
        <tr>
            <td>Puff</td>
            <td>Daddy</td>
            <td>(04) 7777 7777</td>
            <td><a href="mailto:x@x.com">pdiddy@uptownrecords.com</a></td>
            <td>04/11/1969</td>
        </tr>
        <tr>
            <td>Tupac</td>
            <td>Shakur</td>
            <td>(02) 8888 8888</td>
            <td><a href="mailto:x@x.com">tupac@drowrecords.com</a></td>
            <td>16/06/1971</td>
        </tr>
    </tbody>
</table>`;

    return (
        <div>
            <h1>Table</h1>
            <p>The Table component is a mobile accessable way of showing tabular data in columns and rows.</p>

            <h3>When to use this component</h3>
            <p>This component should be used when tabular information, such as statistical data, timetables or an inventory needs to be displayed.</p>

            <h3>When not to use this component</h3>
            <p>Do not use this component when the data being rendered can more simplt displayed in a list.</p>

            <h3>Snippet</h3>
            <table>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Date of Birth</th>

                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Notorious</td>
                        <td>Big</td>
                        <td>(03) 9999 9999</td>
                        <td><a href="mailto:x@x.com">thenotoriousbig@badboyrecords.com</a></td>
                        <td>21/05/1972</td>
                    </tr>
                    <tr>
                        <td>Grandmaster</td>
                        <td>Flash</td>
                        <td>(02) 8888 8888</td>
                        <td><a href="mailto:x@x.com">gmasterflash@sugarhillrecords.com</a></td>
                        <td>01/01/1958</td>
                    </tr>
                    <tr>
                        <td>Puff</td>
                        <td>Daddy</td>
                        <td>(04) 7777 7777</td>
                        <td><a href="mailto:x@x.com">pdiddy@uptownrecords.com</a></td>
                        <td>04/11/1969</td>
                    </tr>
                    <tr>
                        <td>Tupac</td>
                        <td>Shakur</td>
                        <td>(02) 8888 8888</td>
                        <td><a href="mailto:x@x.com">tupac@drowrecords.com</a></td>
                        <td>16/06/1971</td>
                    </tr>
                </tbody>
            </table>

            <pre>
                <code className="language-javascript">
                    {code1}
                </code>
            </pre>
        </div>
    )
}

export default Table

