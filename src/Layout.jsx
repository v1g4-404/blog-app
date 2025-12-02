import { Link, Outlet } from "react-router-dom";
import Banner from './Pages/Banner';

export default function Layout() {
  return (
    <>
      <header>
        <Banner />
        <nav>
          <Link to="/">Home</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  )
}