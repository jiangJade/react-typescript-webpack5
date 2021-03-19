import React from 'react';
import { Select } from 'antd';

const { Option } = Select;

interface CustomSelectProps {
    selectData: ItemInterface[];
}

export const CustomSelect = (props: CustomSelectProps) => {
    const { selectData = [] } = props;
    return (
        <Select>
            {(selectData || []).map(item => (
                <Option key={item.label} value={item.value}>{item.value}</Option>
            )}
        </Select>
    )
}