import { Paper, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

function Post(props) {
  const rating = props.rate ? props.rate : 0;

  return (
    <Link
      style={{ textDecoration: 'none', color: 'black' }}
      to={`/post/${props.id}`}
    >
      <Paper
        elevation={24}
        sx={{ p: 3, my: 2, mx: 'auto', maxWidth: 500 }}
      >
        <Typography variant="h3">{props.author}</Typography>
        <Typography variant="h6">Rating: {rating}/10</Typography>
        <br />
        <Typography>{props.body}</Typography>
      </Paper>
    </Link>
  );
}

export default Post;
