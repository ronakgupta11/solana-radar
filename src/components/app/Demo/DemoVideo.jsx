import React from 'react';

const YouTubeEmbed = ({ videoId, title }) => {
  return (
    <div className="youtube-container">
      <iframe
        width="100%"
        height="400"
        src={`https://www.youtube.com/embed/MXZtN1Pbyvs`}
        title={"Demo Labelize"}
        
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default YouTubeEmbed;
