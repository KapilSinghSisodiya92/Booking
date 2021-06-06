import React, { useState } from 'react'
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const DateTime = ({ startDate, onDateChange }) => {
    return (
        <DatePicker selected={startDate} onChange={(date) => onDateChange(date)} />
    );
}

export default DateTime
