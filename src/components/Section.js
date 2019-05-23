import React from 'react'
import styled from 'styled-components'
import Wave from '../components/Wave';
import InfoText from './InfoText';

const SectionGroup = styled.div`
    background: white;
    background-size: cover;
    height: 720px;
    display: grid;
    grid-template-rows: 200px auto;
    grid-gap: 20px;
    position: relative;

    @media (max-width: 640px) {
        height: 820px;
    }
`
const SectionLogo = styled.img`
    align-self: end;
    width: 100px;
    height: 100px;
    margin: 0 auto;
`

const SectionTitleGroup = styled.div`
    display: grid;
    grid-template-columns: 550px auto;
    margin: 0 40px;
    grid-gap: 20px; 
    grid-template-rows: auto 100%;

    @media (max-width: 720px) {
        grid-template-columns: 1fr;
    }
`

const SectionPhoto = styled.img`
    width: 550px;
    height: 412.68px;
    margin: 0 auto;
`

const SectionTitle = styled.h3`
    font-size: 40px;
    line-height: 1.2;
    margin: 0;
    font-weight: normal;
    color: #000000;

    @media (max-width: 720px) {
        font-size: 30px;
    }
`

const SectionText = styled.p`
    font-size: 20px;
    line-height: 1.2;
    margin: 0;

    @media (max-width: 720px) {
        font-size: 14px;
    }
`

const WaveTop = styled.div`
    position: absolute;
    width: 100%;
    top: -6px;
    transform: rotate(180deg)
`

const WaveBottom = styled.div`
    position: absolute;
    width: 100%;
    bottom: -6px;
`

const SectionInfo = styled.div`
`

const Section = props => (
    <SectionGroup>
        <SectionLogo src={props.logo} />
        <SectionTitleGroup>
            <SectionPhoto image={props.demo} />
            <SectionInfo><InfoText /></SectionInfo>
            {/* <SectionTitle>{props.title}</SectionTitle>
            <SectionTitle>{props.subtitle}</SectionTitle>
            <SectionText>{props.text}</SectionText> */}
        </SectionTitleGroup>
    </SectionGroup>
)

export default Section