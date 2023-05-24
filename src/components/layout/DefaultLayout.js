import React from "react";
import styled, {css} from 'styled-components';
import Header from "./Header";
import Footer from "./Footer";
import StyledContainer from "../common/Container";

const StyledPageHeader = styled.div`
    ${(props) => props.fixed &&
        css`
            z-index: 1;
            position:fixed;
    `}
`;


const DefaultLayout = ({fixedHeader,children})=>{
    return(
        <div >
            <StyledPageHeader fixed={fixedHeader}>
            <Header/>
            </StyledPageHeader>
            <StyledContainer>{children}</StyledContainer>
            <Footer/>
        </div>
    );
}

export default DefaultLayout;