import React from 'react'
import { Button, Form, Input } from 'antd';

function Login() {
    return (
        <div>
            <Form
            layout="vertical"
            requiredMark={true}
        >

            <Form.Item label="Field A" required tooltip="This is a required field">
                <Input placeholder="input name" />
            </Form.Item>
            <Form.Item
                label="Field B" required tooltip="This is a required field"
            >
                <Input.Password placeholder="input password" />
            </Form.Item>
            <Form.Item>
                <Button type="primary">Submit</Button>
            </Form.Item>
        </Form></div>
    )
}

export default Login