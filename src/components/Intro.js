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

// أزلنا align-items: flex-end لكي لا ينزل النص للأسفل
const SubBox = styled.div`
    width: 50%;
    position: relative;
    display: flex;
    justify-content: center;
    flex-direction: column; /* لترتيب النصوص بشكل عمودي مريح */
`

const TextLeft = styled.div`
    font-size: calc(1em + 1.5vw);
    color: ${props => props.theme.body};
    padding: 2rem;
    display: flex;
    flex-direction: column;
    z-index: 3;
`

const TextRight = styled.div`
    font-size: calc(0.5rem + 1.5vw);
    color: ${props => props.theme.text};
    padding: 2rem;
    display: flex;
    flex-direction: column;
    font-weight: 300;
    z-index: 3;
`

// الحاوية المستقلة للصورة لتبقى في الأسفل دائماً
const ImageContainer = styled(motion.div)`
    position: absolute;
    bottom: 0; /* تثبيت الصورة في الأسفل */
    left: 50%;
    transform: translate(-50%, 0);
    width: 40%; /* يمكنك تعديل العرض لتكبير أو تصغير الصورة */
    height: auto;
    z-index: 2;

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
                <TextLeft>
                    <h1>Hi,</h1>
                    <h3>I'm Carlos Michel.</h3>
                </TextLeft>
            </SubBox>
            
            <ImageContainer
                initial={{opacity:0}}
                animate={{opacity: 1}}
                transition={{ duration:1, delay:2 }}
            >
                <img className="pic" src={Me} alt="Profile Pic" />
            </ImageContainer>
            
            <SubBox>
                <TextRight>
                    <h6>I am a programmer and a trader in the crypto market.</h6>
                </TextRight>
            </SubBox>
        </Box>
    )
}

export default Intro
