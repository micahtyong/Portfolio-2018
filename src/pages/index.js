import React from 'react';
import Link from 'gatsby-link';
import Card from '../components/Card';
import Section from '../components/Section';
import Wave from '../components/Wave';
import staticdata from '../../staticdata.json'
import Cell from '../components/Cell';
import styled from 'styled-components';
import Layout from '../layouts/index';
import StripeCheckout from 'react-stripe-checkout'
import ScrollableAnchor from 'react-scrollable-anchor'

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

const Mover = styled.a`
  font-size: 17px;
  font-weight: 600;
  color: white;
  text-transform: uppercase;
  background: #E64B3E;
  padding: 15px 23px;
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 25px; 
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
`

class Striper extends React.Component {
  handlePurchase = (token) => {
    const amount = 500
    const description = "My awesome product"
  
    const bodyObject = {
      tokenId: token.id,
      email: token.email,
      name: token.name,
      description,
      amount
    }
  
    fetch('http://localhost:9000/stripe-charge', {
      method: 'POST',
      body: JSON.stringify(bodyObject)
    })
  }
}


const IndexPage = () => (
  <Layout>
  <div>
    <div className = "Hero">
      <div className = "HeroGroup">
        <h1>Hi!<br />I’m Micah Yong</h1>

        <p>an LA-born, computer science student at the
         University of California, Berkeley.</p>

        <p>I promise that my projects, designs, and dance moves won't bore you.</p>

        {/* <StripeCheckout
          amount={500}
          image="https://cl.ly/0K2f1V3K3h0D/download/Logo.jpg"
          token={Striper.handlePurchase}
          stripeKey={'pk_test_Zr2S9mfUuIIKpjeixs2sRbd200H7M16gyB'}>
          <button>Support my work</button>
        </StripeCheckout> */}

        <a className="Mover" href="#my-projects">See my work</a>
        
        <div className = "Logos">
          {/* <img src = {require('../images/enhance.png')} width = "160" />
          <img src = {require('../images/engage.png')} width = "160" />
          <img src = {require('../images/partytime.png')} width = "160" /> */}
        </div>
      </div>
      <Wave />
    </div>
    <ScrollableAnchor id={'my-projects'}>
        <div></div>
    </ScrollableAnchor>
    <div className = "Cards">
      <h2>FEATURED</h2>
        <div className = "CardGroup">
          <Card 
            title = "Enhance"
            url = "https://github.com/micahtyong/Enhance"
            text = "Fitness training program using OpenPose"
            image = {require('../images/enhance.png')}
            platform = "iOS"
          />
          <Card 
            title = "Engage"
            url = "https://github.com/micahtyong/Engage-iOS-1.2"
            text = "Gauge student mastery in large classrooms"
            image = {require('../images/engage.png')}
            platform = "iOS"
          />
          <Card 
            title = "PartyTime"
            url = "https://github.com/micahtyong/PartyTime"
            text = "Design concept to digitize and improve Greek life"
            image = {require('../images/partytime.png')}
            platform = "Figma"
          />
        </div>
    </div>
    {/* <Section 
      logo={require('../images/Icon.png')}
      demo={require('../images/ProPic2.jpg')}
    /> */}
    <SectionCaption>SHOWING ALL</SectionCaption>
    <SectionCellGroup>
    {staticdata.cells.map(cell => (
      <Cell
        title={cell.title}
        image={cell.image} />
    ))}
    </SectionCellGroup>
  </div>
  </Layout>
)

export default IndexPage



