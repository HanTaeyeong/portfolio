import React from 'react';
import styled from 'styled-components';



const LetterWrapper = styled.div`
width:130%;
height:70vh;
font-size:3rem;
text-align:center;

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
    animated: boolean,
    background?:string,
}

const FadeInLetter: React.FunctionComponent<MyProps> = (props) => {

    return <LetterWrapper className={props.animated ? "animated" : ""} style={{background:`${props.background}`}}>{props.children}</LetterWrapper>

}

export default FadeInLetter;