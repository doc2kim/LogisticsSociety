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
    }
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap');
    
    html,
    body{
        width:100%;
        font-family: 'Noto Sans KR', sans-serif;
        @media only screen and (max-width:768px) {
            overflow-x: hidden;
        }
    }
`;

export default globalStyle;