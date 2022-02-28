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
        font-size: 1em;
        /* @font-face{
            font-family: 'Noto Sans KR', sans-serif;
            font-weight: 100 ~ 900;
        } */
        
    }
    /* h1,h2,h3,h4,span,a,div,ul,li,input,form{
        @font-face{
            font-family: 'Noto Sans KR', sans-serif;
            font-weight: 100 ~ 900;
        }
    }
     */
    html,
    body{
        width:100%;
        font-family: 'Apple SD Gothic Neo','Malgun Gothic',arial,sans-serif;
        /* @font-face{
            font-family: 'Noto Sans KR', sans-serif;
            font-weight: 100 ~ 900;
        } */

        @media only screen and (max-width:768px) {
            overflow-x: hidden;
        }
    }
`;

export default globalStyle;