import React from "react";
import {Row, Col} from "antd"


const VerticalSpacer = () => {

    return (
        <>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col span={12} className="gutter-row">
                    <br/>
                    </Col>
                </Row>
        </>
    )
}

export default VerticalSpacer;