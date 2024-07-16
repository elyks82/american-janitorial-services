import React from 'react';

const SetPageHeader = ({ title }) => {
  React.useEffect(() => {
    document.title = title; // Update the title when the component mounts
  }, [title]);
};

export default SetPageHeader;