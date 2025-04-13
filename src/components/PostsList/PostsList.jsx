import { useState, useEffect } from 'react';
import Post from '../Post/Post';
import NewPost from '../NewPost/NewPost';
import Modal from '../Modal/Modal';

export default function PostsList() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [isLoading, setisLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    function fetchPostsData() {
      setisLoading(true);
      fetch('http://localhost:8080/posts')
        .then(response => response.json())
        .then(data => {
          setPosts(data.posts);
          setisLoading(false);
        });
    }

    fetchPostsData();
  }, []);

  function addPostHandler(postData) {
    fetch('http://localhost:8080/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData),
    });

    setPosts(existingPost => [postData, ...existingPost]);
  }

  function changeModalVisibilityHandler() {
    setModalIsVisible(!modalIsVisible);
  }

  const modalContent = (
    <Modal onBtnClick={changeModalVisibilityHandler}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div>
          <NewPost
            onPostSubmit={addPostHandler}
            toggleModal={changeModalVisibilityHandler}
          />
        </div>
      </div>
    </Modal>
  );

  return (
    <>
      {modalIsVisible ? (
        modalContent
      ) : (
        <button onClick={changeModalVisibilityHandler}>Add a new post</button>
      )}

      <hr />

      {isLoading && <h1>Loading...</h1>}

      <div>
        {posts.map(post => (
          <Post
            key={post.author + post.body + post.rate}
            author={post.author}
            body={post.body}
            rate={post.rate}
          />
        ))}
      </div>
    </>
  );
}
