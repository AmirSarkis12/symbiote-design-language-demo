import React, { useEffect } from 'react';
import Prism from 'prismjs'

function Select() {
    // React hook to get syntax highlighing. Similar to componentDidMount()
    useEffect(() => {
        Prism.highlightAll();
    });

    const code1 =
        `<form>
    <label htmlFor="shipping">Please select your shipping option</label>
    <select name="shipping">
        <option value="">AirMail</option>
        <option value="">AirMail Standard </option>
        <option value="">Ground Shipping</option>
        <option value="">Expedited</option>
        <option value="">Registered Ground</option>
        <option value="">Express</option>
        <option value="">Expressed Registered</option>
        <option value="">Snail Mail</option>
        <option value="">Courier</option>
        <option value="">Courier Express</option>
        <option value="">Registered Courier</option>
        <option value="">Pick-up</option>
        <option value="">After hours Pick-up</option>
    </select>
</form>`;

    return (
        <div>
            <h1>Select</h1>
            <form>
                <label htmlFor="shipping">What is your favourite letter of the alphabet?</label>
                <select name="shipping">
                    <option value="">A</option>
                    <option value="">B</option>
                    <option value="">C</option>
                    <option value="">D</option>
                    <option value="">E</option>
                    <option value="">F</option>
                    <option value="">G</option>
                    <option value="">H</option>
                    <option value="">I</option>
                    <option value="">J</option>
                    <option value="">K</option>
                    <option value="">L</option>
                    <option value="">M</option>
                    <option value="">N</option>
                    <option value="">O</option>
                    <option value="">P</option>
                    <option value="">Q</option>
                    <option value="">R</option>
                    <option value="">S</option>
                    <option value="">T</option>
                    <option value="">U</option>
                    <option value="">V</option>
                    <option value="">W</option>
                    <option value="">X</option>
                    <option value="">Y</option>
                    <option value="">Z</option>
                </select>
            </form>

            <p>The Select component allows users to choose an option from a long list.</p>

            <h3>When to use this component</h3>
            <p>This component should only be used when a long list of options is being presented.</p>

            <h3>When not to use this component</h3>
            <p>It is not recommended to use this component when only a short list of options are presented. Some users may have difficulty with Select components and as such a group of radio buttons may suffice in order to reduce overall complexity.</p>

            <h3>Snippet</h3>

            <form>
                <label htmlFor="shipping">Please select your shipping option</label>
                <select name="shipping">
                    <option value="">AirMail</option>
                    <option value="">AirMail Standard </option>
                    <option value="">Ground Shipping</option>
                    <option value="">Expedited</option>
                    <option value="">Registered Ground</option>
                    <option value="">Express</option>
                    <option value="">Expressed Registered</option>
                    <option value="">Snail Mail</option>
                    <option value="">Courier</option>
                    <option value="">Courier Express</option>
                    <option value="">Registered Courier</option>
                    <option value="">Pick-up</option>
                    <option value="">After hours Pick-up</option>
                </select>
            </form>

            <pre>
                <code className="language-javascript">
                    {code1}
                </code>
            </pre>

        </div>
    )
}

export default Select