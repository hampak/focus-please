import { Link2 } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";
import Link from "next/link";

interface AboutTheDevHoverCardProps {
  trigger: string;
}

const AboutTheDevHoverCard = ({ trigger }: AboutTheDevHoverCardProps) => {
  return (
    <HoverCard openDelay={100} closeDelay={100}>
      <HoverCardTrigger asChild>
        <Button
          variant="link"
          className="text-sm hover:cursor-pointer bg-gradient-to-r from-purple-500 to-blue-400 bg-clip-text text-transparent"
        >
          {trigger}
        </Button>
      </HoverCardTrigger>
      <HoverCardContent side="top">
        <div className="flex justify-between space-x-4">
          <Avatar>
            <AvatarImage src="https://github.com/hampak.png" />
            <AvatarFallback>VC</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <Link
              className="flex items-center gap-1 hover:underline"
              href="https://github.com/hampak"
              target="_blank"
            >
              <p className="text-sm font-semibold">@hampak</p>
              <Link2 size={14} />
            </Link>
            <p className="text-sm">Hello! Please check out my github 😊</p>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};

export default AboutTheDevHoverCard;
