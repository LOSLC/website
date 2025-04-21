import { Link } from "@inertiajs/react";
import { Button, buttonVariants } from "../ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import {
  IoLogoDiscord,
  IoLogoWhatsapp,
  IoLogoLinkedin,
  IoLogoFacebook,
} from "react-icons/io5";

export default function JoinButton() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button className="cursor-pointer text-sm md:text-base px-6 py-4 md:px-8 md:py-5">
          Join Us
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[150px] my-3 p-2">
        <div className="flex flex-col gap-1">
          <Link
            href="https://discord.gg/B3hPHmvddP"
            className={`${buttonVariants({ variant: "ghost" })} w-full justify-start gap-3`}
          >
            <IoLogoDiscord className="h-5 w-5" />
            <span>Discord</span>
          </Link>
          <Link
            href="https://chat.whatsapp.com/BcapIUdCapFLBsHgdXVfcQ"
            className={`${buttonVariants({ variant: "ghost" })} w-full justify-start gap-3`}
          >
            <IoLogoWhatsapp className="h-5 w-5" />
            <span>WhatsApp</span>
          </Link>
          <Link
            href="https://www.linkedin.com/company/loslc"
            className={`${buttonVariants({ variant: "ghost" })} w-full justify-start gap-3`}
          >
            <IoLogoLinkedin className="h-5 w-5" />
            <span>LinkedIn</span>
          </Link>
          <Link
            href="https://www.facebook.com/profile.php?id=61574527415562"
            className={`${buttonVariants({ variant: "ghost" })} w-full justify-start gap-3`}
          >
            <IoLogoFacebook className="h-5 w-5" />
            <span>Facebook</span>
          </Link>
        </div>
      </PopoverContent>
    </Popover>
  );
}
