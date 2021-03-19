import React from 'react';
import { SearchForm } from './searchForm';
import { CustomTable } from './customTable';
import { useTableData } from './logic';

const App = (props: CustomHooksTableProps) => {
    const { feilds = [], serviceName } = props;
    const { onSearch, onFreshPage, tableProps } = useTableData(serviceName);
    return (
        <React.Fragment>
            {
                feilds?.length ?
                (<SearchForm feilds={feilds} onFinish={onSearch} />) : null
            }
            <CustomTable tableProps={tableProps} />
        </React.Fragment>
    );
}

export default App;
