import {Button} from "./ui/button";
import {Separator} from "./ui/separator";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetDescription,
} from "./ui/sheet";
import {CircleUserRound, Menu} from "lucide-react";
import {useAuth0} from "@auth0/auth0-react";
import MobileNavLinks from "./MobileNavLinks";

const MobileNav = () => {
  const {loginWithRedirect, isAuthenticated, user} = useAuth0();
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="text-orange-500" />
      </SheetTrigger>
      <SheetContent className="space-y-3">
        <SheetTitle>
          {isAuthenticated ? (
            <span className="flex items-center gap-2 font-bold >">
              <CircleUserRound />
              {user?.email}
            </span>
          ) : (
            <span>Welcome to BiteRite.com</span>
          )}
        </SheetTitle>
        <Separator />
        <SheetDescription className="flex flex-col gap-4">
          {isAuthenticated ? (
            <MobileNavLinks />
          ) : (
            <Button
              className="font-bold flex-1 bg-orange-500"
              onClick={() => loginWithRedirect()}
            >
              Log In
            </Button>
          )}
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
