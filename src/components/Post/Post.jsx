import styles from './Post.module.css';
import { Link } from 'react-router-dom';

function Post(props) {
  const rating = props.rate ? props.rate : 0;

  return (
    <Link
      style={{ textDecoration: 'none', color: 'black' }}
      to={`/post/${props.id}`}
    >
      <div className={styles['post-container']}>
        <h1>{props.author}</h1>
        <h4>Rating: {rating}/10</h4>
        <p>{props.body}</p>
      </div>
    </Link>
  );
}

export default Post;
