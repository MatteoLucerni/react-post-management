// route that shows post:id details
import { useLoaderData } from 'react-router-dom';
import Post from '../../components/Post/Post';

function PostDetails() {
  const post = useLoaderData();

  return (
    <div>
      <Post
        author={post.author}
        body={post.body}
        rate={post.rate}
      />
    </div>
  );
}

export default PostDetails;

export async function loader({ params }) {
  const response = await fetch('http://localhost:8080/posts/' + params.id);
  const resData = await response.json();
  return resData.post;
}
