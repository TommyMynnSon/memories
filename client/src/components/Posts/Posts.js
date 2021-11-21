// React
import React from 'react';

// Redux

// Material-UI
import useStyles from './styles';

// Components
import Post from './Post/Post';

const Posts = () => {
  const classes = useStyles();

  return (
    <>
      <h1>POSTS</h1>
      <Post />
      <Post />
    </>
  );
};

export default Posts;