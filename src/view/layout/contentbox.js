import styled from "styled-components";

const ContentBoxStyle = styled.div `
width: 100%;
align-items: center;
height: 100%;
.scrolling{
    height: 70vh;
    overflow-y: scroll;
  }
.container{
    margin-top: 30%;
    filter: drop-shadow(5px 5px 8px green);
    position:relative;
    padding: 10px;
    background-color: #f7f7f7;
    text-align: center;
    max-width: 500px;
    height: 80%;
    margin: auto;
    color: #3b5998;
    border: 1px solid f6f6f6;
}
.bgimage{
    background-repeat: no-repeat, repeat;
    filter: drop-shadow(5px 5px 8px green);
    background-repeat: no-repeat;
    background-position: center;
    background-size: 101%;
    margin-top: 0.5vh;
    opacity: 1;
    }
.pensamento{
        border-radius: 25px;
    }
.demostracaoapp{
        overflow-x: hidden;
        overflow-y: hidden;
        width: 100%;
        border:0px #ffffff none;
        height: 80vh;
      }
.sourcebox{
        margin-top: auto;
      }
.description:before{
        content: "";
        display: block;
        font-weight: bold;
        padding:5px;
      }
.subtitle{
        color: #4674d8;
      }
.description{
        font-size: 1.3em;
        padding: 20px;
        line-height: 1.5;
        color: #3b5998;
      }
.description2:before{
        content: "";
        display: block;
        font-weight: bold;
        padding:5px;
      }
.description2{
        font-size: 1.05em;
        padding: 20px;
        line-height: 1.5;
      }
.copirights:before{
        content: "";
        display: block;
        font-weight: bold;
        padding:5px;
      }
.copirights2{
        font-size: 1.05em;
        padding: 20px;
        line-height: 1.5;
      }
.advertencebox{
        margin-top: 5%;
      }`
export{
    ContentBoxStyle
}