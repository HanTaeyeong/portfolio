import React, { useEffect, useState, FunctionComponent } from 'react';
import styled from 'styled-components';



const WaveLettersWrapper = styled.span`
    



`;

const WaveLetter = styled.span`

   color:red;
    display:inline-block;
   
    @keyframes wave{ 
    0%{
    
    }
    20%{
     
       transform:translateY(-20px);
       
    }
    40%{
        transform:translateY(0px);
    }
    100%{
    
    }
}

`;


type MyProps = {
}

const WaveLetters: FunctionComponent<MyProps> = (props) => {

    const [letters, setLetters] = useState([""]);

    useEffect(() => {
        const tempLetter = props.children ? props.children.toString().split("") : [""];
        setLetters(tempLetter);
    }, [props.children])

    return <WaveLettersWrapper>
        {letters.map((letter, index) => {

            const thisAnim = `wave 1.66s ease-in-out ${0.5 + (index + 1) * 0.15}s infinite`;

            return <WaveLetter style={{ animation: thisAnim }}>{letter}</WaveLetter>
        })}

    </WaveLettersWrapper>

}


export default WaveLetters;

