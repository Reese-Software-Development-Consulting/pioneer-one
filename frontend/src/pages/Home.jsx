import React from 'react';
import { Box, useMediaQuery } from '@mui/material';
import Theme from '../enums/ColorThemes';
import Position from '../enums/PositionEnum';

import ParagraphSection from '../components/text/ParagraphSection';
import Image from '../components/images/CustomImage';
import PageHeader from '../components/interactive/PageHeader';
import Stepper from '../components/interactive/Slideshow';
import SimpleStepper from '../components/interactive/SimpleStepper';
import VideoComponent from '../components/images/YoutubeVideo';
import CustomBodyCard from '../components/structure/BodyCard';

import HeaderVideo from '../assets/test_images/compressedVideo.mp4';
import HomeImage from '../assets/test_images/CarlsConstructionhome.jpeg';
import ResidentialImage from '../assets/test_images/carlsconstructionfamily.jpeg';
import CommercialImage from '../assets/test_images/carlsConstructionCommercial.jpeg';

const CONTENT_MAX_WIDTH = '1100px';
const GAP = 4;

const Home = () => {
  const isMobile = useMediaQuery('(max-width:900px)');

  const sectionStyle = {
    width: '100%',
    maxWidth: CONTENT_MAX_WIDTH,
    mx: 'auto',
    px: { xs: 3, sm: 5, md: 8 },
    py: { xs: 4, sm: 6, md: 10 },
    textAlign: 'center',
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: GAP,
    boxSizing: 'border-box',
  };

  const innerBoxStyle = {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    maxWidth: '100%',
    mb: isMobile ? 3 : 0,
  };

  return (
    <>
      <PageHeader
        titleText="Carl's Construction"
        titleFont="Georgia, serif"
        titleColor={Theme.Earthy.Background}
        titleBold={true}
        video={HeaderVideo}
        height="500px"
      />

      {/* -------- CRACK FILLING -------- */}
      <Box sx={sectionStyle}>
        <Box sx={innerBoxStyle}>
          <ParagraphSection
            width="100%"
            titleText="CRACK FILLING"
            paragraphText="Cracks are where bad things start to happen. Water sneaks in and weakens your parking lot’s base, causing damage and costly repairs. Carl’s Construction fills those cracks to protect your surface and extend its lifespan."
            buttonText="SEE OUR WORK"
            justifyContent={Position.LEFT}
            buttonHyperlink="/about"
            buttonColor={Theme.Earthy.Secondary1}
            dividerColor={Theme.Earthy.Secondary1}
            titleTextColor={Theme.Earthy.Text}
            paragraphTextColor={Theme.Earthy.Text}
          />
        </Box>

        <Box sx={innerBoxStyle}>
          <Image
            src={HomeImage}
            alt="Excavator at work"
            width="100%"
            height="300px"
            borderRadius="16px"
            objectFit="cover"
          />
        </Box>
      </Box>

      {/* -------- RESIDENTIAL SERVICES -------- */}
      <Box sx={sectionStyle}>
        <Box sx={innerBoxStyle}>
          <Image
            src={ResidentialImage}
            alt="Residential paving project"
            width="100%"
            height="300px"
            borderRadius="16px"
            objectFit="cover"
          />
        </Box>

        <Box sx={innerBoxStyle}>
          <ParagraphSection
            width="100%"
            titleText="RESIDENTIAL SERVICES"
            paragraphText="Carl’s Construction helps homeowners with expert paving, driveway repair, and property enhancement solutions. We bring professionalism and care to every residential project."
            buttonText="LEARN MORE"
            justifyContent={Position.LEFT}
            buttonHyperlink="/about"
            buttonColor={Theme.Earthy.Secondary1}
            dividerColor={Theme.Earthy.Secondary1}
            titleTextColor={Theme.Earthy.Text}
            paragraphTextColor={Theme.Earthy.Text}
          />
        </Box>
      </Box>

      {/* -------- COMMERCIAL PROJECTS -------- */}
      <Box sx={sectionStyle}>
        <Box sx={innerBoxStyle}>
          <ParagraphSection
            width="100%"
            titleText="COMMERCIAL PROJECTS"
            paragraphText="From retail centers to office parks, Carl’s Construction delivers reliable commercial paving, grading, and lot maintenance to keep your business looking its best."
            buttonText="CONTACT US"
            justifyContent={Position.LEFT}
            buttonHyperlink="/contact"
            buttonColor={Theme.Earthy.Secondary1}
            dividerColor={Theme.Earthy.Secondary1}
            titleTextColor={Theme.Earthy.Text}
            paragraphTextColor={Theme.Earthy.Text}
          />
        </Box>

        <Box sx={innerBoxStyle}>
          <Image
            src={CommercialImage}
            alt="Commercial construction site"
            width="100%"
            height="300px"
            borderRadius="16px"
            objectFit="cover"
          />
        </Box>
      </Box>

      {/* -------- SLIDESHOW -------- */}
      <Box
        sx={{
          width: '100%',
          maxWidth: '900px',
          mx: 'auto',
          px: { xs: 3, sm: 5, md: 8 },
          py: { xs: 4, sm: 6, md: 10 },
          textAlign: 'center',
          boxSizing: 'border-box',
        }}
      >
        <Stepper
          width="100%"
          height="300px"
          slides={[
            {
              backgroundColor: Theme.Earthy.Background,
              titleText: 'Start the Conversation',
              titleTextFont: 'Georgia',
              titleTextSize: '2rem',
              titleTextColor: Theme.Earthy.Text,
              titleTextBold: true,
              dividerColor: Theme.Earthy.Secondary1,
              dividerWidth: '100px',
              paragraphText:
                'Reach out to Carl’s Construction and let us know what you need. Whether it’s residential, commercial, or custom work—we’re here to help.',
              paragraphTextFont: 'Arial',
              paragraphTextSize: '1.1rem',
              paragraphTextColor: Theme.Earthy.Text,
              buttonText: 'Contact Us',
              buttonColor: Theme.Earthy.Secondary1,
              buttonTextColor: Theme.Earthy.Background,
              buttonHyperlink: '/contact',
              justifyContent: 'center',
            },
            {
              backgroundColor: Theme.Earthy.Primary1,
              titleText: 'Receive Your Custom Quote',
              titleTextFont: 'Georgia',
              titleTextSize: '2rem',
              titleTextColor: Theme.Earthy.Text,
              titleTextBold: true,
              dividerColor: Theme.Earthy.Secondary1,
              dividerWidth: '100px',
              paragraphText:
                'After understanding your goals, we’ll deliver a tailored quote with clear timelines and fair pricing—no surprises, just transparency.',
              paragraphTextFont: 'Arial',
              paragraphTextSize: '1.1rem',
              paragraphTextColor: Theme.Earthy.Text,
              showButton: false,
            },
            {
              backgroundColor: Theme.Earthy.Primary2,
              titleText: 'Watch the Work Begin',
              titleTextFont: 'Georgia',
              titleTextSize: '2rem',
              titleTextColor: Theme.Earthy.Text,
              titleTextBold: true,
              dividerColor: Theme.Earthy.Secondary2,
              dividerWidth: '100px',
              paragraphText:
                'With everything approved, our trusted team gets to work—bringing your vision to life with skill, speed, and precision.',
              paragraphTextFont: 'Arial',
              paragraphTextSize: '1.1rem',
              paragraphTextColor: Theme.Earthy.Text,
              showButton: false,
            },
          ]}
        />
      </Box>

      {/* -------- SIMPLE STEPPER -------- */}
      <Box
        sx={{
          width: '100%',
          maxWidth: '900px',
          mx: 'auto',
          px: { xs: 3, sm: 5, md: 8 },
          py: { xs: 4, sm: 6, md: 10 },
          textAlign: 'center',
          boxSizing: 'border-box',
        }}
      >
        <SimpleStepper
          height="400px"
          width="100%"
          backgroundColor={Theme.Earthy.Background}
          color={Theme.Earthy.Secondary1}
          boxSize={300}
          elements={[
            { textFont: 'Georgia', textSize: '1.5rem', textColor: Theme.Earthy.Text, text: 'Step 1' },
            { textFont: 'Georgia', textSize: '1.5rem', textColor: Theme.Earthy.Text, text: 'Step 2' },
            { textFont: 'Georgia', textSize: '1.5rem', textColor: Theme.Earthy.Text, text: 'Step 3' },
          ]}
        />
      </Box>

      {/* -------- VIDEO -------- */}
      <Box
        sx={{
          width: '100%',
          maxWidth: CONTENT_MAX_WIDTH,
          mx: 'auto',
          px: { xs: 3, sm: 5, md: 8 },
          py: { xs: 4, sm: 6, md: 10 },
          textAlign: 'center',
          boxSizing: 'border-box',
          objectFit: 'contain',
        }}
      >
        <VideoComponent
          youtubeUrl="https://www.youtube.com/watch?v=_UvtNbOp2Zs"
          width="100%"
          height="450px"
          borderRadius="16px"
        />
      </Box>

      {/* -------- BODY CARD -------- */}
      <Box
        sx={{
          width: '100%',
          maxWidth: CONTENT_MAX_WIDTH,
          mx: 'auto',
          px: { xs: 3, sm: 5, md: 8 },
          py: { xs: 4, sm: 6, md: 10 },
          display: 'flex',
          justifyContent: 'center',
          boxSizing: 'border-box',
        }}
      >
        <CustomBodyCard
          CardWidth="100%"
          CardBackground={Theme.Earthy.Primary1}
          CardHeight="auto"
          imageSrc={HomeImage}
          imageAlt="Construction Site"
          imageWidth="100%"
          imageBorderRadius="12px"
          imageObjectFit="cover"
          imageMaxWidth="100%"
          imageResponsive={true}
          titleText="Top-Quality Construction"
          titleTextSize="24px"
          titleTextFont="Georgia, serif"
          titleBold={true}
          titleColor={Theme.Earthy.Text}
          textText="We provide industry-leading construction services across residential and commercial sectors. From foundation to finish, our team ensures every detail meets your expectations."
          textTextSize="16px"
          textTextFont="Arial, sans-serif"
          textColor={Theme.Earthy.Text}
          buttonText="View Our Projects"
          buttonColor={Theme.Earthy.Secondary1}
          buttonRounded={true}
          buttonHyperlink="/projects"
          buttonHeight="45px"
          buttonWidth="260px"
          ImagePosition={Position.LEFT}
        />
      </Box>
    </>
  );
};

export default Home;
