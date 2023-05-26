import React from "react";
import styled from 'styled-components';
import StyledContainer from "../common/Container";
import CSVLOGO from '../../images/cvs_logo.png'
import WrapReduce from '../../images/wrapreduce.png'
import QRCODE from "../../images/qrcode.png";
import IOSdownload from '../../images/appstore.png';
import ANDROIDdownload from '../../images/googleplay.png'
import { Link } from "react-router-dom";
import {Row,Col} from 'antd';


const StyledFooter = styled.footer`
    background-color:#fbfbfb;
    padding:20px 0 ;
    margin-top: 48px;
    border-top: 1px solid rgba(0,0,0,.2);
    /* height: 300px; */
`

const FlexBox = styled.div`
    display: flex;
    flex-wrap: wrap;
`

const StyledFooterColumn = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 16px;
    a{
        text-decoration: none;
        color: rgba(0,0,0,.5);
        margin-bottom: 4px;

    }
    width: 33.33%;
    @media (min-width:769px) {
        width: 20%;        
    }
`
const StyledFooterColumnTitle = styled.div`
    font-weight: 400;
    margin-bottom: 12px;
    color: #100400;

`



const Footer =()=>{
    return (
        <StyledFooter>
            <StyledContainer>
                <FlexBox>
                    <StyledFooterColumn>
                        <StyledFooterColumnTitle>客服中心</StyledFooterColumnTitle>
                        <Link to='#!'>幫助中心</Link>
                        <Link to='#!'>幫助中心</Link>
                        <Link to='#!'>幫助中心</Link>
                        <Link to='#!'>幫助中心</Link>
                        <Link to='#!'>幫助中心</Link>
                        <Link to='#!'>幫助中心</Link>
                        <Link to='#!'>幫助中心</Link>
                    </StyledFooterColumn>
                    <StyledFooterColumn>
                        <StyledFooterColumnTitle>關於賣場</StyledFooterColumnTitle>
                        <Link to='#!'>幫助中心</Link>
                        <Link to='#!'>幫助中心</Link>
                        <Link to='#!'>幫助中心</Link>
                        <Link to='#!'>幫助中心</Link>
                        <Link to='#!'>幫助中心</Link>
                        <Link to='#!'>幫助中心</Link>
                        <Link to='#!'>幫助中心</Link>
                    </StyledFooterColumn>
                    <StyledFooterColumn>
                        <StyledFooterColumnTitle>物流合作</StyledFooterColumnTitle>
                            <img src={CSVLOGO}  alt="cvslogo" width="60%" style={{marginBottom:8}}></img>
                        <StyledFooterColumnTitle>24小時包裝減量標章</StyledFooterColumnTitle>
                            <img src={WrapReduce} alt="WrapReduce" width="40%" ></img>
                    </StyledFooterColumn>
                    <StyledFooterColumn>
                        <StyledFooterColumnTitle>關注我們</StyledFooterColumnTitle>
                        <Link to='#!'>幫助中心</Link>
                        <Link to='#!'>幫助中心</Link>
                        <Link to='#!'>幫助中心</Link>
                        <Link to='#!'>幫助中心</Link>
                    </StyledFooterColumn>
                    <StyledFooterColumn>
                        <StyledFooterColumnTitle>下載蝦皮</StyledFooterColumnTitle>
                        <Row>
                            <Col>
                                <a href='#!' >
                                    <img to='#!' src={QRCODE} alt='QR download' />
                                </a>
                            </Col>
                            <Col>
                                <a href='#!' >
                                    <img to='#!' src={IOSdownload} alt='ios download' width="80%" />
                                </a>
                                <a href='#!' alt='android download' style={{lineHeight:4}} >
                                    <img to='#!' src={ANDROIDdownload} alt='ios download' width="80%" />
                                </a>
                            </Col>
                        </Row>
                    </StyledFooterColumn>
                </FlexBox>
            </StyledContainer>
        </StyledFooter>
    )
};

export default Footer;