import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline:0;
}
html {
    min-height: 100%;
    background: var(--primary);
}
*, button, input, a {
    border: 0;
    background: none;
    font-family: 'Source Sans Pro', sans-serif;
    transition: color .2s ease-out;
}
ul {
    list-style: none;
}
body{
    background-color: #212121;
}
p{
    color: #fff;
}
:root {

}
`;
