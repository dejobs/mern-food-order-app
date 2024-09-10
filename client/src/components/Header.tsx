import {Link} from "react-router-dom";
import MobileNav from "./MobileNav";
import MainNav from "./MainNav";

const Header = () => {
  return (
    <div className="border-b-2 border-b-orange-300 py-6">
      <div className="container mx-auto flex justify-between items-baseline">
        <Link
          className="text-3xl font-bold tracking-tight text-red-600"
          to={"/"}
        >
          BiteRite.com
        </Link>
        <div className="flex items-center md:hidden">
          <MobileNav />
        </div>
        <div className="hidden md:block">
          <MainNav />
        </div>
      </div>
    </div>
  );
};

export default Header;
