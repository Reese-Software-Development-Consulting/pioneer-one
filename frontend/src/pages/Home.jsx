import React from 'react';
import CustomBodyCard from '../components/pageComponents/CustomBodyCard';
import CustomBodyLayout from '../components/pageComponents/CustomBodyComponent';
import LayoutTypeEnum from '../enums/LayoutTypeEnum';
import ImagePositionEnum from '../enums/ImagePositionEnum';

import HomeImage from '../assets/test_images/CarlsConstructionhome.jpeg';
import ResidentialImage from '../assets/test_images/carlsconstructionfamily.jpeg';
import CommercialImage from '../assets/test_images/carlsConstructionCommercial.jpeg'

const Home = () => {
  return (
    <CustomBodyLayout
      layoutType={LayoutTypeEnum.VERTICAL}
      BodyBackgroundColor="white"
      BodyBackgroundImage=""
    >
      <CustomBodyCard
        CardWidth="90%"
        imageSrc={HomeImage} imageAlt="Carl's Construction working on a project" imageWidth="800px" imageHeight="600px" imageMaxWidth="1200px"
        titleText="Building Dreams, One Brick at a Time" titleTextSize="32px" titleBold={true} titleColor="#333"
        textText="At Carl's Construction, we bring visions to life with precision, craftsmanship, and dedication. With over two decades of experience in residential, commercial, and industrial 
                  construction, we are committed to delivering projects that exceed expectations. From groundbreaking to final inspection, our team works closely with clients to ensure that 
                  every detail reflects quality and care. Whether building a new home, expanding a business space, or revitalizing an existing structure, Carl’s Construction stands for 
                  integrity, reliability, and excellence at every stage of the process. Trust us to build the foundation for your future — strong, lasting, and crafted with pride."
        textTextSize="18px" textColor="#555" textBold={false}
        ImagePosition={ImagePositionEnum.LEFT}
      />
      <CustomBodyCard
        CardWidth="90%"
        imageSrc={ResidentialImage} imageAlt="Residential Construction Project" imageWidth="400px" imageHeight="300px" imageMaxWidth="1200px"
        titleText="Residential Construction You Can Trust" titleTextSize="32px" titleBold={true} titleColor="#333"
        textText="From custom family homes to complete renovations, Carl’s Construction brings craftsmanship, dedication, and attention to detail to every residential project. We work closely 
                  with you to build homes that match your dreams — strong, beautiful, and built to last."
        textTextSize="18px" textColor="#555" textBold={false}
        ImagePosition={ImagePositionEnum.RIGHT}
      />
      <CustomBodyCard
        CardWidth="90%"
        imageSrc={CommercialImage} imageAlt="Commercial Construction Project" imageWidth="400px" imageMaxWidth="1200px"
        titleText="Commercial Construction" titleTextSize="32px" titleBold={true} titleColor="#333"
        textText="Whether building office spaces, retail centers, or warehouses, Carl’s Construction delivers commercial projects with efficiency and precision. We understand the importance 
                  of strict timelines and budgets, and we are committed to helping your business grow without unnecessary delays. Our expert team manages every phase of the construction 
                  process — from planning and permitting to final inspection — to ensure high-quality, on-time, and cost-effective results."
        textTextSize="18px" textColor="#555" textBold={false}
        ImagePosition={ImagePositionEnum.RIGHT}
       />
</CustomBodyLayout>
  );
};

export default Home;