import React, { useState, useEffect } from 'react';
import FadeInLetter from '../components/Letters/FadeInLetters'
import WaveLetters from '../components/Letters/WaveLetters';
import styled from 'styled-components';






const IntroWrapper = styled.div`

`;


const Image = styled.img`
width:48rem;
height:30rem;
`;


// <Image src={require('../images/music.png')} alt="https://images.app.goo.gl/AsnhrUP1M9Pw7Ab69" />
// 아침에 일어나 음악과 함께 하루를 시작하고 <br/>





const IntroPage = () => {

    const [activated, setActivated] = useState([false, false, false]);

    const onScroll = () => {
        const y = window.scrollY;
        const h = window.innerHeight;

        const pos = Math.round(y / (h * 0.7) + 1);
        //h*FadeInLetters's height;
        const temp = [...activated];
        for (let i = 0; i < pos; i++) {
            temp[i] = true;
        }
        setActivated(temp);
    };

    useEffect(() => {
        window.scrollTo(0, 0);
        onScroll();

        window.addEventListener('scroll', onScroll);

        return () => {
            window.removeEventListener('scroll', onScroll);
        };

    }, []);





    return <IntroWrapper>

        <FadeInLetter animated={activated[0]}>
         
                <br />
                <br />
                <br />

            안녕하세요. 저는 프론트엔드 개발자 한태영입니다.
        <br />
                <br />
                <WaveLetters>
                    역동적인
        </WaveLetters>
        &nbsp;프론트엔드 분야를 이끄는 사람이 되고 싶습니다.
      
        </FadeInLetter>

        <FadeInLetter animated={activated[1]} background="orange">
            저는 호기심이 많고 도전적이며 창의적입니다.<br /> <br />
        문제가 있으면 꼭 해결하고 싶어합니다.
        </FadeInLetter>
        <FadeInLetter animated={activated[2]}>
            <Image src={require('../images/staircase.png')} alt="https://images.app.goo.gl/PHAH66Bvn535Y6mTA" />
            <br />
        저는 하루의 대부분을 컴퓨터 앞에서 보냅니다.

         <br /><br />
        책을 좋아하여 나중에 멋진 서재를 가지고 싶습니다.
        </FadeInLetter>

    </IntroWrapper>
}

export default IntroPage;
