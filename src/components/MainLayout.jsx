import { NavLink, Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";


const MainLayout = () => {
  return (
    <div>
      <section className="flex flex-col md:flex-row justify-between items-center px-10 py-7 shadow-lg">
        <div>
          <h1 className="text-3xl font-bold">
            Ratul<span className="text-blue-500">Zone</span>
          </h1>
        </div>
        <nav>
          <ul className="flex flex-wrap  gap-8 text-2xl">
            
            <NavLink
  to="/"
  className={({ isActive}) =>
  isActive ? "border-b-2 border-b-indigo-500" : ""
  }>Home</NavLink>
            <NavLink
  to="/products"
  className={({ isActive }) =>
    isActive ? "border-b-2 border-b-indigo-500" : ""
  }>Products</NavLink>
            <NavLink
  to="/about"
  className={({ isActive }) =>
    isActive ? "border-b-2 border-b-indigo-500" : ""
  }>About</NavLink>
            <NavLink
  to="/dashboard"
  className={({ isActive }) =>
    isActive ? "border-b-2 border-b-indigo-500" : ""
  }>Dashboard</NavLink>
              {/* <Link to="/">Home</Link> */}
            
           
              {/* <Link to="/products">Products</Link> */}
           
          
              {/* <Link to="/about">About</Link> */}
          
         
              {/* <Link to="/dashboard">Dashboard</Link> */}
            
          </ul>
        </nav>
      </section>
      <div className="min-h-screen">
      <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
