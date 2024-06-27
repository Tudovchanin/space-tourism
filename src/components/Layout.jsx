import { Outlet } from "react-router-dom";


import Header from "./Header";

const Layout = () => {
  return (
    <>
      <div className="wrapper-layout">
        <Header />

        <Outlet />
      </div>
    </>
  );
};

export default Layout;
