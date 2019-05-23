import React from 'react'
import Link from 'gatsby-link'
import Card from '../components/Card';
import Section from '../components/Section';
import Wave from '../components/Wave';
import staticdata from '../../staticdata.json'
import Cell from '../components/Cell';
import styled from 'styled-components'

const SectionCaption = styled.p`
  margin: 130px 20px 40px 20px;
  font-weight: 600;
  font-size: 18px;
  text-transform: uppercase; 
  color: black;
  text-align: center;

  @media (max-width: 800px) {
    margin: 480px 20px 40px 20px;
  }
`

const SectionCellGroup = styled.div`
  max-width: 800px;
  margin: 0 auto 100px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
  grid-column-gap: 20px;
  padding: 0 20px; 

  @media (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

const IndexPage = () => (
  <div>
    <div className = "Hero">
      <div className = "HeroGroup">
        <h1>Hi!<br />I’m Micah Yong</h1>

        <p>an LA-born, computer science student at the
         University of California, Berkeley.</p>

        <p>I love programming, designing, and grooving.</p>

        <Link to="/page-2/">See my work</Link>
        <div className = "Logos">
          {/* <img src = {require('../images/enhance.png')} width = "160" />
          <img src = {require('../images/engage.png')} width = "160" />
          <img src = {require('../images/partytime.png')} width = "160" /> */}
        </div>
      </div>
      <Wave />
    </div>
    <div className = "Cards">
      <h2>SHOWING ALL</h2>
        <div className = "CardGroup">
          <Card 
            title = "Enhance"
            text = "Fitness training program using OpenPose"
            image = {require('../images/enhance.png')}
            platform = "iOS"
          />
          <Card 
            title = "Engage"
            text = "Facilitate interaction in large classrooms"
            image = {require('../images/engage.png')}
            platform = "iOS"
          />
          <Card 
            title = "PartyTime"
            text = "Design concept to digitize and improve Greek life"
            image = {require('../images/partytime.png')}
            platform = "Figma"
          />
        </div>
    </div>
    <Section 
      // image={require('../images/White.png')}
      logo={require('../images/Icon.png')}
      demo={require('../images/ProPic2.jpg')}
    />
    <SectionCaption>All projects</SectionCaption>
    <SectionCellGroup>
    {staticdata.cells.map(cell => (
      <Cell
        title={cell.title}
        image={cell.image} />
    ))}
    </SectionCellGroup>
  </div>
)

export default IndexPage



