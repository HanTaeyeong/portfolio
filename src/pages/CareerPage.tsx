import React, { useEffect, useState } from "react";
import FadeInLetters from "../components/Letters/FadeInLetters";
import styled from 'styled-components';



const Video=styled.video`
 cursor: pointer;

 width:100%;

`;




const CareerPage = () => {


  const [activated, setActivated] = useState([false, false, false, false,false]);

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
  
  const onClickVideo=()=>{
    window.open(
      "https://store.steampowered.com/app/878300/RollTheEarth/",
      '_blank' 
    );

  }




  return (
    <div>
      <FadeInLetters animated={activated[0]}>
     
        <br />
        <br />
        <br />
       2014년 처음으로 프로그래밍을 하겠다고 마음을 먹은 이후
         <br /><br />
       C로 처음 공부를 시작하여 프로그래머의 삶을 살고 있습니다.


      </FadeInLetters>

      <FadeInLetters animated={activated[1]}>

        그후 자바와 Unity3D C#을 거쳐 스팀에 게임을 개발하여 출시하였습니다.<br />
        <br />
        <Video autoPlay={true} muted onClick={onClickVideo} >
          <source src={"https://steamcdn-a.akamaihd.net/steam/apps/256722050/movie480.webm?t=1530941795"} type="video/mp4"></source>
          none
        </Video>

      </FadeInLetters>
      <FadeInLetters animated={activated[2]}>
        <br />
        <br />
        게임을 만들다 보니 컴퓨터 과학에 대한 기반지식을 탄탄히 해야겠다고 느껴서
        <br /><br />
         1년 반을 알고리즘, 자료구조, 운영체제, 등을 공부하며
         <br /><br />
          프로그래밍 대회에 여러 번 참가했습니다.
      </FadeInLetters>
      <FadeInLetters animated={activated[3]} background={"lightgreen"}>
        그 후 사용자들과 더 가깝고 개발자들간의 소통이 활발하며,<br /><br />

        계속 변화하고 발전하는 프론트엔드 분야가<br /><br />

        저랑 잘 맞는다고 느껴서
        <br /><br /> 프론트엔드 개발자로서의 길을 가기로 마음을
        먹었습니다.
        <br /><br /> 최근 객체지향을 넘어 함수형 프로그래밍의 장점을 느끼고
        있습니다.
        <br /><br /> Vanilla JS 부터 시작하여 웹 개발을 시작 한지는 1년 정도 되었습니다.
      </FadeInLetters>
      <FadeInLetters animated={activated[4]} background={""}>
        <br/>
        <br/>
        <a href="http://www.sejong-yesterday.com" target="_blank" rel="noopener noreferrer">이전 포트폴리오 보기</a>
      </FadeInLetters>


    </div>

  );
};

export default CareerPage;
