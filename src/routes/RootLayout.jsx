// layout che ritorna l'html dll'header (non esiste un compnente)
import { Outlet, Link, useLocation } from 'react-router-dom';

function RootLayout() {
  const location = useLocation();
  const isNewPostRoute = location.pathname === '/create-post';

  return (
    <>
      <header>
        <nav style={{ marginBottom: '50px' }}>
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
              <Link to="/">Home</Link>
            </li>
            {!isNewPostRoute && (
              <li>
                <Link
                  style={{
                    border: '1px solid black',
                    padding: '5px 20px',
                    backgroundColor: 'lightgray',
                    textDecoration: 'none',
                    color: 'black',
                  }}
                  to="/create-post"
                >
                  Add a new post
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  );
}

export default RootLayout;
