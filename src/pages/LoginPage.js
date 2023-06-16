import React from "react";
import DefaultLayout from "../components/layout/DefaultLayout"
import styled from "styled-components";
import Container from "../components/common/Container"
// import LoginForm from "../components/auth/LoginForm";


const StyledLoginBox= styled.div`
    width: 100%;
    box-sizing: border-box;
    margin-top: 40px;
    `
const StyledLoginContainer= styled(Container)`
    width: 100%;
    display: flex;
    justify-content: space-between;
    `
const SpaceBox = styled.div`
    display: block;
    width: 60%;
    padding-top: 35%;
    background-size: 140%;
    background-position: 20px -100px ;
    overflow: hidden;
    background-image:url('https://down-tw.img.susercontent.com/file/sg-11134004-7qvex-lgiqnauultv8cf');
`

const FormContainer = styled.div`
    width: 40%;
    padding: 20px;
    border: 1px solid #000;

`



const LoginPage = ()=> {
    return (
        <DefaultLayout>
            <StyledLoginBox>
                <StyledLoginContainer>
                    <SpaceBox/>
                    <FormContainer>
                        {/* <LoginForm/> */}
                    </FormContainer>
                </StyledLoginContainer>
            </StyledLoginBox>
        </DefaultLayout>
    )
}


export default LoginPage;