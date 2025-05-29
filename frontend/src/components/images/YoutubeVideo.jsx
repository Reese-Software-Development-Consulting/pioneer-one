import React from 'react';

const VideoComponent = ({
  youtubeUrl,
  width = '100%',
  height = '400px',
  borderRadius = '8px'
}) => {
  // Extract the video ID from various YouTube URL formats
  const getEmbedUrl = (url) => {
    const videoIdMatch = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|v\/))([\w-]{11})/);
    return videoIdMatch ? `https://www.youtube.com/embed/${videoIdMatch[1]}` : null;
  };

  const embedUrl = getEmbedUrl(youtubeUrl);

  if (!embedUrl) return <p>Invalid YouTube URL</p>;

  return (
    <div style={{ width, height, borderRadius, overflow: 'hidden' }}>
      <iframe
        src={embedUrl}
        title="YouTube video player"
        width="100%"
        height="100%"
        frameBorder="0"
        style={{ borderRadius }}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoComponent;