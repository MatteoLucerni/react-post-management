import { useState } from 'react';
import React from 'react';

function NewPost({ toggleModal, onPostSubmit }) {
  const [currBody, setCurrBody] = useState('');
  const [currAuthor, setCurrAuthor] = useState('');
  const [currRate, setCurrRate] = useState('');

  function changeBodyHandler(event) {
    setCurrBody(event.target.value);
  }

  function changeAuthorHandler(event) {
    setCurrAuthor(event.target.value);
  }

  function changeRateHandler(event) {
    setCurrRate(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();

    const postData = {
      author: currAuthor,
      body: currBody,
      rate: currRate,
    };

    onPostSubmit(postData);
    toggleModal();
  }

  return (
    <form onSubmit={submitHandler}>
      <small>Author: </small>
      <input
        required
        type="text"
        name="author"
        id="author-input"
        onChange={changeAuthorHandler}
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
        onChange={changeRateHandler}
      />
      <br />
      <br />
      <small>Body: </small>
      <input
        required
        type="text"
        name="body"
        id="body-input"
        onChange={changeBodyHandler}
      />
      <br />
      <br />
      <button>Send!</button>
    </form>
  );
}

export default NewPost;
