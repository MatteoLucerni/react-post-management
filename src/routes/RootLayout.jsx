// layout che ritorna l'html dll'header (non esiste un compnente)
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Button, List, ListItem, ListItemText } from '@mui/material';

function RootLayout() {
  const location = useLocation();
  const isNewPostRoute = location.pathname === '/create-post';

  return (
    <>
      <header>
        <nav style={{ marginBottom: '50px' }}>
          <List
            style={{
              listStyle: 'none',
              display: 'flex',
              gap: '1rem',
              padding: 0,
              margin: 0,
            }}
          >
            <ListItem>
              <ListItemText>
                <Link to="/">Home</Link>
              </ListItemText>
            </ListItem>
            {!isNewPostRoute && (
              <ListItem>
                <Link to="/create-post">
                  <Button
                    color="success"
                    variant="contained"
                  >
                    Add a new post
                  </Button>
                </Link>
              </ListItem>
            )}
          </List>
        </nav>
      </header>
      <Outlet />
    </>
  );
}

export default RootLayout;
