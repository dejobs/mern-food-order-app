import {Button} from "./ui/button";
import {Separator} from "./ui/separator";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetDescription,
} from "./ui/sheet";
import {Menu} from "lucide-react";
import {useAuth0} from "@auth0/auth0-react";

const MobileNav = () => {
  const {loginWithRedirect} = useAuth0();
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="text-orange-500" />
      </SheetTrigger>
      <SheetContent className="space-y-3">
        <SheetTitle>
          <span>Welcome to BiteRite.com</span>
        </SheetTitle>
        <Separator />
        <SheetDescription className="flex">
          <Button
            className="font-bold flex-1 bg-orange-500"
            onClick={() => loginWithRedirect()}
          >
            Log In
          </Button>
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
