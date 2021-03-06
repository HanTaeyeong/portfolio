import React from 'react';
import styled from 'styled-components';

type LetterWrapperProps = {
    background?: string;
}

const LetterWrapper = styled.div<LetterWrapperProps>`

font-family:cutefont;
width:100vw;
height:75vh;
font-size:2.66rem;
text-align:center;
opacity:0.1;
transition:0.66s;
overflow-x:hidden;
flex-wrap:wrap;

@media (max-width:1024px){
    font-size:2rem;
width:80vw;
margin-left:5vw;

}


    &.animated{
        transition:0.66s;
        opacity:1;
        margin-top:0rem;
    }
    
    &:before{
        flex-wrap:wrap;
        position:absolute;
        content:"";
       width:130vw;
       height:75vh;
       background:${props => props.background};
        
       z-index:-5;
       margin-left:-50%;
       opacity:0.8;

        
@media (max-width:1024px){
    width:150vw;
}

    }

    &.link{
        
    text-decoration:none;
    }


`;

type MyProps = {
    animated: boolean,
    background?: string,
}

const FadeInLetter: React.FunctionComponent<MyProps> = (props) => {

    return <LetterWrapper className={props.animated ? "animated" : ""} background={props.background}>
        <div style={{
            display: "inline-block", textAlign: "left", overflowX: "hidden",
            flexWrap: "wrap"
        }}>
            {props.children}
        </div>
    </LetterWrapper>

}

export default FadeInLetter;