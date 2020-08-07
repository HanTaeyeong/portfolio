import React,{useEffect,useState} from "react";
import FadeInLetters from "../components/Letters/FadeInLetters";

const CareerPage = () => {

  
  const [activated, setActivated] = useState([false, false, false,false, false,false]);

  const onScroll = () => {
      const y = window.scrollY;
      const h = window.innerHeight;

      const pos = Math.round(y / (h * 0.7)+1);
      //h*FadeInLetters's height;
      const temp = [...activated];
      for (let i = 0; i < pos; i++) {
          temp[i] = true;
      }
      setActivated(temp);
  };

  useEffect(() => {
      window.scrollTo(0,0);
      onScroll();
    
      window.addEventListener('scroll', onScroll);
      
      return () => {
          window.removeEventListener('scroll', onScroll);
      };

  }, []);





  return (
    <div>
      <FadeInLetters animated={activated[0]}>
        저는 어릴때부터
        호기심이 많아 바다와 산, 들판으로 돌아다니며
        
        <br/><br/> 곤충채집을 하거나
          동물들을
        구경했습니다.
      </FadeInLetters>
      <FadeInLetters animated={activated[1]}>
        자연스럽게 수학과 과학을 좋아하게 되었고
        <br/><br/>
         집에 있는 책이나 도서관에 있는 책을 읽게 되었습니다.
      </FadeInLetters>
      <FadeInLetters animated={activated[2]}>
        대학생이 되어 미래에 대한 고민을 하던 중 
        <br/><br/>
        프로그래밍을 하겠다고 마음을 먹고 2014년 처음으로
        <br/><br/>
         프로그래밍을 하겠다고 마음을 먹은 이후
        프로그래머로 일을 하고 있습니다.
      </FadeInLetters>
      <FadeInLetters animated={activated[3]}>
        C를 처음 공부한 이후 , 자바를 거쳐
        <br/><br/>
         게임을 만들기 위해 유니티를 배우고 C# 사용했습니다.
         <br/><br/> 스팀에 게임을 개발하여 출시한
        후,
      </FadeInLetters>
      <FadeInLetters animated={activated[4]}>
        컴퓨터 과학에 대한 기반지식을 탄탄히 해야겠다고 느껴서
        <br/><br/>
         1년 반 정도 알고리즘, 자료구조, 운영체제, 등을 공부하며
         <br/><br/>
          프로그래밍 대회에 여러 번
        참가했습니다.
      </FadeInLetters>
      <FadeInLetters animated={activated[5]}>
        그 후 프론트엔드 분야가
        저랑 잘 맞는다고 느껴서
        <br/><br/> 프론트엔드 개발자로서의 길을 가기로 마음을
        먹었습니다.
        <br/><br/> 최근 객체지향을 넘어 함수형 프로그래밍의 장점을 느끼고
        있습니다.
        <br/><br/> 혼자서 웹 개발을 1년 정도 하였고 
        <br/><br/>그 후 태양광 회사에서 2개월 정도 근무를 하였습니다.
      </FadeInLetters>



    </div>

  );
};

export default CareerPage;
