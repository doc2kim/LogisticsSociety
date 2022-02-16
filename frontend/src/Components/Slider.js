import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styled from "styled-components";
import partner from "../assets/partner.png";
import partner2 from "../assets/partner2.png";
import partner3 from "../assets/partner3.png";
import partner4 from "../assets/partner4.png";
import partner5 from "../assets/partner5.png";
import partner6 from "../assets/일본해사신문2.png";
import partner7 from "../assets/중화해운연구협회.jpg";
import partner8 from "../assets/한국국제상학회.png";
import partner9 from "../assets/한국연구재단.png";
import partner10 from "../assets/한국해양항만학회.png";
import partner11 from "../assets/한국해운조합.png";
import partner12 from "../assets/IMOkorea.png";
import partner13 from "../assets/fairplay.png";
import partner14 from "../assets/일본해운경제학회.jpg";
import partner15 from "../assets/Lloyds.jpg";




const Container = styled.div`
    overflow:hidden; 
    padding: 0 20%;
    @media only screen and (max-width: 768px) {
        padding: 0 8%;
    }
`;

const Partners = styled.div`
    background-color: #ebebeb;
    display: flex;
    align-items: center;
    width: 100%;
    height: 4vw;
    @media only screen and (max-width: 768px) {
        height: 30vw;
    }
`;

const StyledSlider = styled(Slider)`
    .slick-slide div{
      outline: none;
    }
    
`;

const ImageContainer = styled.div`
    margin-right: 1vw;
    padding: 0.1vw 1vw;
    height: 2.5vw;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    @media only screen and (max-width: 768px) {
        height: 13vw;
    }
`;


const Image = styled.img`
    max-width:100%;
    max-height:100%;
`;


const partners = [
    {
        id: 0,
        url: "https://www.theksa.or.kr/",
        title: "한국해운조합",
        img: partner11,
    }, {
        id: 1,
        url: "http://www.kinpr.or.kr/",
        title: "한국해양항만학회",
        img: partner10,
    }, {
        id: 2,
        url: "https://www.nrf.re.kr/",
        title: "한국연구재단",
        img: partner9,
    }, {
        id: 3,
        url: "http://www.kaic87.or.kr/",
        title: "한국국제상학회",
        img: partner8,
    }, {
        id: 4,
        url: "https://www.shipowners.or.kr:4432/",
        title: "한국해운협회",
        img: partner3,
    }, {
        id: 5,
        url: "https://www.kpiclub.or.kr/",
        title: "한국선주상호보험",
        img: partner,
    }, {
        id: 6,
        url: "https://www.kmi.re.kr/",
        title: "한국해양수산개발원",
        img: partner2,
    }, {
        id: 7,
        url: "https://kita.net/",
        title: "KITA",
        img: partner5,
    }, {
        id: 8,
        url: "https://www.seaman.or.kr/",
        title: "한국해양수산연수원",
        img: partner4,
    }, {
        id: 9,
        url: "http://www.jslse.jp/",
        title: "일본해운경제학회",
        img: partner14,
    }, {
        id: 10,
        url: "http://www.cmri.org.tw/",
        title: "중화해운연구협회",
        img: partner7,
    }, {
        id: 11,
        url: "https://www.lloyds.com/",
        title: "Lloyd’s",
        img: partner15,
    }, {
        id: 12,
        url: "http://www.jmd.co.jp",
        title: "일본해사신문",
        img: partner6,
    }, {
        id: 13,
        url: "http://www.fair-play.co.uk",
        title: "fairplay",
        img: partner13,
    }, {
        id: 14,
        url: "https://imokorea.org/",
        title: "imoKorea",
        img: partner12,
    }
]

export default class SimpleSlider extends React.Component {
    render() {
        const settings = {
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            centerMode: true,
            autoplay: true,
            centerPadding: 0,
            autoplaySpeed: 2000,
        };
        return (
            <Partners>
                <Container>
                    <StyledSlider {...settings}>
                        {partners.map(function (i) {
                            return <div key={i.id} title={i.title}>
                                <a href={i.url} target="_blank">
                                    <ImageContainer>
                                        <Image src={i.img} />
                                    </ImageContainer>
                                </a>
                            </div>
                        })}
                    </StyledSlider>
                </Container>
            </Partners>
        );
    }
}