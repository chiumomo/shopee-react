import Reactx from "react"
import { UserOutlined } from '@ant-design/icons';
import { Input } from 'antd';

const LoginForm = ()=>{
    return(
        <div>
            <Input size="large" placeholder="帳號" prefix={<UserOutlined />} />
            <br/>
            <br/>
            <Input size="large" placeholder="密碼" prefix={<UserOutlined />} />
            <br/>
            <br/>
            <button>登入</button>
        </div>
    )
}

export default LoginForm;