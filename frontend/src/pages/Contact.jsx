import React, { useState } from 'react';
import { Box, useMediaQuery } from '@mui/material';
import Theme from '../enums/ColorThemes';
import Position from '../enums/PositionEnum';
import Orientation from '../enums/Orientation';

import TextBox from '../components/text/TextBox';
import Dropdown from '../components/text/Dropdown';
import CustomButton from '../components/buttons/CustomButton';
import ParagraphSection from "../components/text/ParagraphSection";
import Container from '../components/structure/Container';

import handleSendEmail from '../appService/emailService/handleSendEmail';

const dropdownServiceOptions = [
  { label: 'Crack Filling', value: 'Crack Filling' },
  { label: 'Residential Services', value: 'Residential Services' },
  { label: 'Commercial Projects', value: 'Commercial Projects' }
];

const Contact = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [openResponse, setOpenResponse] = useState('');
  const [selectedService, setSelectedService] = useState('');

  const theme = Theme.Earthy;
  const isMobile = useMediaQuery('(max-width:900px)');

  const handleClick = async () => {
    const formEntries = [
      { title: 'First Name', content: firstName },
      { title: 'Last Name', content: lastName },
      { title: 'Business Name', content: businessName },
      { title: 'Phone Number', content: phoneNumber },
      { title: 'Email Address', content: email },
      { title: 'Selected Service', content: selectedService },
      { title: 'Message', content: openResponse }
    ];

    const result = await handleSendEmail(firstName, lastName, email, formEntries);

    if (result.success) {
      alert('Message sent!');
    } else {
      alert('Error: ' + result.error);
    }
  };

  const rowStyle = {
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    gap: '16px',
    width: '100%',
    justifyContent: isMobile ? 'flex-start' : 'space-between',
  };

  const inputWidth = isMobile ? '100%' : '32%';

  return (
    <Container
      position={Position.CENTER}
      orientation={Orientation.VERTICAL}
      gap="40px"
      padding="20px"
      style={{ width: '100%', justifyContent: 'center', alignItems: 'center' }}
    >
      <Box
        sx={{
          width: '100%',
          maxWidth: '1100px',          // desktop container width
          px: { xs: 2, sm: 3 },
          py: { xs: 4, sm: 5 },
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
          backgroundColor: theme.Background,
          borderRadius: 2,
          boxSizing: 'border-box',
          mx: 'auto',                   // center horizontally
        }}
      >
        {/* Heading */}
        <ParagraphSection
          titleText="Contact Us"
          paragraphText="Have a question or want to request a quote? Fill out the form below and we’ll get back to you as soon as possible."
          paragraphTextSize="14pt"
          titleTextSize="28pt"
          titleTextColor={theme.Text}
          paragraphTextColor={theme.Text}
          showButton={false}
          dividerColor={theme.Secondary1}
        />

        {/* First row */}
        <Box sx={rowStyle}>
          <TextBox title="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} width={inputWidth} multiline={false} />
          <TextBox title="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} width={inputWidth} multiline={false} />
          <TextBox title="Business Name" value={businessName} onChange={(e) => setBusinessName(e.target.value)} width={inputWidth} multiline={false} />
        </Box>

        {/* Second row */}
        <Box sx={rowStyle}>
          <TextBox title="Phone Number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} width={inputWidth} multiline={false} />
          <TextBox title="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} width={inputWidth} multiline={false} />
          <Dropdown
            label="Select a Service"
            value={selectedService}
            onChange={(e) => setSelectedService(e.target.value)}
            options={dropdownServiceOptions}
            width={inputWidth}
            height="40px"
          />
        </Box>

        {/* Message */}
        <TextBox title="How Can We Help?" value={openResponse} onChange={(e) => setOpenResponse(e.target.value)} width="100%" multiline={true} rows={6} />

        {/* Button */}
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
          <CustomButton text="Send Message" color={theme.Secondary1} rounded={true} onClick={handleClick} />
        </Box>
      </Box>
    </Container>
  );
};

export default Contact;
