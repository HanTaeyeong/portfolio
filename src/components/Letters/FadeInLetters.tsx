import React from 'react';
import styled from 'styled-components';



const LetterWrapper = styled.div`
width:100%;
height:70vh;
margin-left:3rem;
font-size:3rem;
text-align:left;
align-items:center;
justify-content:center;
opacity:0.1;
margin-top:1rem;
transition:0.66s;


    
    &.animated{
        transition:0.66s;
        opacity:1;
        
        margin-top:0rem;

    }
    
    



`;

type MyProps = {
    animated: boolean
}

const FadeInLetter: React.FunctionComponent<MyProps> = (props) => {

    return <LetterWrapper className={props.animated ? "animated" : ""}>{props.children}</LetterWrapper>

}

export default FadeInLetter;