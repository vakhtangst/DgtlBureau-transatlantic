import Header from "components/views/Header";
import { Outlet } from "react-router-dom";

const Layouts = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layouts;
