import React from 'react';
import FadeInLetters from "../components/Letters/FadeInLetters";
import Mail from '../components/svg/Mail';
import Phone from '../components/svg/Phone';



const ContactPage =()=>{

    return <FadeInLetters animated={true}>
          <br />
                <br />
                <br />
        <Mail/> <a href="mailto:gksxodud2721@gmail.com">gksxodud2721@gmail.com</a>
        <br/>
        <br/>
        <Phone/> 010-8276-8206
        <br/>
        <br/>
        Github : <a href="https://github.com/HanTaeyeong" target="_blank" rel="noopener noreferrer">https://github.com/HanTaeyeong</a>
        
        </FadeInLetters>
}

export default ContactPage;