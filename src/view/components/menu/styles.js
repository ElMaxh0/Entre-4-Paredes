import styled from "styled-components";
const MenuTopoStyles = styled.nav `
background-color: rgba(40, 104, 243, 0.842);
border-radius: 10px;
padding:1%;
.title {
    text-align:center;
}

@media only screen and (hover: none) and (pointer: coarse){
    .title {
        text-align:center;
    }
}
ul{
    max-width: 800px;
    list-style: none;
    padding: 0;
}
ul li{
    display: inline;
}
ul li a {
    color: #FFF;
    padding: 20px;
    display: inline-block;
    text-decoration: none;
    transition: background .4s;
    border-radius: 5%;
}
ul li a:hover {
    background-color: rgb(124, 213, 248);
    border-radius: 10%;
    transform: scale(1.2);
}
ul li:last-child a {
    float: right;
    background-color: rgb(4, 89, 158);
    border-radius: 10%;
}


`
export{
    MenuTopoStyles
}