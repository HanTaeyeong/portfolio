import React from 'react';
import styled from 'styled-components';

type LetterWrapperProps={
    background?:string;
}

const LetterWrapper = styled.div<LetterWrapperProps>`

width:100vw;
height:75vh;
font-size:1.66rem;
text-align:center;
opacity:0.1;
transition:0.66s;


    &.animated{
        transition:0.66s;
        opacity:1;
        
        margin-top:0rem;
    }
    
    &:before{
        position:absolute;
        content:"";
       width:130vw;
       height:75vh;
       background:${props=>props.background};
       z-index:-5;
       margin-left:-50%;
    }


`;

type MyProps = {
    animated: boolean,
    background?:string,
}

const FadeInLetter: React.FunctionComponent<MyProps> = (props) => {

    return <LetterWrapper className={props.animated ? "animated" : ""} background={props.background}>
         <div style={{display:"inline-block",textAlign:"left"}}>
        {props.children}
        </div>
        </LetterWrapper>

}

export default FadeInLetter;