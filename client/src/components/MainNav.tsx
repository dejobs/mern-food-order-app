import {Button} from "./ui/button";
import {useAuth0} from "@auth0/auth0-react";

const MainNav = () => {
  const {loginWithRedirect} = useAuth0();
  return (
    <Button
      variant="ghost"
      className="font-bold hover:bg-white hover:text-red-600"
      onClick={() => loginWithRedirect()}
    >
      Login
    </Button>
  );
};

export default MainNav;
