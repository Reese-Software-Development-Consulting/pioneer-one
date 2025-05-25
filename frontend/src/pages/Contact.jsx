import React, { useState } from 'react';
import { Box } from '@mui/material';
import Theme from '../enums/ColorThemes'

import TextBox from '../components/text/CustomTextBox'
import HorizontalBodySection from '../components/pageComponents/body/HorizontalBodySection'
import Dropdown from '../components/text/CustomDropdown'
import Button from '../components/buttons/CustomButton'
import PageHeader from '../components/pageComponents/PageHeader'


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
          height='25px'
        />
      </HorizontalBodySection>

      <Box
        sx={{
          width: '80%',
          margin: '0 auto',
          padding: '32px',
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
          padding: '32px',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        {/* add button here */}
      </Box>

    </>
  );
};

export default Contact;