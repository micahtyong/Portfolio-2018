import React from 'react';
import styled from 'styled-components';

const InformText = styled.div`
    margin-top: -5px;
    font-size: 18px;
    font-weight: lighter;
    line-height: 1.6;
    color: black;
`

const Hello = styled.h3`
    font-size: 35px;
    font-weight: normal;
    margin: 0 0 0 0;
    line-height: 1.2;
    color: #000000;

    @media (max-width: 640px) {
        font-size: 24px;
        text-align: center;
    }
`

const Description = styled.h2`
    margin-top: 25px;
    font-size: 18px;
    font-weight: lighter;
    line-height: 1.6;
    color: black;

    @media (max-width: 640px) {
        font-size: 16px;
        padding: 0 30px; 
    }
`

const InfoText = props => (
    <InformText>
        <Hello>Hi, I’m Micah.<br />Currently a computer science student at UC Berkeley.</Hello>
        <Description>On this site, you will find a collection of my work which showcases a broad spectrum of my abilities. From iOS development to React applications, custom TensorFlow ML models to applied algorithms, #justforfun to #letsdosomethingcrazy, my main aim is to solve interesting and impactful problems with great people.</Description>
        <Description><a href="mailto:micahtyong@gmail.com">micahtyong@gmail.com</a></Description>
        <Description>View my resume <a href="https://drive.google.com/file/d/10QALVyUBpf4J-qVG1Cm5XJ-JGNS99jXm/view?usp=sharing">here</a></Description>
    </InformText>
)

export default InfoText