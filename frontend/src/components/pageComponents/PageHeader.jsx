import React from 'react';
import PropTypes from 'prop-types';

const PageHeader = ({
  titleText,
  titleFont = 'Arial, sans-serif',
  titleColor = '#fff',
  titleBold = false,
  img = '',
  video = '',
  backgroundColor = '',
  shade = false,
  height = '400px'
}) => {
  // Enforce mutual exclusivity
  const backgroundOptions = [!!backgroundColor, !!img, !!video].filter(Boolean);
  if (backgroundOptions.length !== 1) {
    console.error('Exactly one of backgroundColor, img, or video must be provided.');
    return null;
  }

  const renderBackground = () => {
    if (img) {
      return (
        <div
          style={{
            backgroundImage: `url(${img})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '100%',
            height: '100%',
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: 0
          }}
        >{shade && <div style={shadeStyle} />}</div>
      );
    }

    if (video) {
      return (
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', overflow: 'hidden', zIndex: 0 }}>
          <video
            src={video}
            autoPlay
            muted
            loop
            playsInline
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          {shade && <div style={shadeStyle} />}
        </div>
      );
    }

    return (
      <div
        style={{
          backgroundColor,
          width: '100%',
          height: '100%',
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: 0
        }}
      />
    );
  };

  const shadeStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 1
  };

  const titleStyle = {
    fontFamily: titleFont,
    color: titleColor,
    fontWeight: titleBold ? 'bold' : 'normal',
    fontSize: '2.5rem',
    zIndex: 2,
    textAlign: 'center'
  };

  return (
    <div style={{ position: 'relative', width: '100%', height, overflow: 'hidden' }}>
      {renderBackground()}
      <div style={{
        position: 'relative',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <h1 style={titleStyle}>{titleText}</h1>
      </div>
    </div>
  );
};

PageHeader.propTypes = {
  titleText: PropTypes.string.isRequired,
  titleFont: PropTypes.string,
  titleColor: PropTypes.string,
  titleBold: PropTypes.bool,
  img: PropTypes.string,
  video: PropTypes.string,
  backgroundColor: PropTypes.string,
  shade: PropTypes.bool,
  height: PropTypes.string
};

export default PageHeader;