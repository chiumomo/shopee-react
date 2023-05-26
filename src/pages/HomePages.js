import React from "react";
import DefaultLayout from "../components/layout/DefaultLayout";
import styled from 'styled-components'
import StyledClearFix from "../components/common/ClearFix";
import { Carousel } from "antd";
import BannerL1 from '../images/banner/bannerL1.jpeg';
import BannerL2 from '../images/banner/bannerL2.jpeg';
import BannerL3 from '../images/banner/bannerL3.jpeg';
import BannerS1 from '../images/banner/bannerS1.jpeg';
import BannerS2 from '../images/banner/bannerS2.jpeg';
import { RightOutlined, RollbackOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import ProductCard from "../components/auth/ProductCard.js";


const BannerBox = styled.div`
    display: flex;
    flex-wrap: wrap;
    `

const BannerCarouselContainer =styled.div`
    width: 100%;
    padding:4px;
    @media (min-width: 769px) {
        width: 66.67%;
    }

`

const BannerSider = styled.div`
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    @media (min-width: 769px) {
        width: 33.33%;
    }
    
`

const BannerContainer =styled.div`
    width: 50%;
    padding:4px;
    @media (min-width: 769px) {
        width: 100%;
    }

`

const Image = styled.div`
    height: ${(props) => props.height}px;
    background-image: ${(props) => `url(${props.url})`} ;
    background-size:cover;
    background-position: center;
`
const BannerFeatureContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 100%;
`
const BannerFeature = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    /* text-align: center; */
    @media (min-width: 769px) {
        width: 33.33%;
        justify-content: center;
        padding: 8px 0;

    }
    margin-bottom: 8px;
    padding: 4px 0 4px 24px;
    border-bottom: 4px solid rgba(0,0,0,0.1) ;
    border-right:2px solid rgba(0,0,0,0.1) ;
    border-left:1px solid rgba(0,0,0,0.1) ;

`

const BannerIcon = styled.div`
    width: 32px;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: center;
    background-color: red;
    border-radius: 30px;
    margin: 8px;

`

const BannerFeatureContext = styled.div`
    line-height: 1.5rem;
    
    h4,h5{
        margin-bottom: 0px;
    }
`

const CustomContainer = styled.div`
    margin-top: 48px;
    
`

const CustomContainerTitle = styled.div`
    display: flex;
    justify-content: space-between;
    border-bottom: 2px solid red;
    padding-bottom: 8px;
    a{
        text-decoration: none;
    }
`
const CustomContainerContext = styled.div`
    color: red; 
    font-size: 18px;
    font-weight: 400;

`
const OpenButton = styled.div`
    color: red; 
    display: flex;
`
const ProductCollectionContainer = styled.div`
    margin: 0 -4px 0 -4px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 48px;    

`

const ProductContainer= styled.div`
    padding: 4px;
    width: 100%;
    @media (min-width:577px ) {
        width: 33%;
    }
    @media (min-width:769px ) {
        width: 20%;
    }
`

const HomePage =() =>{
    return(
        <DefaultLayout fixedHeader>
            <StyledClearFix />
            <BannerBox>
                <BannerCarouselContainer>
                    <Carousel autoplay>
                        <Link to='/p001'><Image height={208} url={BannerL1} ></Image></Link>
                        <Link to='/p002'><Image height={208} url={BannerL2} ></Image></Link>
                        <Link to='/p003'><Image height={208} url={BannerL3} ></Image></Link>
                    </Carousel>
                </BannerCarouselContainer>
                <BannerSider>
                    <BannerContainer>
                        <Link to='/p004'><Image height={100} url={BannerS1}></Image></Link>
                    </BannerContainer>
                    <BannerContainer>
                        <Link to='/p004'><Image height={100} url={BannerS2}></Image></Link>
                    </BannerContainer>
                </BannerSider>
                <BannerFeatureContainer>
                    <BannerFeature>
                        <BannerIcon>
                            <RollbackOutlined style={{color:'white'}}/>
                        </BannerIcon>
                        <BannerFeatureContext>
                            <h4>15天鑑賞期</h4>
                            <h5>延長買家鑑賞時程</h5>
                        </BannerFeatureContext>
                    </BannerFeature>
                    <BannerFeature>
                        <BannerIcon>
                            <RollbackOutlined style={{color:'white'}}/>
                        </BannerIcon>
                        <BannerFeatureContext>
                            <h4>退貨無負擔</h4>
                            <h5>物流配合最齊全，讓您安心消費</h5>
                        </BannerFeatureContext>
                    </BannerFeature>
                    <BannerFeature>
                        <BannerIcon>
                            <RollbackOutlined style={{color:'white'}}/>
                        </BannerIcon>
                        <BannerFeatureContext>
                            <h4>假一賠二</h4>
                            <h5>非正貨賠償承諾</h5>
                        </BannerFeatureContext>
                    </BannerFeature>
                </BannerFeatureContainer>
            </BannerBox>
            <Link to='/advertising'>
                <Image height={120} url={BannerL1} ></Image>
            </Link>
            <CustomContainer>
                <CustomContainerTitle>
                    <CustomContainerContext>專屬精選</CustomContainerContext>
                    <a href='collection'>
                        <OpenButton>
                            <p>查看全部</p><RightOutlined />
                        </OpenButton>
                    </a>
                </CustomContainerTitle>
            </CustomContainer>
            <ProductCollectionContainer>
                <ProductContainer>
                    <Link style={{textDecoration:"none"}} to="/p001" >
                        <ProductCard title="p001" coverUrl={BannerS2} listPrices={[100,200]} salePrices={[200,299]} />
                    </Link>
                </ProductContainer>
                <ProductContainer>
                    <Link style={{textDecoration:"none"}} to="/p002">
                        <ProductCard title="p002" coverUrl={BannerS1} listPrices={[]} salePrices={[200,299]} />
                    </Link>
                </ProductContainer>
                <ProductContainer>
                    <Link style={{textDecoration:"none"}} to="/p003">
                        <ProductCard title="p004" coverUrl={BannerS2} listPrices={[100,200]} salePrices={[200,299]} />
                    </Link>
                </ProductContainer>
                <ProductContainer>
                    <Link style={{textDecoration:"none"}} to="/p004">
                        <ProductCard title="p004" coverUrl={BannerS1} listPrices={[100,200]} salePrices={[200,299]} />
                    </Link>
                </ProductContainer>
                <ProductContainer>
                    <Link style={{textDecoration:"none"}} to="/p005">
                        <ProductCard title="p005" coverUrl={BannerL1} listPrices={[100,200]} salePrices={[200,299]} />
                    </Link>
                </ProductContainer>
                <ProductContainer>
                    <Link style={{textDecoration:"none"}} to="/p006">
                        <ProductCard title="p006" coverUrl={BannerL2} listPrices={[100,200]} salePrices={[200,299]} />
                    </Link>
                </ProductContainer>
                <ProductContainer>
                    <Link style={{textDecoration:"none"}} to="/p007">
                        <ProductCard title="p007" coverUrl={BannerL3} listPrices={[100,200]} salePrices={[200,299]} />
                    </Link>
                </ProductContainer>
                <ProductContainer>
                    <Link style={{textDecoration:"none"}} to="/p008">
                        <ProductCard title="p008" coverUrl={BannerS1} listPrices={[100,200]} salePrices={[200,299]} />
                    </Link>
                </ProductContainer>
                <ProductContainer>
                    <Link style={{textDecoration:"none"}} to="/p002">
                        <ProductCard title="p002" coverUrl={BannerS1} listPrices={[]} salePrices={[200,299]} />
                    </Link>
                </ProductContainer>
                <ProductContainer>
                    <Link style={{textDecoration:"none"}} to="/p003">
                        <ProductCard title="p004" coverUrl={BannerS2} listPrices={[100,200]} salePrices={[200,299]} />
                    </Link>
                </ProductContainer>
                <ProductContainer>
                    <Link style={{textDecoration:"none"}} to="/p004">
                        <ProductCard title="p004" coverUrl={BannerS1} listPrices={[100,200]} salePrices={[200,299]} />
                    </Link>
                </ProductContainer>
                <ProductContainer>
                    <Link style={{textDecoration:"none"}} to="/p005">
                        <ProductCard title="p005" coverUrl={BannerL1} listPrices={[100,200]} salePrices={[200,299]} />
                    </Link>
                </ProductContainer>
                <ProductContainer>
                    <Link style={{textDecoration:"none"}} to="/p006">
                        <ProductCard title="p006" coverUrl={BannerL2} listPrices={[100,200]} salePrices={[200,299]} />
                    </Link>
                </ProductContainer>
                <ProductContainer>
                    <Link style={{textDecoration:"none"}} to="/p007">
                        <ProductCard title="p007" coverUrl={BannerL3} listPrices={[100,200]} salePrices={[200,299]} />
                    </Link>
                </ProductContainer>
                <ProductContainer>
                    <Link style={{textDecoration:"none"}} to="/p008">
                        <ProductCard title="p008" coverUrl={BannerS1} listPrices={[100,200]} salePrices={[200,299]} />
                    </Link>
                </ProductContainer>
            </ProductCollectionContainer>

            <BannerFeatureContainer>
                <BannerFeature>
                    <BannerIcon>
                        <RollbackOutlined style={{color:'white'}}/>
                    </BannerIcon>
                    <BannerFeatureContext>
                        <h4>15天鑑賞期</h4>
                        <h5>延長買家鑑賞時程</h5>
                    </BannerFeatureContext>
                </BannerFeature>
                <BannerFeature>
                    <BannerIcon>
                        <RollbackOutlined style={{color:'white'}}/>
                    </BannerIcon>
                    <BannerFeatureContext>
                        <h4>退貨無負擔</h4>
                        <h5>物流配合最齊全，讓您安心消費</h5>
                    </BannerFeatureContext>
                </BannerFeature>
                <BannerFeature>
                    <BannerIcon>
                        <RollbackOutlined style={{color:'white'}}/>
                    </BannerIcon>
                    <BannerFeatureContext>
                        <h4>假一賠二</h4>
                        <h5>非正貨賠償承諾</h5>
                    </BannerFeatureContext>
                </BannerFeature>
            </BannerFeatureContainer>
            
        </DefaultLayout>
    )

}

export default HomePage;