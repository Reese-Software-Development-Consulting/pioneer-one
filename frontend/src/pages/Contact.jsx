import React, { useState } from 'react';
import { Box } from '@mui/material';
import Theme from '../enums/ColorThemes';

import TextBox from '../components/text/TextBox';
import HorizontalBodySection from '../components/pageComponents/body/HorizontalBodySection';
import Dropdown from '../components/text/Dropdown';
import CustomButton from '../components/buttons/Button';
import PageHeader from '../components/pageComponents/PageHeader';

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

  return (
    <>
      <HorizontalBodySection width="80%">
        <TextBox
          title="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          width="250px"
          height="auto"
          multiline={false}
          rows={1}
        />
        <TextBox
          title="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          width="250px"
          height="auto"
          multiline={false}
          rows={1}
        />
        <TextBox
          title="Business Name"
          value={businessName}
          onChange={(e) => setBusinessName(e.target.value)}
          width="250px"
          height="auto"
          multiline={false}
          rows={1}
        />
      </HorizontalBodySection>

      <HorizontalBodySection width="80%">
        <TextBox
          title="Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          width="250px"
          height="auto"
          multiline={false}
          rows={1}
        />
        <TextBox
          title="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          width="250px"
          height="auto"
          multiline={false}
          rows={1}
        />
        <Dropdown
          label="Select a Service"
          value={selectedService}
          onChange={(e) => setSelectedService(e.target.value)}
          options={dropdownServiceOptions}
          width="250px"
          height="25px"
        />
      </HorizontalBodySection>

      <Box
        sx={{
          width: '80%',
          margin: '0 auto',
          padding: 'none',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <TextBox
          title="How Can We Help?"
          value={openResponse}
          onChange={(e) => setOpenResponse(e.target.value)}
          width="100%"
          height="300px"
          multiline={true}
          rows={6}
        />
      </Box>

      <Box
        sx={{
          width: '80%',
          margin: '0 auto',
          padding: 'none',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <CustomButton
          text="Send Message"
          color={Theme.Modern.Secondary1}
          rounded={true}
          onClick={handleClick}
        />
      </Box>
    </>
  );
};

export default Contact;
