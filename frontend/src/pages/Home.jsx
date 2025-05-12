import React from 'react'
import Theme from '../enums/ColorThemes'

import BodySection from '../components/pageComponents/body/BodySection'
import ParagraphSection from '../components/text/ParagraphSection'
import Image from '../components/images/CustomImage'
import PageHeader from '../components/pageComponents/PageHeader'

import Position from '../enums/PositionEnum'
import BodySectionType from '../enums/BodySectionTypes'

import HeaderVideo from '../assets/test_images/compressedVideo.mp4'
import HomeImage from '../assets/test_images/CarlsConstructionhome.jpeg'
import ResidentialImage from '../assets/test_images/carlsconstructionfamily.jpeg'
import CommercialImage from '../assets/test_images/carlsConstructionCommercial.jpeg'

const Home = () => {
  return (
    <>
      <PageHeader
        titleText="Carl's Construction"
        titleFont="Georgia, serif"
        titleColor="#fff"
        titleBold={true}
        video={HeaderVideo}
        height="500px"
      />
      <BodySection
        type={BodySectionType.DOUBLE}
        leftContent={
          <ParagraphSection
            titleText="CRACK FILLING"
            paragraphText="Cracks are where bad things start to happen. Water sneaks in and weakens your parking lot’s base, causing damage and costly repairs. Carl’s Construction fills those cracks to protect your surface and extend its lifespan."
            buttonText="SEE OUR WORK"
            justifyContent={Position.LEFT}
            buttonHyperlink="/about"
            buttonColor={Theme.Modern.Secondary1}
            dividerColor={Theme.Modern.Secondary1}
          />
        }
        rightContent={
          <Image
            src={HomeImage}
            alt="Excavator at work"
            width="100%"
            height="300px"
            borderRadius="16px"
            objectFit="cover"
          />
        }
      />

      <BodySection
        type={BodySectionType.DOUBLE}
        leftContent={
          <Image
            src={ResidentialImage}
            alt="Residential paving project"
            width="100%"
            height="300px"
            borderRadius="16px"
            objectFit="cover"
          />
        }
        rightContent={
          <ParagraphSection
            titleText="RESIDENTIAL SERVICES"
            paragraphText="Carl’s Construction helps homeowners with expert paving, driveway repair, and property enhancement solutions. We bring professionalism and care to every residential project."
            buttonText="LEARN MORE"
            justifyContent={Position.LEFT}
            buttonHyperlink="/about"
            buttonColor={Theme.Modern.Secondary1}
            dividerColor={Theme.Modern.Secondary1}
          />
        }
      />

      <BodySection
        type={BodySectionType.DOUBLE}
        leftContent={
          <ParagraphSection
            titleText="COMMERCIAL PROJECTS"
            paragraphText="From retail centers to office parks, Carl’s Construction delivers reliable commercial paving, grading, and lot maintenance to keep your business looking its best."
            buttonText="CONTACT US"
            justifyContent={Position.LEFT}
            buttonHyperlink="/contact"
            buttonColor={Theme.Modern.Secondary1}
            dividerColor={Theme.Modern.Secondary1}
          />
        }
        rightContent={
          <Image
            src={CommercialImage}
            alt="Commercial construction site"
            width="100%"
            height="300px"
            borderRadius="16px"
            objectFit="cover"
          />
        }
      />
    </>
  );
};

export default Home;