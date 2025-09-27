import React from 'react';
import Theme from '../enums/ColorThemes';

import BodySection from '../components/pageComponents/body/BodySection';
import BodyGrid from '../components/pageComponents/body/BodyGrid';
import ParagraphSection from '../components/text/ParagraphSection';
import Image from '../components/images/Image';
import PageHeader from '../components/pageComponents/PageHeader';
import Stepper from '../components/pageComponents/Stepper';
import SimpleStepper from '../components/pageComponents/SimpleStepper';
import VideoComponent from '../components/images/YoutubeVideo';

import Position from '../enums/PositionEnum';
import BodySectionType from '../enums/BodySectionTypes';

import HeaderVideo from '../assets/test_images/compressedVideo.mp4';
import HomeImage from '../assets/test_images/CarlsConstructionhome.jpeg';
import ResidentialImage from '../assets/test_images/carlsconstructionfamily.jpeg';
import CommercialImage from '../assets/test_images/carlsConstructionCommercial.jpeg';
import CustomBodyCard from '../components/pageComponents/BodyCard';

const paragraphData = Array.from({ length: 10 }).map((_, i) => ({
  titleText: `Section Title ${i + 1}`,
  paragraphText: `This is a description for paragraph section number ${i + 1}. It explains the value and context of the section with placeholder text.`,
  buttonHyperlink: `#section-${i + 1}`,
  width: '200px',
}));

const Home = () => {
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

      <BodySection
        type={BodySectionType.DOUBLE}
        leftContent={
          <ParagraphSection
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
            buttonColor={Theme.Earthy.Secondary1}
            dividerColor={Theme.Earthy.Secondary1}
            titleTextColor={Theme.Earthy.Text}
            paragraphTextColor={Theme.Earthy.Text}
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
            buttonColor={Theme.Earthy.Secondary1}
            dividerColor={Theme.Earthy.Secondary1}
            titleTextColor={Theme.Earthy.Text}
            paragraphTextColor={Theme.Earthy.Text}
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

      <BodySection
        type={BodySectionType.SINGLE}
        leftContent={
          <Stepper
            width="75%"
            height="300px"
            slides={[
              {
                backgroundColor: Theme.Earthy.Background,
                height: 'auto',
                width: '100%',
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
                buttonTextFont: 'Arial',
                buttonTextSize: '0.875rem',
                buttonHeight: '40px',
                buttonWidth: '160px',
                buttonHyperlink: '/contact',
                titlePadding: '16px 0',
                paragraphPadding: '16px 0',
                buttonMarginTop: '24px',
                justifyContent: 'center',
              },
              {
                backgroundColor: Theme.Earthy.Primary1,
                height: 'auto',
                width: '100%',
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
                titlePadding: '16px 0',
                paragraphPadding: '16px 0',
                buttonMarginTop: '24px',
                justifyContent: 'left',
                showButton: false,
              },
              {
                backgroundColor: Theme.Earthy.Primary2,
                height: 'auto',
                width: '100%',
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
                titlePadding: '16px 0',
                paragraphPadding: '16px 0',
                buttonMarginTop: '24px',
                justifyContent: 'right',
                showButton: false,
              },
            ]}
          />
        }
      />

      <BodySection
        type={BodySectionType.SINGLE}
        leftContent={
          <SimpleStepper
            height="400px"
            width="80%"
            backgroundColor={Theme.Earthy.Background}
            color={Theme.Earthy.Secondary1}
            boxSize={300}
            elements={[
              {
                textFont: 'Georgia',
                textSize: '1.5rem',
                textColor: Theme.Earthy.Text,
                text: 'Step 1',
              },
              {
                textFont: 'Georgia',
                textSize: '1.5rem',
                textColor: Theme.Earthy.Text,
                text: 'Step 2',
              },
              {
                textFont: 'Georgia',
                textSize: '1.5rem',
                textColor: Theme.Earthy.Text,
                text: 'Step 3',
              },
            ]}
          />
        }
      />

      <BodySection
        type={BodySectionType.SINGLE}
        leftContent={
          <VideoComponent
            youtubeUrl="https://www.youtube.com/watch?v=_UvtNbOp2Zs"
            width="800px"
            height="450px"
            borderRadius="16px"
          />
        }
      />

      <BodyGrid rows={2} columns={3} gap="24" padding="40px" width="100%" itemWidth="200px">
        {paragraphData.map((item, index) => (
          <ParagraphSection
            key={index}
            titleText={item.titleText}
            paragraphText={item.paragraphText}
            buttonHyperlink={item.buttonHyperlink}
            backgroundColor={Theme.Earthy.Background}
            justifyContent="left"
            height="100%"
            width="250px"
            titleTextColor={Theme.Earthy.Text}
            paragraphTextColor={Theme.Earthy.Text}
          />
        ))}
      </BodyGrid>

      <BodySection
        type={BodySectionType.SINGLE}
        leftContent={
          <CustomBodyCard
            CardWidth="80%"
            CardBackground={Theme.Earthy.Primary1}
            CardHeight="auto"
            imageSrc="/assets/images/construction-site.jpg"
            imageAlt="Construction Site"
            imageWidth="100%"
            imageBorderRadius="12px"
            imageObjectFit="cover"
            imageMaxWidth="400px"
            imageResponsive={true}
            titleText="Top-Quality Construction"
            titleTextSize="24px"
            titleTextFont="Georgia, serif"
            titleBold={true}
            titleColor={Theme.Earthy.Text}
            titleTextSpacing="1.2rem"
            textText="We provide industry-leading construction services across residential and commercial sectors. From foundation to finish, our team ensures every detail meets your expectations."
            textTextSize="16px"
            textTextFont="Arial, sans-serif"
            textBold={false}
            textColor={Theme.Earthy.Text}
            buttonText="View Our Projects"
            buttonColor={Theme.Earthy.Secondary1}
            buttonRounded={true}
            buttonHyperlink="/projects"
            buttonHeight="45px"
            buttonWidth="260px"
            ImagePosition={Position.LEFT}
          />
        }
      />
    </>
  );
};

export default Home;
