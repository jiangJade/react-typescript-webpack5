import React from 'react';

import { Table } from 'antd';

export const CustomTable = (props: any) => {
    
    const d = [{
        type: 'dddd'
    }]
    const { tableProps } = props;
    return (
        <Table {...tableProps} />
    )
}