import React, { useEffect } from 'react';
import Prism from 'prismjs'
import Datepicker from '../../libs/vanillajs-datepicker/js/Datepicker';
import DateRangePicker from '../../libs/vanillajs-datepicker/js/DateRangePicker';


function DatePicker() {
    // React hook to get syntax highlighing. Similar to componentDidMount()
    useEffect(() => {
        Prism.highlightAll();

        const datePickerField = document.querySelector('.date-picker');
        const dateRangePickerField = document.querySelector('.date-range-picker');

        if (datePickerField) {
            new Datepicker(datePickerField, {

            });
        }

        if (dateRangePickerField) {
            new DateRangePicker(dateRangePickerField, {

            });
        }
    });

    const code1 =
        `<form>
    <label htmlFor="date">Date</label>
    <input type="text" className="date-picker" id="date"></input>
</form>

// Initialisation script
const datePickerField = document.querySelector('.date-picker');

if (datePickerField) {
    new Datepicker(datePickerField, {
        // Options go here. Refer to VanillaJS Date picker documentation
    });
}`;

    const code2 =
        `<form>
    <div className="date-range-picker">
        <label htmlFor="date">Date range</label>
        <input className="from-date" type="text" name="start"></input>
        <span>to</span>
        <input className="to-date" type="text" name="end"></input>
    </div>
</form>

// Initialisation script
const dateRangePickerField = document.querySelector('.date-range-picker');

if (dateRangePickerField) {
    new DateRangePicker(dateRangePickerField, {
        // Options go here. Refer to VanillaJS Date picker documentation
    });
}`;


    return (
        <div>
            <h1>Date Picker</h1>
            <p>The Date Picker component is useful for easily selecting a specific date or a range of days. We have used mymths's date picker due to its clean and accessable user interface as well as its wide range of configuration options. The full documentation can be found <a href="https://mymth.github.io/vanillajs-datepicker/" target="_blank" rel="noopener noreferrer">here</a>.</p>

            <h3>When to use this component</h3>
            <p>This component should be used when users need to input a date or date-range and will benefit from the context of a calendar.</p>

            <h3>Single date picker</h3>
            <form>
                <label htmlFor="date">Date</label>
                <input type="text" className="date-picker" id="date"></input>
            </form>

            <pre>
                <code className="language-javascript">
                    {code1}
                </code>
            </pre>

            <h3>Date range picker</h3>
            <form>
                <div className="date-range-picker">
                    <label htmlFor="date">Date range</label>
                    <input className="from-date" type="text" name="start"></input>
                    <span>to</span>
                    <input className="to-date" type="text" name="end"></input>
                </div>
            </form>

            <pre>
                <code className="language-javascript">
                    {code2}
                </code>
            </pre>
        </div>
    )
}

export default DatePicker

