import React, { useMemo } from 'react';
import { DatePicker, Form, Row, Col, Button, Input } from 'antd';
import { CustomRangePicker, CustomSelect } from './component';
import styles from './index.less';

interface SearchFormProps {
    feilds: FeildsItem[];
    onFinish: (params: any) => void
}

// const FormItemComponent = {
//     rangePicker: CustomRangePicker,
//     select: CustomSelect,
//     input: Input
// }

const formItemComponent = (item: FeildsItem) => {
    switch (item?.feildType) {
        case 'rangePicker':
            return (<CustomRangePicker />);
        case 'select':
            return (<CustomSelect selectData={item?.selectData} />);
        case 'input':
            return (<Input placeholder="请输入" />);
        default:
            return (<Input placeholder="请输入" />);
    }
}

export const SearchForm = (props: SearchFormProps) => {
    const { feilds, onFinish } = props;
    const [form] = Form.useForm();
    // 计算偏移值
    const offsetResult = useMemo(() => {
        const offesetCount = (2 - (feilds.length % 3)) * 8;
        return offesetCount;
    }, [feilds?.length]);
    return (
        <div className={styles.searchFormBox}>
            <Form className={styles.advancedSearchForm} onFinish={onFinish}>
                <Row gutter={24}>
                    {
                        feilds.map(item => (
                            <Col span={8} key={item.feildName}>
                                <Form.Item
                                    name={`${item.feildName}`}
                                    label={`${item.feildLabel}`}
                                >
                                    {formItemComponent(item)}
                                </Form.Item>
                            </Col>
                        ))
                    }
                    <Col span={8} offset={offsetResult} className={styles.submitBtn}>
                        <Button type="primary" htmlType="submit">
                            查询
                        </Button>
                        <Button onClick={() => { form.resetFields() }} className={styles.marginLeft8}>
                            重置
                        </Button>
                    </Col>
                </Row>
            </Form>
            <DatePicker />
        </div>
    );
}