import React, { useState } from 'react';
import PlatformSelector from './PlatformSelector';
import SubmitButton from './SubmitButton';

const PostComposer = () => {
  const [postContent, setPostContent] = useState('');

  const handleContentChange = (e) => {
    setPostContent(e.target.value);
  };

  return (
    <div>
      <h2>Compose Your Post</h2>
      <textarea
        placeholder="What's on your mind?"
        value={postContent}
        onChange={handleContentChange}
        rows="4"
        cols="50"
      />
      <PlatformSelector />
      <SubmitButton postContent={postContent} />
    </div>
  );
};

export default PostComposer;