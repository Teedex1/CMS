import React from 'react';
import axios from 'axios';

const SubmitButton = ({ postContent }) => {
  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:8000/api/post', {
        content: postContent,
      });
      console.log('Post submitted:', response.data);
    } catch (error) {
      console.error('Error submitting post:', error);
    }
  };

  return (
    <button onClick={handleSubmit}>Submit Post</button>
  );
};

export default SubmitButton;