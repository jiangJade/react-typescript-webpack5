import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import App from "./components/index";

const data = {
    feilds: [
        { feildName: 'test', feildLabel: '测试' },
        { feildName: 'test', feildLabel: '测试' },
        { feildName: 'test', feildLabel: '测试' },
        { feildName: 'test', feildLabel: '测试' },
        { feildName: 'test', feildLabel: '测试' },
    ]
}
ReactDOM.render(<App {...data} />, document.getElementById("root"));