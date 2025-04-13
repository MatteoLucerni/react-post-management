import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './assets/css/index.css';
import PostDetails, {
  loader as postDetailsLoader,
} from './routes/PostDetails/PostDetails.jsx';
import Posts, { loader as postsLoader } from './routes/Posts.jsx';
import NewPost, { action as newPostAction } from './routes/NewPost/NewPost.jsx';
import RootLayout from './routes/RootLayout.jsx';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';

const darkTheme = createTheme({ palette: { mode: 'dark' } });

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <Posts />,
        loader: postsLoader,
      },
      {
        path: '/create-post',
        element: <NewPost />,
        action: newPostAction,
      },
      {
        path: '/post/:id',
        element: <PostDetails />,
        loader: postDetailsLoader,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={darkTheme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
);
