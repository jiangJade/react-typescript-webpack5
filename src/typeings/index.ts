declare module 'react-dom';
declare module 'react';
declare interface ItemInterface {
    label: string;
    value: number | string;
}
declare interface FeildsItem {
    feildName: string;
    feildLabel: string;
    feildType?: string;
    selectData?: ItemInterface[];
}
declare interface CustomHooksTableProps {
    feilds: FeildsItem[];
    serviceName?: (arg0: any) => Promise<{ success: any; data: { total?: any; records?: any; }; }>;
    dataSource?: any[];
}