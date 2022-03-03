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
    html,
    body{
        width:100%;
        @media only screen and (max-width:768px) {
            overflow-x: hidden;
        }
    }
`;

export default globalStyle;