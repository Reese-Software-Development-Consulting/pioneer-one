// AboutPage.jsx
import React from 'react';
import { Box, Typography } from '@mui/material';
import Stepper from '../components/pageComponents/Stepper'; 
import BodySection from '../components/pageComponents/body/BodySection';
import employee1 from '../assets/test_images/black_man_employee_stock_image.jpg';
import Position from '../enums/PositionEnum'
import BodySectionType from '../enums/BodySectionTypes'
import Theme from '../enums/ColorThemes'
import employee2 from '../assets/test_images/blackhair_man_employee_stock_image.jpg';
import employee3 from '../assets/test_images/redhead_employee_stock_image.jpg';
import ParagraphSection from '../components/text/ParagraphSection'
import Image from '../components/images/Image'
import HomeImage from '../assets/test_images/CarlsConstructionhome.jpeg'

const AboutPage = () => {
  const employeeSlides = [
    {
      backgroundImage: employee1,
      height: '40%',
      width: '75%',
      titleText: 'Jane Doe',
      titleTextFont: 'Georgia',
      titleTextSize: '2rem',
      titleTextColor: '#333',
      titleTextBold: true,
      dividerColor: '#d8a47f',
      dividerWidth: '60px',
      paragraphText: 'Lead Designer with 10+ years of experience in modern UI/UX.',
      paragraphTextFont: 'Arial',
      paragraphTextSize: '1rem',
      paragraphTextColor: '#555',
      showButton: true,
      buttonText: 'View Profile',
      buttonColor: '#d8a47f',
      buttonTextColor: '#fff',
      buttonHyperlink: '/team/jane',
      buttonHeight: '40px',
      buttonWidth: '140px',
    },
    {
      backgroundImage: employee2,
      height: '40%',
      width: '75%',
      titleText: 'John Smith',
      titleTextFont: 'Georgia',
      titleTextSize: '2rem',
      titleTextColor: '#333',
      titleTextBold: true,
      dividerColor: '#d8a47f',
      dividerWidth: '60px',
      paragraphText: 'Project Manager passionate about delivering client success.',
      paragraphTextFont: 'Arial',
      paragraphTextSize: '1rem',
      paragraphTextColor: '#555',
      showButton: true,
      buttonText: 'View Profile',
      buttonColor: '#d8a47f',
      buttonTextColor: '#fff',
      buttonHyperlink: '/team/john',
      buttonHeight: '40px',
      buttonWidth: '140px',
    },
    {
      backgroundImage: employee3,
      height: '40%',
      width: '75%',
      titleText: 'Sarah Lee',
      titleTextFont: 'Georgia',
      titleTextSize: '2rem',
      titleTextColor: '#333',
      titleTextBold: true,
      dividerColor: '#d8a47f',
      dividerWidth: '60px',
      paragraphText: 'Marketing Specialist focused on creative brand growth.',
      paragraphTextFont: 'Arial',
      paragraphTextSize: '1rem',
      paragraphTextColor: '#555',
      showButton: true,
      buttonText: 'View Profile',
      buttonColor: '#d8a47f',
      buttonTextColor: '#fff',
      buttonHyperlink: '/team/sarah',
      buttonHeight: '40px',
      buttonWidth: '140px',
    },
  ];

  return (
    <Box>
      {/* About Section */}
      <Box
        sx={{
          padding: '80px 20px',
          textAlign: 'center',
          backgroundColor: '#fdfdfd',
        }}
      >
        <Typography
          variant="h2"
          sx={{ fontWeight: 'bold', mb: 4, color: '#333' }}
        >
          About Us
        </Typography>
        <Typography
          variant="body1"
          sx={{ maxWidth: '800px', margin: '0 auto', mb: 6, color: '#555' }}
        >
          We’re a passionate team committed to creating amazing experiences. 
          Learn more about the people who make it all possible.
        </Typography>

        <BodySection
        type={BodySectionType.DOUBLE}
        leftContent={
          <ParagraphSection
            titleText="GET A QUOTE TODAY"
            paragraphText="We guarantee to do a thorough inspection of all your cracks, so we can provide the most accurate price, beating our competitors, for all your crack filling needs."
            buttonText="CONTACT US"
            justifyContent={Position.LEFT}
            buttonHyperlink="/contact"
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
          <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Stepper
            slides={employeeSlides}
            width="100%"
            height="400px"
            borderRadius="12px"
          />
        </Box>
          
        }
        rightContent={
          <ParagraphSection
            titleText="MEET THE TEAM"
            paragraphText="Each of our employees is trained by expert crack inspectors, to become expert crack inspectors. They are also coached to give the best price to fill your crack."
            buttonText="CONTACT US"
            justifyContent={Position.LEFT}
            buttonHyperlink="/contact"
            buttonColor={Theme.Modern.Secondary1}
            dividerColor={Theme.Modern.Secondary1}
          />
        }
      />

       
        

      </Box>
    </Box>
  );
};

export default AboutPage;
