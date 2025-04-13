import { useLoaderData } from 'react-router-dom';
import Post from '../Post/Post';

export default function PostsList() {
  const posts = useLoaderData();

  return (
    <>
      <div>
        {posts.map(post => (
          <Post
            key={post.id + post.author + post.body + post.rate}
            author={post.author}
            body={post.body}
            rate={post.rate}
            id={post.id}
          />
        ))}
      </div>
    </>
  );
}
