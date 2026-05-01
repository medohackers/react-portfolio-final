import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import Me from '../assets/Images/profile-img.png'

const Box = styled(motion.div)`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    width: 60vw; 
    height: 50vh; 
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

    @media (max-width: 768px) {
        width: 85vw;
        height: 65vh;
    }
`

const SubBox = styled.div`
    width: 50%;
    position: relative;
    display: flex;
    justify-content: center; 
    flex-direction: column; 
`

const TextLeft = styled.div`
    font-size: calc(1em + 1.5vw);
    color: ${props => props.theme.body};
    padding: 2rem;
    display: flex;
    flex-direction: column;
    z-index: 3;

    @media (max-width: 768px) {
        padding: 1rem;
        font-size: calc(1em + 2vw);
    }
`

const TextRight = styled.div`
    font-size: calc(1rem + 1.5vw);
    color: ${props => props.theme.text};
    font-weight: 300;
    z-index: 3;

    /* التعديل هنا: ثبتنا النص فوق على اليمين جوه المربع للاب توب */
    position: absolute;
    top: 2rem;
    right: 2rem;
    text-align: right;
    width: 85%;

    @media (max-width: 768px) {
        /* رجعنا كل حاجة لطبيعتها للموبايل عشان ميبوظش */
        position: relative;
        top: auto;
        right: auto;
        padding: 0.5rem;
        font-size: calc(1rem + 2vw);
        text-align: left;
        width: 100%;
    }
`

const ImageContainer = styled(motion.div)`
    position: absolute;
    bottom: 0; 
    left: 50%;
    transform: translate(-50%, 0);
    height: 85%; 
    display: flex;
    align-items: flex-end; 
    z-index: 2;

    .pic {
        max-height: 100%; 
        width: auto; 
        max-width: 100%;
        object-fit: contain;
    }

    @media (max-width: 768px) {
        height: 90%; 
    }
`

const Intro = () => {
    return (
        <Box
        initial={{height:0}}
        animate={{height: '50vh'}}
        transition={{ type: 'spring', duration:2, delay:1 }}
        >
            <SubBox>
                <TextLeft>
                    <h1>Hi,</h1>
                    <h3>I'm Carlos Misheil.</h3>
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
                    <h6>𝑰 𝒂𝒎 𝒂 𝒑𝒓𝒐𝒈𝒓𝒂𝒎𝒎𝒆𝒓 𝒂𝒏𝒅 𝒂 𝒕𝒓𝒂𝒅𝒆𝒓 𝒊𝒏 𝒕𝒉𝒆 𝒄𝒓𝒚𝒑𝒕𝒐 𝒎𝒂𝒓𝒌𝒆𝒕.</h6>
                </TextRight>
            </SubBox>
        </Box>
    )
}

export default Intro
