import React from 'react';
import { DatePicker } from 'antd';

const { RangePicker } = DatePicker;

interface CustomRangePickerProps {
    selectData: ItemInterface[];
}

export const CustomRangePicker = () => {
    return (
        <RangePicker />
    )
}