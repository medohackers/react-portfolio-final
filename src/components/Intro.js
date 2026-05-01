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
    flex-direction: column; 

    @media (min-width: 769px) {
        justify-content: center; 
    }
    @media (max-width: 768px) {
        justify-content: flex-start;
    }
`

const TextLeft = styled.div`
    font-size: calc(1em + 1.5vw);
    color: ${props => props.theme.body};
    padding: 2rem;
    display: flex;
    flex-direction: column;
    z-index: 3;

    @media (min-width: 769px) {
        max-width: 75%; 
    }

    @media (max-width: 768px) {
        padding: 1rem;
        padding-top: 1.5rem;
        font-size: calc(1em + 1.2vw); 
        box-sizing: border-box; 
    }
`

const TextRight = styled.div`
    font-size: calc(1rem + 1.5vw);
    color: ${props => props.theme.text};
    font-weight: 300;
    z-index: 3;

    @media (min-width: 769px) {
        position: absolute;
        top: 2rem;
        right: 1.5rem;
        text-align: right;
        max-width: 60%; 
    }

    @media (max-width: 768px) {
        position: relative;
        padding: 1rem;
        padding-top: 1.5rem;
        /* التعديل هنا: كبرنا الخط سيكا عشان يملى عينه وميضربش التصميم */
        font-size: calc(1rem + 1.5vw); 
        text-align: left;
        width: 100%;
        box-sizing: border-box; 
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
