import React from "react";
import styled from 'styled-components';
import StyledContainer from "../common/Container";
// import headerHeight from "../common/HeaderHeight";
import Logo from '../../images/logo_w.png';
import colorPrimary from "../common/color";
import {Input} from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

//Search是在Input的模組底下
//是否fixed與這裡的設定無關



const StyledHeader = styled.header`
    background-color:${colorPrimary} ;
    padding: 8px 0;
    width: 100vw;
`;

const StyledHeaderSection = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    a{
        text-decoration: none;
        color: #fff;
        font-size: 18px;
    }
`

const StyledNavigator = styled.div`
    a{
        margin: 0 4px;
    }
`;

const StyledToolBar = styled.div`
    a{
        margin: 0 8px;
    }
`;

// const onSearch = (value: string ) => console.log(value);

const StyledFlex = styled.div`
    display: flex;
`
const StyledInput = styled.div`
    width: 300px;
    @media (min-width: 769) {
        width :30vw ;
    }
`

const Header =()=>{
    return(
        <StyledHeader>
            <StyledContainer>
                <StyledHeaderSection>
                    <StyledNavigator>
                        <a href="/">蝦皮購物</a>
                        <a href="#!">下載app</a>
                        <a href="#!">追蹤我們</a>
                        <a href="#!">Blog</a>
                    </StyledNavigator>
                    <StyledToolBar>
                        <a href="#!" >通知</a>
                        <a href="#!" >幫助中心</a>
                        <a href="#!" >帳號</a>
                    </StyledToolBar>
                </StyledHeaderSection>
                <StyledHeaderSection>
                    <Link to="/">
                        <img src={Logo} height={100} alt="logo" ></img>
                    </Link>
                    <StyledFlex>
                        <StyledInput>
                            <Input.Search placeholder="搜尋產品" allowClear  style={{width:'300'}}  />
                        </StyledInput>
                        <Link to="/cart">
                            <ShoppingCartOutlined style={{fontSize:'32px',marginLeft:'10px',color:'#fff'}} />
                        </Link>
                    </StyledFlex>

                </StyledHeaderSection>
            </StyledContainer>
        </StyledHeader>

    ) 
};

export default Header;