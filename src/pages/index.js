import React from 'react'
import Link from 'gatsby-link'
import Card from '../components/card';
import Section from '../components/section';
import Wave from '../components/wave';
import staticdata from '../../staticdata.json'
import styled from 'styled-components'
import Cell from '../components/cell'


const SectionCaption = styled.p`
  font-weight: 600;
  font-size: 18px;
  text-transform: uppercase;
  color: #94A4BA;
  text-align: center;
`

const SectionCellGroup = styled.div`
  max-width: 800px;
  margin: 0 auto 100px;
  padding: 0 20px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;

  @media (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

const IndexPage = () => (
  <div>
    <div className="Hero">
        <div className="HeroGroup">
          <h1>Welcome to<br/>Church in San Jose</h1>
          <p>The Lord loves us before we love Him.</p>
          <Link to="/page-2">Join us</Link>
          <div className="Logos">
            <img src={require('../images/logo-sketch.png')} width="50" />
            <img src={require('../images/logo-figma.png')} width="50" />
            <img src={require('../images/logo-studio.png')} width="50" />
            <img src={require('../images/logo-framer.png')} width="50" />
            <img src={require('../images/logo-react.png')} width="50" />
            <img src={require('../images/logo-swift.png')} width="50" />
          </div>
          <Wave/>
        </div>
    </div>
    <div className="Cards">
      <h2>The Lord loves us before we love Him.</h2>
      <div className="CardGroup">
        <Card 
          title="Announcements"
          text="Last update 1 day ago"
          image={require('../images/wallpaper.jpg')} />
        <Card 
          title="Readings"
          text="Last update 2 days ago"
          image={require('../images/wallpaper2.jpg')} />
        <Card 
          title="Church Services"
          text="Last update 3 hours ago"
          image={require('../images/wallpaper3.jpg')} />
        <Card 
          title="Contact Us"
          text="Last update 1 month ago"
          image={require('../images/wallpaper4.jpg')} />
      </div>
    </div>
    <Section
      image={require('../images/wallpaper2.jpg')}
      logo={require('../images/logo-react.png')}
      title="About Us"
      text="We are believers in the Lord Jesus Christ who have personally received Him as our Savior. He is the most excellent and enjoyable Person.
      We love Him and endeavor to give Him the first place in all things.
      We rejoice to be cleansed by the blood of Jesus, God’s Son, born again of the Father’s divine life, and filled with the Holy Spirit.
      We highly treasure the Holy Bible as God’s revelation of Himself and of His eternal purpose.
      We hold the common faith which is revealed in the Bible and is common to all genuine believers.
      As is true of all believers in Christ, we are members of His one Body, the church. In order to practice the oneness of the Body with all the Christians in San Jose, we meet as the Church in San Jose.
      We are in fellowship with over 2,000 local churches worldwide to express the one Body of Christ."
      />

      <SectionCaption>12 sections - 6 hours</SectionCaption>
      <SectionCellGroup>
        {staticdata.cells.map(cell => (
          <Cell title={cell.title} image={cell.image} />
        ))}
      </SectionCellGroup>

    <Link to="/page-2/">Go to page 2</Link>
  </div>

  
  
)

export default IndexPage