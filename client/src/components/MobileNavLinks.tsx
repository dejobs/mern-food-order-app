import {Link} from "react-router-dom";
import {Button} from "./ui/button";
import {useAuth0} from "@auth0/auth0-react";

const MobileNavLinks = () => {
  const {logout} = useAuth0();
  return (
    <>
      <Link
        to="/user-profile"
        className="flex items-center font-bold bg-white hover:text-red-500"
      >
        User profile
      </Link>
      <Button
        className="flex flex-1 p-3 font-bold bg-gray-500"
        onClick={() => logout()}
      >
        Log out
      </Button>
    </>
  );
};

export default MobileNavLinks;
