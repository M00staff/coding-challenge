import React from 'react';

const content = ({ heading, caption}) => (
  <div className="contentWrapper">
    <div className="captionWrapper">
      <div className="captionHeading">
        <h4>{heading}</h4>
      </div>
      <div className="contentCaption">
        <span>{caption}</span>
      </div>
    </div>
    <div className="contentImage">500x500</div>
</div>
)

export default content;