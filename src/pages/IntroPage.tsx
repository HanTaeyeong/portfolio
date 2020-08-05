import React from 'react';
import FadeInLetter from '../components/Letters/FadeInLetters'
import WaveLetters from '../components/Letters/WaveLetters';

const IntroPage = () => {

    return <div>
        IntroPage
       
    
        <FadeInLetter>
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

        <FadeInLetter>
        저는 호기심이 많고 도전적이며 창의적입니다.<br/>
        문제가 있으면 꼭 해결하고 싶어해요.
        </FadeInLetter>
        <FadeInLetter>
        아침에 일어나 음악과 함께 하루를 시작하고, 하루의 대부분을 컴퓨터와 같이합니다. <br/>
        정보가 넘치는 최첨단 시대임에도 책을 좋아합니다. 나중에는 집에 꼭 멋진 서재를 만들 거예요.
        </FadeInLetter>
       
        </div>
}

export default IntroPage;
