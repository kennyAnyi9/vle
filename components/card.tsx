import Link from "next/link";
import ShineBorder from "./ui/animated-border";

export interface cardProps {
  text: string;
  href: string;
}
export function Card({ text, href }: cardProps) {
  return (
    <Link href={href}>
      <ShineBorder
        className="text-center text-xl font-normal text-gray-600 "
        color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
      >
        {text}
      </ShineBorder>
    </Link>
  );
}
