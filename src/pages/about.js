import React from 'react'
import Link from 'gatsby-link'
import Layout from '../layouts/index';
import Section from '../components/Section';
import styled from 'styled-components';
import '../layouts/about.css'

const Aboutie = styled.div`
    @media (max-width: 750px) {
        ${'' /* height: 1050px; */}
    }
`

const About = () => (
    <Layout>
        <Aboutie>
            <div className = "Hero">
                <Section
                    logo={require('../images/Icon.png')}
                    demo={require('../images/ProPic2.jpg')}
                />
            </div>
        </Aboutie>
    </Layout>
)

export default About