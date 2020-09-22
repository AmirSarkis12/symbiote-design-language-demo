import Datepicker from '../libs/vanilla-datepicker/js/Datepicker';
import DateRangePicker from '../libs/vanilla-datepicker/js/DateRangePicker';

document.addEventListener("DOMContentLoaded", function () {
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

export default {};
