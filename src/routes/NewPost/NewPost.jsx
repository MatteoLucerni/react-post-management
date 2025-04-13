import { useNavigate, Form, redirect } from 'react-router-dom';
import React from 'react';

function NewPost({ toggleModal }) {
  const navigate = useNavigate();

  function goBackHome() {
    console.log('logica');
    navigate('/');
  }

  return (
    <>
      <button onClick={goBackHome}>Go back home</button>
      <br />
      <br />
      <Form method="post">
        <small>Author: </small>
        <input
          required
          type="text"
          name="author"
          id="author-input"
        />
        <br />
        <br />
        <small>Rate: </small>
        <input
          required
          type="number"
          name="rate"
          id="rate-input"
          min="0"
          max="10"
        />
        <br />
        <br />
        <small>Body: </small>
        <input
          required
          type="text"
          name="body"
          id="body-input"
        />
        <br />
        <br />
        <button>Send!</button>
      </Form>
    </>
  );
}

export default NewPost;

export async function action(data) {
  const formData = await data.request.formData();
  const postData = Object.fromEntries(formData);

  await fetch('http://localhost:8080/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(postData),
  });

  return redirect('/');
}
