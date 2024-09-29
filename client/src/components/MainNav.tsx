import {Button} from "./ui/button";
import {useAuth0} from "@auth0/auth0-react";
import UsernameMenu from "./UsernameMenu";

const MainNav = () => {
  const {loginWithRedirect, isAuthenticated} = useAuth0();
  return (
    <span className="flex items-center space-x-2">
      {isAuthenticated ? (
        <UsernameMenu />
      ) : (
        <Button
          variant="ghost"
          className="font-bold hover:bg-white hover:text-red-600"
          onClick={() => loginWithRedirect()}
        >
          Login
        </Button>
      )}
    </span>
  );
};

export default MainNav;
