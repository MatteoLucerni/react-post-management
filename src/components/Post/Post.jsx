import styles from "./Post.module.css";

function Post(props) {
  const rating = props.rate ? props.rate : 0;

  return (
    <div className={styles["post-container"]}>
      <h1>{props.author}</h1>
      <h4>Rating: {rating}/10</h4>
      <p>{props.body}</p>
    </div>
  );
}

export default Post;
