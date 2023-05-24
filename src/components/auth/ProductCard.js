import React from "react";
import {Card} from "antd";
import styled from "styled-components";

const SquareImage = styled.div`
    padding-top: 100%;
    background-image: ${props=>`url(${props.url})`} ;
    background-position: center;
    background-size: cover;
    background-color: #caac;
`

const ProductCard = ({
    coverUrl, 
    title, 
    listPrice, 
    salePrice, 
    // discountPercentage, 
    // saledNumber, 
    // rating ,
    // liked
    }) => {

    return(
    <Card
        hoverable
        cover={<SquareImage  src={coverUrl} alt="cover" />}
        >
        <Card.Meta 
            title={title}  
            description={
                <div>
                    <span>{listPrice}</span>
                    <span>{salePrice}</span>
                </div>
            }
        /> 
    </Card>

    );

}
export default ProductCard;