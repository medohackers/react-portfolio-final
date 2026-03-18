import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import Me from '../assets/Images/profile-img.png'

const Box = styled(motion.div)`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    width: 65vw;
    height: 55vh;
    display: flex;

    background: linear-gradient(
        to right,
        ${props => props.theme.body} 50%,
        ${props => props.theme.text} 50%) bottom,
        linear-gradient(
        to right,
        ${props => props.theme.body} 50%,
        ${props => props.theme.text} 50%) top;
    background-repeat: no-repeat;
    background-size: 100% 2px;
    border-left: 2px solid ${props => props.theme.body};
    border-right: 2px solid ${props => props.theme.text};

    z-index: 1;
`

const SubBox = styled.div`
    width: 50%;
    position: relative;
    display: flex;
    justify-content: center; /* سنستخدمها لتوسيط الصورة */
    align-items: flex-end; /* لضبط محاذاة الصورة في الأسفل */
`

const Text = styled.div`
    font-size: calc(1em + 1.5vw);
    color: ${props => props.theme.body};
    padding: 2rem;
    cursor: pointer;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`

const TextRight = styled.div`
    font-size: calc(0.5rem + 1.5vw);
    color: ${props => `rgba(${props.theme.bodyRgba},0.6)` };
    font-weight: 300;
`

// حاوية جديدة للصورة للتحكم بتموضعها المنفصل
const ImageContainer = styled(motion.div)`
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0);
    width: 40%; // يمكنك ضبط الحجم كما تريد
    height: auto;
    z-index: 2; // تأكد من أنها فوق الخلفية ولكن تحت النصوص إن لزم الأمر

    .pic {
        width: 100%;
        height: auto;
    }
`

const Intro = () => {
    return (
        <Box
        initial={{height:0}}
        animate={{height: '55vh'}}
        transition={{ type: 'spring', duration:2, delay:1 }}
        >
            <SubBox>
                <Text>
                    <h1>Hi,</h1>
                    <h3>I'm Carlos Michel.</h3>
                </Text>
            </SubBox>
            
            {/* فصلنا الصورة عن الـ SubBox الأيمن لنقلها للأسفل في المنتصف */}
            <ImageContainer
                initial={{opacity:0}}
                animate={{opacity: 1}}
                transition={{ duration:1, delay:2 }}
            >
                <img className="pic" src={Me} alt="Profile Pic" />
            </ImageContainer>
            
            <SubBox>
                <Text>
                    {/* يمكنك نقل النص الأيمن هنا إذا أردت */}
                    <TextRight>
                        <h6>I am a programmer and a trader in the crypto market.</h6>
                    </TextRight>
                </Text>
            </SubBox>
        </Box>
    )
}

export default Intro
