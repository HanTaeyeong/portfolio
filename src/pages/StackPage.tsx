import React,{useState,useEffect} from 'react';
import FadeInLetters from "../components/Letters/FadeInLetters";


const StackPage = () => {

    
  const [activated, setActivated] = useState([false, false, false,false,false]);

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




    return <div>
        <FadeInLetters animated={activated[0]}>
            저는 리엑트를 주로 사용하며, 주로 함수형 컴포넌트를 선호합니다. 
            ES6++의 최신 자바스크립트를 사용합니다.
            정적 타입체크로 타입스크립트를 사용하고,
            상황에 따라 SCSS, CSS, styled-components를 사용합니다.
        </FadeInLetters >

        <FadeInLetters animated={activated[1]}>
            Micro-Interaction에는 주로 svg와 css를 적절히 결합한 애니메이션을 사용하며,
            svg 파일을 만들 때 Adobe Illutrator를 사용하기도 합니다.
        </FadeInLetters>

        <FadeInLetters animated={activated[2]}>
            정적 서버로는 AWS S3를 사용합니다.
            RESTful api 방식을 통하여 데이터를 주고 받습니다.
        </FadeInLetters>

        <FadeInLetters animated={activated[3]}>
            버전 관리는 깃을 사용하고,
            협업 도구로는 깃헙과 깃랩을 사용합니다.
        </FadeInLetters>

        <FadeInLetters animated={activated[4]}>
            최근에는 함수형 프로그래밍 패러다임의 매력을 느끼고 있습니다.
        </FadeInLetters>

    </div>

}

export default StackPage;