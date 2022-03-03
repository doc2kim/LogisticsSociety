import { createGlobalStyle } from "styled-components"
import NotoSansKrLight from "./NotoSansKR-Light.otf";
import NotoSansKrRegular from "./NotoSansKR-Regular.otf";
import NotoSansKrMedium from "./NotoSansKR-Medium.otf";
import NotoSansKrBold from "./NotoSansKR-Bold.otf";




export default createGlobalStyle`
    @font-face {
        font-family: 'Noto Sans KR';
        font-weight: 300;
        src: url(${NotoSansKrLight}) format('woff2'),
            url(${NotoSansKrLight}) format('woff'),
            url(${NotoSansKrLight}) format('truetype');
    }

    @font-face {
        font-family: 'Noto Sans KR';
        font-weight: 400;
        src: url(${NotoSansKrRegular}) format('woff2'),
            url(${NotoSansKrRegular}) format('woff'),
            url(${NotoSansKrRegular}) format('truetype');
    }
    @font-face {
        font-family: 'Noto Sans KR';
        font-weight: 500;
        src: url(${NotoSansKrMedium}) format('woff2'),
            url(${NotoSansKrMedium}) format('woff'),
            url(${NotoSansKrMedium}) format('truetype'),
        
    }

    @font-face {
        font-family: 'Noto Sans KR';
        font-weight: 700;
        src: url(${NotoSansKrBold}) format('woff2'),
            url(${NotoSansKrBold}) format('woff'),
            url(${NotoSansKrBold}) format('truetype');
    }
    * {
        font-family: 'Noto Sans KR';
    }
`;