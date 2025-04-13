import PostsList from '../components/PostsList/PostsList';
import { Container } from '@mui/material';

export default function Posts() {
  return (
    <Container>
      <div className="Posts">
        <div>
          <PostsList />
        </div>
      </div>
    </Container>
  );
}

export async function loader() {
  const response = await fetch('http://localhost:8080/posts');
  const resData = await response.json();
  return resData.posts;
}
