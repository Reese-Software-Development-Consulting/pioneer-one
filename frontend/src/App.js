import React from 'react';
import CustomBodyCard from './components/pageComponents/CustomBodyCard';
import ImagePositionEnum from './enums/ImagePositionEnum';
import mickey from './assets/test_images/mickey_mouse.png'

const App = () => {
  return (
    <div style={{ padding: '2rem', backgroundColor: '#ececec', minHeight: '100vh' }}>
      <CustomBodyCard CardWidth="25%" CardHeight="auto" CardBackground="white"

        // Image props
        imageSrc={mickey} imageAlt="Demo image" imageHeight="100px" imageBorderRadius="12px" imageObjectFit="cover" imageHoverEffect={true} imageResponsive={true} imageTitle="Card Image"

        // Title props
        titleText="Custom Title" titleTextSize="1.8rem" titleTextFont="Georgia" titleBold={true} titleColor="#333"

        // Paragraph text props
        textText="Here’s some paragraph text to show how the layout wraps around the image and adjusts based on the ImagePosition setting. The text can be styled using its own props."
        textTextSize="1rem" textTextFont="Arial" textBold={false} textColor="#555"

        // Layout
        ImagePosition={ImagePositionEnum.LEFT}
      />
    </div>
  );
};

export default App;