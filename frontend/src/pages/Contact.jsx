import React, { useState } from 'react';
import { Box } from '@mui/material';
import Theme from '../enums/ColorThemes';

import TextBox from '../components/text/TextBox';
import HorizontalBodySection from '../components/pageComponents/body/HorizontalBodySection';
import Dropdown from '../components/text/Dropdown';
import CustomButton from '../components/buttons/Button';
import BodySection from '../components/pageComponents/body/BodySection';
import BodySectionTypes from '../enums/BodySectionTypes';
import Position from '../enums/PositionEnum';
import ParagraphSection from "../components/text/ParagraphSection";

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

  const LAYOUT = {
    formWidth: '80%',
    inputWidth: '250px',
    dropdownHeight: '25px',
    textareaHeight: '300px',
    gapBetweenRows: '24px',
    horizontalSectionGap: '16px'
  };

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
      <BodySection
        type={BodySectionTypes.SINGLE}
        position={Position.LEFT}
        leftContent={
          <Box
            sx={{
              width: LAYOUT.formWidth,
              margin: '0 auto',
              display: 'flex',
              flexDirection: 'column',
              gap: LAYOUT.gapBetweenRows,
              backgroundColor: theme.Background,
              padding: 3,
              borderRadius: 2,
            }}
          >
            {/* Heading (now constrained to same width as form) */}
            <Box
              sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <Box sx={{ width: '100%' }}>
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
              </Box>
            </Box>

            {/* First row */}
            <Box
              sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                gap: LAYOUT.horizontalSectionGap,
              }}
            >
              <TextBox
                title="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                width={LAYOUT.inputWidth}
                height="auto"
                multiline={false}
                rows={1}
              />
              <TextBox
                title="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                width={LAYOUT.inputWidth}
                height="auto"
                multiline={false}
                rows={1}
              />
              <TextBox
                title="Business Name"
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
                width={LAYOUT.inputWidth}
                height="auto"
                multiline={false}
                rows={1}
              />
            </Box>

            {/* Second row */}
            <Box
              sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                gap: LAYOUT.horizontalSectionGap,
              }}
            >
              <TextBox
                title="Phone Number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                width={LAYOUT.inputWidth}
                height="auto"
                multiline={false}
                rows={1}
              />
              <TextBox
                title="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                width={LAYOUT.inputWidth}
                height="auto"
                multiline={false}
                rows={1}
              />
              <Dropdown
                label="Select a Service"
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                options={dropdownServiceOptions}
                width={LAYOUT.inputWidth}
                height={LAYOUT.dropdownHeight}
              />
            </Box>

            {/* Message */}
            <TextBox
              title="How Can We Help?"
              value={openResponse}
              onChange={(e) => setOpenResponse(e.target.value)}
              width="100%"
              height={LAYOUT.textareaHeight}
              multiline={true}
              rows={6}
            />

            {/* Button */}
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <CustomButton
                text="Send Message"
                color={theme.Secondary1}
                rounded={true}
                onClick={handleClick}
              />
            </Box>
          </Box>
        }
      />
    </>
  );
};

export default Contact;
