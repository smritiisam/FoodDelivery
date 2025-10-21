import { Link, Outlet } from 'react-router-dom';

export default function MainLayout() {
  return (
    <>
      <header className="app-header">
        <Link to="/">🍔 Foodie</Link>
        <nav>
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
