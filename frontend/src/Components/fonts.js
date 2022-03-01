import { createGlobalStyle } from "styled-components";
import NotoSansKR from "./NotoSansKR-Medium.otf";

export default createGlobalStyle`
    @font-face {
        font-family: "Noto Sans KR";
        src: local("Noto Sans KR"),
        url(${NotoSansKR}) format('otf');
        font-weight: 400;
        font-style: normal;
    }
`;