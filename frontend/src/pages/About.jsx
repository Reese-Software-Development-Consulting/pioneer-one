import React from 'react';
import { Box, Typography } from '@mui/material';

import Theme from '../enums/ColorThemes';
import Position from '../enums/PositionEnum';
import Orientation from '../enums/Orientation'

import ParagraphSection from '../components/text/ParagraphSection';
import Image from '../components/images/CustomImage';
import Stepper from '../components/interactive/Slideshow';
import Container from '../components/structure/Container';

import employee1 from '../assets/test_images/black_man_employee_stock_image.jpg';
import employee2 from '../assets/test_images/blackhair_man_employee_stock_image.jpg';
import employee3 from '../assets/test_images/redhead_employee_stock_image.jpg';
import HomeImage from '../assets/test_images/CarlsConstructionhome.jpeg';

const AboutPage = () => {
  const employeeSlides = [
    {
      backgroundImage: employee1,
      height: '40%',
      width: '75%',
      titleText: 'Jane Doe',
      titleTextFont: "var(--font-poppins), sans-serif",
      titleTextSize: '2rem',
      titleTextColor: Theme.Earthy.Text,
      titleTextBold: true,
      dividerColor: Theme.Earthy.Secondary1,
      dividerWidth: '60px',
      paragraphText: 'Lead Designer with 10+ years of experience in modern UI/UX.',
      paragraphTextFont: "var(--font-poppins), sans-serif",
      paragraphTextSize: '1rem',
      paragraphTextColor: Theme.Earthy.Text,
      showButton: true,
      buttonText: 'View Profile',
      buttonColor: Theme.Earthy.Secondary1,
      buttonTextColor: Theme.Earthy.Background,
      buttonHyperlink: '/team/jane',
      buttonHeight: '40px',
      buttonWidth: '140px',
    },
    {
      backgroundImage: employee2,
      height: '40%',
      width: '75%',
      titleText: 'John Smith',
      titleTextFont: "var(--font-poppins), sans-serif",
      titleTextSize: '2rem',
      titleTextColor: Theme.Earthy.Text,
      titleTextBold: true,
      dividerColor: Theme.Earthy.Secondary1,
      dividerWidth: '60px',
      paragraphText: 'Project Manager passionate about delivering client success.',
      paragraphTextFont: "var(--font-poppins), sans-serif",
      paragraphTextSize: '1rem',
      paragraphTextColor: Theme.Earthy.Text,
      showButton: true,
      buttonText: 'View Profile',
      buttonColor: Theme.Earthy.Secondary1,
      buttonTextColor: Theme.Earthy.Background,
      buttonHyperlink: '/team/john',
      buttonHeight: '40px',
      buttonWidth: '140px',
    },
    {
      backgroundImage: employee3,
      height: '40%',
      width: '75%',
      titleText: 'Sarah Lee',
      titleTextFont: "var(--font-poppins), sans-serif",
      titleTextSize: '2rem',
      titleTextColor: Theme.Earthy.Text,
      titleTextBold: true,
      dividerColor: Theme.Earthy.Secondary1,
      dividerWidth: '60px',
      paragraphText: 'Marketing Specialist focused on creative brand growth.',
      paragraphTextFont: "var(--font-poppins), sans-serif",
      paragraphTextSize: '1rem',
      paragraphTextColor: Theme.Earthy.Text,
      showButton: true,
      buttonText: 'View Profile',
      buttonColor: Theme.Earthy.Secondary1,
      buttonTextColor: Theme.Earthy.Background,
      buttonHyperlink: '/team/sarah',
      buttonHeight: '40px',
      buttonWidth: '140px',
    },
  ];

  return (
    <Box sx={{ backgroundColor: Theme.Earthy.Background }}>
      <Box sx={{ padding: '80px 20px', textAlign: 'center' }}>
        <Typography
          variant="h2"
          sx={{
            fontWeight: 'bold',
            mb: 4,
            color: Theme.Earthy.Text,
            fontFamily: "var(--font-poppins), sans-serif",
          }}
        >
          About Us
        </Typography>
        <Typography
          variant="body1"
          sx={{
            maxWidth: '800px',
            margin: '0 auto',
            mb: 6,
            color: Theme.Earthy.Text,
            fontFamily: "var(--font-poppins), sans-serif",
          }}
        >
          We’re a passionate team committed to creating amazing experiences. 
          Learn more about the people who make it all possible.
        </Typography>

        <Container position={Position.CENTER} orientation={Orientation.HORIZONTAL} gap='50px' padding='20px'>
          <ParagraphSection
              width='50%'
              titleText="GET A QUOTE TODAY"
              paragraphText="We guarantee to do a thorough inspection of all your cracks, so we can provide the most accurate price, beating our competitors, for all your crack filling needs."
              buttonText="CONTACT US"
              justifyContent={Position.LEFT}
              buttonHyperlink="/contact"
              buttonColor={Theme.Earthy.Secondary1}
              dividerColor={Theme.Earthy.Secondary1}
            />
          <Image src={HomeImage} alt="Excavator at work" width="52%" height="300px" borderRadius="16px" objectFit="cover" />
        </Container>
        
        <Container position={Position.CENTER} orientation={Orientation.HORIZONTAL} gap='50px' padding='20px'>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <Stepper
                slides={employeeSlides}
                width="100%"
                height="400px"
                borderRadius="12px"
              />
            </Box>
          <ParagraphSection
              width='90%'
              titleText="MEET THE TEAM"
              paragraphText="Each of our employees is trained by expert crack inspectors, to become expert crack inspectors. They are also coached to give the best price to fill your crack."
              buttonText="CONTACT US"
              justifyContent={Position.LEFT}
              buttonHyperlink="/contact"
              buttonColor={Theme.Earthy.Secondary1}
              dividerColor={Theme.Earthy.Secondary1}
            />
        </Container>
      </Box>
    </Box>
  );
};

export default AboutPage;
