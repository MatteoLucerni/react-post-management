// layout che ritorna l'html dll'header (non esiste un compnente)
import { Outlet } from 'react-router-dom';

function RootLayout() {
  return (
    <>
      <header>
        <nav>
          <ul
            style={{
              listStyle: 'none',
              display: 'flex',
              gap: '1rem',
              padding: 0,
              margin: 0,
            }}
          >
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/posts">Posts</a>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  );
}

export default RootLayout;
