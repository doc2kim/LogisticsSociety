import { createGlobalStyle } from "styled-components"
import NotoSansKrLightOTF from "./NotoSansKR-Light.otf";
import NotoSansKrLightWOFF from "./NotoSansKR-Light.woff";
import NotoSansKrLightWOFF2 from "./NotoSansKR-Light.woff2";
import NotoSansKrRegularOTF from "./NotoSansKR-Regular.otf";
import NotoSansKrRegularWOFF from "./NotoSansKR-Regular.woff";
import NotoSansKrRegularWOFF2 from "./NotoSansKR-Regular.woff2";
import NotoSansKrMediumOTF from "./NotoSansKR-Medium.otf";
import NotoSansKrMediumWOFF from "./NotoSansKR-Medium.woff";
import NotoSansKrMediumWOFF2 from "./NotoSansKR-Medium.woff2";
import NotoSansKrBoldOTF from "./NotoSansKR-Bold.otf";
import NotoSansKrBoldWOFF from "./NotoSansKR-Bold.woff";
import NotoSansKrBoldWOFF2 from "./NotoSansKR-Bold.woff2";




export default createGlobalStyle`
    @font-face {
        font-family: 'Noto Sans KR';
        font-weight: 300;
        src: url(${NotoSansKrLightWOFF2}) format('woff2'),
            url(${NotoSansKrLightWOFF}) format('woff'),
            url(${NotoSansKrLightOTF}) format('truetype');
    }

    @font-face {
        font-family: 'Noto Sans KR';
        font-weight: 400;
        src: url(${NotoSansKrRegularWOFF2}) format('woff2'),
            url(${NotoSansKrRegularWOFF}) format('woff'),
            url(${NotoSansKrRegularOTF}) format('truetype');
    }
    @font-face {
        font-family: 'Noto Sans KR';
        font-weight: 500;
        src: url(${NotoSansKrMediumWOFF2}) format('woff2'),
            url(${NotoSansKrMediumWOFF}) format('woff'),
            url(${NotoSansKrMediumOTF}) format('truetype'),
        
    }

    @font-face {
        font-family: 'Noto Sans KR';
        font-weight: 700;
        src: url(${NotoSansKrBoldWOFF2}) format('woff2'),
            url(${NotoSansKrBoldWOFF}) format('woff'),
            url(${NotoSansKrBoldOTF}) format('truetype');
    }
    * {
        font-family: 'Noto Sans KR';
    }
`;