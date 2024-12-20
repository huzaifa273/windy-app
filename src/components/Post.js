import React, { useEffect } from 'react'
import { useNavigate } from 'react-router';

function Post() {
  const location = useNavigate()
  // Check if the token is avalible in the localStorage
  let store = JSON.parse(localStorage.getItem('login'));
  console.log(store);
  console.log(store == null);
  useEffect(() => {
    if (!store || !store.token) {
      location("/");
    }
  }, [store]);

  return (
    <div>
      <h1>I'm only accesscible to login user's</h1>
    </div>
  )
}

export default Post
