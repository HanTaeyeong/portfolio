import React from 'react';
import styled from 'styled-components';



const LetterWrapper = styled.div`
width:100%;

margin-left:3rem;
font-size:3rem;
margin-bottom:20rem;
text-align:left;
opacity:0;
margin-top:1rem;
animation: fade-in-animation 0.66s ease-in-out 0.05s both;

@keyframes fade-in-animation{
    0%{
        opacity:0;
    }
    100%{
        opacity:1;
        
margin-top:0rem;
    }
}

`;

type MyProps={
}

const FadeInLetter:React.FunctionComponent<MyProps>=(props)=>{

return <LetterWrapper>{props.children}</LetterWrapper>

}

export default FadeInLetter;