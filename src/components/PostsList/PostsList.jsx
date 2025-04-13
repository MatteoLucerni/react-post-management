import { useLoaderData } from 'react-router-dom';
import Post from '../Post/Post';
import { Box } from '@mui/material';

export default function PostsList() {
  const posts = useLoaderData();

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          flexDirection: { xs: 'column', md: 'row' },
          gap: 1,
        }}
      >
        {posts.map(post => (
          <Post
            key={post.id + post.author + post.body + post.rate}
            author={post.author}
            body={post.body}
            rate={post.rate}
            id={post.id}
          />
        ))}
      </Box>
    </>
  );
}
