import React, { useContext, useEffect, useState } from "react"
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Input,Button, message } from 'antd';
import { useNavigate } from "react-router-dom";
import AuthContext from "./AuthContext";

const LoginForm = ()=>{
    const Navigate = useNavigate();
    const {login,isAuthenticated} = useContext(AuthContext);
    const [username,setUsername] = useState();
    const [password,setPassword] = useState();
    const handleLogin =() =>{
        //call login api
        console.log(username,password);
        console.log(isAuthenticated);
        
        login(username,password).then((token,error)=>{
            if(!token){
                message.error(error)
            }
        });
        
    };

    useEffect(()=>{
        isAuthenticated && Navigate.push('/')
    },[isAuthenticated])

    return(
        <div>
            <Input 
                className="mb-3"
                size="large" 
                placeholder="帳號" 
                prefix={<UserOutlined />} 
                value={username}
                onChange={e=> setUsername(e.target.value)}
            />
            <Input 
                className="mb-3"
                type='password'
                size="large" 
                placeholder="密碼" 
                prefix={<LockOutlined />} 
                value={password}
                onChange={e=> setPassword(e.target.value)}
            />
            <Button onClick={handleLogin} >登入</Button>
        </div>
    )
}

export default LoginForm;