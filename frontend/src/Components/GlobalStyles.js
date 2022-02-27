import { createGlobalStyle } from "styled-components"
import reset from "styled-reset"

const globalStyle = createGlobalStyle`
    ${reset};
    a{
        text-decoration:none;
        color:inherit;
    }
    *{
        box-sizing:content-box;
    }
    html,
    body{
        @font-face{
            font-family: 'Noto Sans KR', sans-serif;
            font-weight: 100 ~ 900;
        }
        font-size: 1em;
        width:100%;
        @media only screen and (max-width:768px) {
            overflow-x: hidden;
        }
    }
`;

export default globalStyle;