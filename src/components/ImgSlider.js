import React from 'react'
import styled from 'styled-components'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ImgSlider() {

    const settings = {
        dots: true,  //下方小圓點
        infinite: true,  //到最後一張圖片之後回到第一張圖片
        speed: 500,  //輪播速度
        slidesToShow: 1, //顯示一張圖
        slidesToScroll: 1, //點箭頭切換的圖片數量，與上一個參數slidesToShow搭配
        autoplay: true,   //自動輪播
    }

    return (
        <Carousel {...settings}>
             <Wrap>
                 <img src="/images/slider-badging.jpg"/>
             </Wrap>
             <Wrap>
                 <img src="/images/slider-badag.jpg"/>
             </Wrap>
             <Wrap>
                 <img src="/images/slider-scale.jpg"/>
             </Wrap>
             <Wrap>
                 <img src="/images/slider-scales.jpg"/>
             </Wrap>
        </Carousel>
    )
}

export default ImgSlider

const Carousel = styled(Slider)`
    margin-top: 20px;

    ul li button {
        &:before {
            font-size: 10px;
            color: white;
        }
    }

    li.slick-active button:before {
        color: white;  //Carousel圖片下方的小圓點改成白色
    }

    .slick-list {
        overflow: visible;
    }

    button {
        z-index: 1;
    }
`

const Wrap = styled.div`
    cursor: pointer;
    img {
        border: 4px solid transparent;
        border-radius: 4px;
        width: 100%;
        height: 100%;
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
        rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        transition-duration: 300ms;
        


        &:hover {
            border: 4px solid rgba(249,249, 249, 0.8);
        }
    }

`