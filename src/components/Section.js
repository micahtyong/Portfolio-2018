import React from 'react'
import styled from 'styled-components'
import Wave from '../components/Wave';
import InfoText from './InfoText';

const SectionGroup = styled.div`
    margin: 0 60px;
    background-color: rgba(0,0,0,.0);
    height: 692px;
    display: grid;
    grid-template-rows: 200px auto;
    grid-gap: 10px;
    position: relative;

    @media (max-width: 640px) {
        height: 820px;
    }
`
const SectionLogo = styled.img`
    align-self: end;
    width: 70px;
    height: 70px;
    margin: 10px auto;
`

const SectionTitleGroup = styled.div`
    display: grid;
    grid-template-columns: 550px auto;
    margin: 0 auto;
    grid-gap: 30px; 
    grid-template-rows: auto 100%;

    @media (max-width: 720px) {
        grid-template-columns: 1fr;
    }
`

const SectionPhoto = styled.img`
    width: 480px;
    height: 360.16px;
    margin: 0 auto;

    @media (max-width: 640px) {
        width: 320px;
        height: 240.11px;
        margin: 0 auto;
    }
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

const SectionInfo = styled.div`
    margin: 0px auto;
    width: 100%;
    height: 592px;
`

const Section = props => (
    <SectionGroup>
        <SectionLogo src={props.logo} />
        <SectionTitleGroup>
            <SectionPhoto src={props.demo} />
            <SectionInfo><InfoText /></SectionInfo>
        </SectionTitleGroup>
    </SectionGroup>
)

export default Section