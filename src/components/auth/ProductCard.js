import React from "react";
import {Card} from "antd";
import styled from "styled-components";
import colorPrimary from "../common/color";

const ProductImageContainer = styled.div`
    position: relative;
    box-sizing: border-box;
    height: 150%;
    `

const SquareImage = styled.div`
        padding-top: 100%;
        background-image: ${props=>`url(${props.url})`} ;
        background-position: center;
        background-size: cover;
    
`

const ListPriceLabel = styled.span`
    color: #757575;
    text-decoration: line-through;
    margin-right: 8px;
    font-weight: 600;
`
const SalePriceLabel = styled.span`
    color: ${colorPrimary};
    font-weight: 600;


`

const ProductCard = ({
    coverUrl, 
    title, 
    listPrices, 
    salePrices, 
    // discountPercentage, 
    // saledNumber, 
    // rating ,
    // liked
    }) => {

    return(
    <Card
        hoverable
        cover={
            <SquareImage url={coverUrl} alt="cover" />
        }
        >
        <ProductImageContainer>
        </ProductImageContainer>
        <Card.Meta 
            title={title}  
            description={
                <div  >
                    {listPrices.length > 0 && (
                        <ListPriceLabel>${listPrices[0]}</ListPriceLabel>
                    )}
                    {salePrices.length > 0 && (
                        <SalePriceLabel>${salePrices[0]}</SalePriceLabel>
                    )}
                </div>
            }
        /> 
    </Card>

    );

}
export default ProductCard;