import React from "react"
import styled from "styled-components";
import headerHeight from "./HeaderHeight";

const StyledClearFix = styled.div`
    height: ${headerHeight};   
    /* height:${(props)=>props.height||'180px'}; */

`

export default StyledClearFix;