
import TopNav from "../home/topNav/Index";
import MiddleNav from "../home/middleNav/Index";
import BottomNav from "../home/bottomNav/Index";
import { Outlet } from "react-router";
import Footer from "../home/footer/Footer";
import Header from "../home/header/Index"
const Layout = () => {
  return (
    <div>
            
    <Header/>
      {/* top menu */}
      <div>
        <TopNav />
        <MiddleNav />
        <BottomNav />
      </div>
      {/* outlet */}
      <Outlet />
      {/* footer */}
      <Footer />
    </div>
  );
};

export default Layout;
