import React, { useState } from 'react';

const platforms = ['Facebook', 'Twitter', 'LinkedIn'];

const PlatformSelector = () => {
  const [selectedPlatforms, setSelectedPlatforms] = useState([]);

  const handlePlatformSelect = (platform) => {
    setSelectedPlatforms((prev) =>
      prev.includes(platform)
        ? prev.filter((p) => p !== platform)
        : [...prev, platform]
    );
  };

  return (
    <div>
      <h3>Select Platforms</h3>
      {platforms.map((platform) => (
        <label key={platform}>
          <input
            type="checkbox"
            value={platform}
            onChange={() => handlePlatformSelect(platform)}
          />
          {platform}
        </label>
      ))}
    </div>
  );
};

export default PlatformSelector;