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
        font-family: 'Roboto', sans-serif;
        font-size: 1em;
        width:100%;
        @media only screen and (max-width:768px) {
            over-flow-x :  hidden;
            overflow-x: hidden;
        }
    }
`;

export default globalStyle;